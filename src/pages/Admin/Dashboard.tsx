import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getLeads, getAnalytics, getStats, Lead, Analytics } from '@/lib/tracking';
import StatsCard from '@/components/Admin/StatsCard';
import LeadsTable from '@/components/Admin/LeadsTable';
import { 
  Users, 
  MessageCircle, 
  Phone, 
  FileText, 
  TrendingUp, 
  LogOut,
  RefreshCw,
  MapPin,
  Globe,
  Smartphone
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [analytics, setAnalytics] = useState<Analytics[]>([]);
  const [stats, setStats] = useState({
    totalVisitors: 0,
    todayVisitors: 0,
    totalLeads: 0,
    todayLeads: 0,
    whatsappClicks: 0,
    phoneClicks: 0,
    formSubmissions: 0,
    conversionRate: '0'
  });
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = () => {
    const leadsData = getLeads();
    const analyticsData = getAnalytics();
    const statsData = getStats();
    
    setLeads(leadsData.reverse()); // Most recent first
    setAnalytics(analyticsData);
    setStats(statsData);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    loadData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    loadData();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  // Get top locations
  const getTopLocations = () => {
    const locations = leads.reduce((acc, lead) => {
      const key = `${lead.location.city}, ${lead.location.country}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(locations)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  // Get device breakdown
  const getDeviceBreakdown = () => {
    const devices = analytics.reduce((acc, item) => {
      acc[item.device] = (acc[item.device] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(devices)
      .sort(([,a], [,b]) => b - a);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2e] to-[#0f1419]">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-lg font-bold text-[#c9a962]">L</span>
              </div>
              <div>
                <span className="text-lg font-bold text-[#c9a962] tracking-wider">LALANI</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-white/60">Group</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm hidden sm:block">
                Welcome, {user?.username}
              </span>
              <button
                onClick={handleRefresh}
                className={`p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 transition-all ${isRefreshing ? 'animate-spin' : ''}`}
                title="Refresh data"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Last Updated */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
            <p className="text-white/60 text-sm mt-1">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Visitors"
            value={stats.totalVisitors}
            subtitle={`${stats.todayVisitors} today`}
            icon={Users}
          />
          <StatsCard
            title="WhatsApp Clicks"
            value={stats.whatsappClicks}
            subtitle="Lead generation"
            icon={MessageCircle}
          />
          <StatsCard
            title="Phone Clicks"
            value={stats.phoneClicks}
            subtitle="Direct calls"
            icon={Phone}
          />
          <StatsCard
            title="Form Submissions"
            value={stats.formSubmissions}
            subtitle="Inquiries"
            icon={FileText}
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Leads"
            value={stats.totalLeads}
            subtitle={`${stats.todayLeads} today`}
            icon={TrendingUp}
          />
          <StatsCard
            title="Conversion Rate"
            value={`${stats.conversionRate}%`}
            subtitle="Leads / Visitors"
            icon={TrendingUp}
          />
          <StatsCard
            title="Active Sessions"
            value={analytics.filter(a => !a.sessionEnd).length}
            subtitle="Currently browsing"
            icon={Users}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leads Table */}
          <div className="lg:col-span-2">
            <LeadsTable leads={leads} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Locations */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#c9a962]" />
                <h3 className="text-lg font-semibold text-white">Top Locations</h3>
              </div>
              <div className="space-y-3">
                {getTopLocations().length === 0 ? (
                  <p className="text-white/40 text-sm">No data available</p>
                ) : (
                  getTopLocations().map(([location, count]) => (
                    <div key={location} className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">{location}</span>
                      <span className="text-[#c9a962] text-sm font-medium">{count}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Device Breakdown */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-[#c9a962]" />
                <h3 className="text-lg font-semibold text-white">Device Types</h3>
              </div>
              <div className="space-y-3">
                {getDeviceBreakdown().length === 0 ? (
                  <p className="text-white/40 text-sm">No data available</p>
                ) : (
                  getDeviceBreakdown().map(([device, count]) => (
                    <div key={device} className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">{device}</span>
                      <span className="text-[#c9a962] text-sm font-medium">{count}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-[#c9a962]" />
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-[#c9a962] transition-colors text-sm py-2"
                >
                  View Website →
                </a>
                <a 
                  href="/projects" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-[#c9a962] transition-colors text-sm py-2"
                >
                  Projects Page →
                </a>
                <a 
                  href="/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-[#c9a962] transition-colors text-sm py-2"
                >
                  Contact Page →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
