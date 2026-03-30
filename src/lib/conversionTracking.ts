// Google Ads Conversion Tracking
export const GOOGLE_ADS_CONFIG = {
  // Replace with your actual Google Ads Conversion ID and Label
  CONVERSION_ID: 'AW-XXXXXXXXX', // Your Google Ads Conversion ID
  CONVERSION_LABEL: 'XXXXXXXXXXXXXXXX', // Your Conversion Label
};

// Facebook Pixel Tracking
export const FACEBOOK_PIXEL_CONFIG = {
  PIXEL_ID: 'XXXXXXXXXXXXXXXX', // Your Facebook Pixel ID
};

// Track Google Ads Conversion
export const trackGoogleAdsConversion = (value?: number, currency: string = 'INR') => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_CONFIG.CONVERSION_ID}/${GOOGLE_ADS_CONFIG.CONVERSION_LABEL}`,
      value: value || 1.0,
      currency: currency,
    });
  }
};

// Track Facebook Pixel Event
export const trackFacebookPixel = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }
};

// Track Lead Conversion (Form Submission)
export const trackLeadConversion = (source: string, value?: number) => {
  // Google Ads
  trackGoogleAdsConversion(value);
  
  // Facebook Pixel
  trackFacebookPixel('Lead', {
    content_name: source,
    value: value || 0,
    currency: 'INR',
  });
  
  // Track in console for debugging
  console.log(`[Conversion] Lead tracked from: ${source}`);
};

// Track WhatsApp Click
export const trackWhatsAppConversion = () => {
  trackGoogleAdsConversion();
  trackFacebookPixel('Contact', {
    content_name: 'WhatsApp Click',
  });
};

// Track Phone Call
export const trackPhoneConversion = () => {
  trackGoogleAdsConversion();
  trackFacebookPixel('Contact', {
    content_name: 'Phone Call',
  });
};

// Track Page View for remarketing
export const trackPageView = (pagePath: string) => {
  trackFacebookPixel('PageView', {
    page_path: pagePath,
  });
};

// Track Popup Impression
export const trackPopupImpression = (popupType: string) => {
  trackFacebookPixel('ViewContent', {
    content_name: `Popup - ${popupType}`,
    content_type: 'popup',
  });
};

// Initialize tracking scripts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initializeTracking = () => {
  // Initialize Google Ads
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ADS_CONFIG.CONVERSION_ID);
  }
};
