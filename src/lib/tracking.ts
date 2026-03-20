import { v4 as uuidv4 } from 'uuid';
import { saveLeadToFirebase, getLeadsFromFirebase, type LeadData } from './firebase';

export type LeadType = 'whatsapp' | 'phone' | 'form' | 'page_view';

export type Lead = LeadData;

export interface Analytics {
  visitorId: string;
  sessionStart: string;
  sessionEnd?: string;
  pages: string[];
  totalTime: number;
  ip: string;
  location: {
    city: string;
    country: string;
  };
  device: string;
  browser: string;
}

// Generate or get visitor ID
export const getVisitorId = (): string => {
  let visitorId = localStorage.getItem('visitorId');
  if (!visitorId) {
    visitorId = uuidv4();
    localStorage.setItem('visitorId', visitorId);
  }
  return visitorId;
};

// Get device info
export const getDeviceInfo = (): { device: string; browser: string } => {
  const userAgent = navigator.userAgent;
  let device = 'Desktop';
  let browser = 'Unknown';

  // Detect device
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    device = 'Mobile';
  } else if (/iPad|Android/i.test(userAgent)) {
    device = 'Tablet';
  }

  // Detect browser
  if (userAgent.indexOf('Chrome') > -1) browser = 'Chrome';
  else if (userAgent.indexOf('Safari') > -1) browser = 'Safari';
  else if (userAgent.indexOf('Firefox') > -1) browser = 'Firefox';
  else if (userAgent.indexOf('Edge') > -1) browser = 'Edge';
  else if (userAgent.indexOf('Opera') > -1) browser = 'Opera';

  return { device, browser };
};

// Get IP and location
export const getLocation = async (): Promise<{ ip: string; city: string; country: string }> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      ip: data.ip || 'unknown',
      city: data.city || 'unknown',
      country: data.country_name || 'unknown'
    };
  } catch {
    return { ip: 'unknown', city: 'unknown', country: 'unknown' };
  }
};

// Track event - saves to Firebase
export const trackEvent = async (
  type: LeadType,
  page: string,
  data?: Record<string, unknown>
): Promise<void> => {
  const visitorId = getVisitorId();
  const { device, browser } = getDeviceInfo();
  const location = await getLocation();

  const lead: Omit<Lead, 'id'> = {
    timestamp: new Date().toISOString(),
    type,
    source: window.location.hostname,
    visitorId,
    ip: location.ip,
    location: {
      city: location.city,
      country: location.country
    },
    device,
    browser,
    page,
    data
  };

  // Save to Firebase (primary)
  try {
    await saveLeadToFirebase(lead);
  } catch (error) {
    console.error('Failed to save to Firebase, falling back to localStorage:', error);
    // Fallback to localStorage if Firebase fails
    const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
    existingLeads.push({ ...lead, id: uuidv4() });
    localStorage.setItem('leads', JSON.stringify(existingLeads));
  }

  // Also send to analytics
  updateAnalytics(visitorId, page);
};

// Update analytics session
const updateAnalytics = (visitorId: string, page: string): void => {
  const existingAnalytics = JSON.parse(localStorage.getItem('analytics') || '[]');
  const sessionIndex = existingAnalytics.findIndex(
    (a: Analytics) => a.visitorId === visitorId && !a.sessionEnd
  );

  if (sessionIndex >= 0) {
    // Update existing session
    existingAnalytics[sessionIndex].pages.push(page);
    existingAnalytics[sessionIndex].totalTime = 
      Date.now() - new Date(existingAnalytics[sessionIndex].sessionStart).getTime();
  } else {
    // Create new session
    const { device, browser } = getDeviceInfo();
    getLocation().then(location => {
      const newSession: Analytics = {
        visitorId,
        sessionStart: new Date().toISOString(),
        pages: [page],
        totalTime: 0,
        ip: location.ip,
        location: {
          city: location.city,
          country: location.country
        },
        device,
        browser
      };
      existingAnalytics.push(newSession);
      localStorage.setItem('analytics', JSON.stringify(existingAnalytics));
    });
  }

  localStorage.setItem('analytics', JSON.stringify(existingAnalytics));
};

// End session
export const endSession = (): void => {
  const visitorId = getVisitorId();
  const existingAnalytics = JSON.parse(localStorage.getItem('analytics') || '[]');
  const sessionIndex = existingAnalytics.findIndex(
    (a: Analytics) => a.visitorId === visitorId && !a.sessionEnd
  );

  if (sessionIndex >= 0) {
    existingAnalytics[sessionIndex].sessionEnd = new Date().toISOString();
    existingAnalytics[sessionIndex].totalTime = 
      Date.now() - new Date(existingAnalytics[sessionIndex].sessionStart).getTime();
    localStorage.setItem('analytics', JSON.stringify(existingAnalytics));
  }
};

// Get all leads - from Firebase
export const getLeads = async (): Promise<Lead[]> => {
  try {
    return await getLeadsFromFirebase();
  } catch (error) {
    console.error('Failed to get leads from Firebase, falling back to localStorage:', error);
    return JSON.parse(localStorage.getItem('leads') || '[]');
  }
};

// Get all analytics
export const getAnalytics = (): Analytics[] => {
  return JSON.parse(localStorage.getItem('analytics') || '[]');
};

// Get stats
export const getStats = async () => {
  const leads = await getLeads();
  const analytics = getAnalytics();

  const today = new Date().toDateString();
  const todayLeads = leads.filter(l => new Date(l.timestamp).toDateString() === today);
  const todayVisitors = analytics.filter(a => new Date(a.sessionStart).toDateString() === today);

  return {
    totalVisitors: analytics.length,
    todayVisitors: todayVisitors.length,
    totalLeads: leads.length,
    todayLeads: todayLeads.length,
    whatsappClicks: leads.filter(l => l.type === 'whatsapp').length,
    phoneClicks: leads.filter(l => l.type === 'phone').length,
    formSubmissions: leads.filter(l => l.type === 'form').length,
    conversionRate: analytics.length > 0 ? (leads.length / analytics.length * 100).toFixed(2) : '0'
  };
};

// Export to CSV
export const exportToCSV = (data: Lead[] | Analytics[], filename: string): void => {
  const headers = Object.keys(data[0] || {}).join(',');
  const rows = data.map(row => Object.values(row).map(val => 
    typeof val === 'object' ? JSON.stringify(val) : val
  ).join(','));
  
  const csv = [headers, ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};
