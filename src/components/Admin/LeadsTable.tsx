import React, { useState } from 'react';
import { Lead, exportToCSV } from '@/lib/tracking';
import { Download, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

interface LeadsTableProps {
  leads: Lead[];
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.location.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.page.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || lead.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  // Pagination
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExport = () => {
    exportToCSV(filteredLeads, `leads-${format(new Date(), 'yyyy-MM-dd')}.csv`);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'whatsapp': return 'bg-green-500/20 text-green-400';
      case 'phone': return 'bg-blue-500/20 text-blue-400';
      case 'form': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">Recent Leads</h3>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#c9a962] w-full sm:w-64"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-8 text-white text-sm focus:outline-none focus:border-[#c9a962] appearance-none cursor-pointer"
              >
                <option value="all" className="bg-[#1a1f2e]">All Types</option>
                <option value="whatsapp" className="bg-[#1a1f2e]">WhatsApp</option>
                <option value="phone" className="bg-[#1a1f2e]">Phone</option>
                <option value="form" className="bg-[#1a1f2e]">Form</option>
              </select>
            </div>

            {/* Export */}
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-[#c9a962]/10 text-[#c9a962] rounded-lg hover:bg-[#c9a962]/20 transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left text-white/60 font-medium text-sm py-3 px-6">Type</th>
              <th className="text-left text-white/60 font-medium text-sm py-3 px-6">Location</th>
              <th className="text-left text-white/60 font-medium text-sm py-3 px-6">Page</th>
              <th className="text-left text-white/60 font-medium text-sm py-3 px-6">Device</th>
              <th className="text-left text-white/60 font-medium text-sm py-3 px-6">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {paginatedLeads.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-white/40 py-8">
                  No leads found
                </td>
              </tr>
            ) : (
              paginatedLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(lead.type)}`}>
                      {lead.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-white text-sm">
                    {lead.location.city}, {lead.location.country}
                  </td>
                  <td className="py-4 px-6 text-white/60 text-sm">
                    {lead.page}
                  </td>
                  <td className="py-4 px-6 text-white/60 text-sm">
                    {lead.device} - {lead.browser}
                  </td>
                  <td className="py-4 px-6 text-white/60 text-sm">
                    {format(new Date(lead.timestamp), 'MMM dd, yyyy HH:mm')}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-white/10 flex items-center justify-between">
          <p className="text-white/40 text-sm">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredLeads.length)} of {filteredLeads.length} leads
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-white/60 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsTable;
