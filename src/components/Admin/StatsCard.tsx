import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, icon: Icon, trend, trendUp }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#c9a962]/30 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/60 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
          {subtitle && <p className="text-white/40 text-sm mt-1">{subtitle}</p>}
          {trend && (
            <div className={`flex items-center gap-1 mt-3 text-sm ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
              <span>{trendUp ? '↑' : '↓'}</span>
              <span>{trend}</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-[#c9a962]/10 rounded-lg">
          <Icon className="w-6 h-6 text-[#c9a962]" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
