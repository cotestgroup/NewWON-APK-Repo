import React from 'react';
import { RepoStats } from '../types';

interface AnalyticsProps {
  stats: RepoStats;
}

export const Analytics: React.FC<AnalyticsProps> = ({ stats }) => {
  return (
    <div className="mt-12 mb-4">
      <h2 className="text-sm font-semibold text-on-surface-variant tracking-wider uppercase mb-4 px-1">Repo Analytics</h2>
      <div className="grid grid-cols-2 gap-3 h-32">
        <div className="bg-primary-gradient p-4 rounded-2xl flex flex-col justify-end text-white shadow-lg shadow-primary/20">
          <span className="text-2xl font-bold">{stats.totalStorage}</span>
          <span className="text-xs opacity-80 font-medium">Total Storage</span>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-outline-variant/15 flex items-center justify-between group hover:border-primary/30 transition-colors">
            <span className="text-xs font-semibold text-on-surface-variant">Active Branches</span>
            <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-lg">{stats.activeBranches}</span>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-outline-variant/15 flex items-center justify-between group hover:border-secondary/30 transition-colors">
            <span className="text-xs font-semibold text-on-surface-variant">Last Sync</span>
            <span className="text-secondary font-bold flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
              {stats.lastSync}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
