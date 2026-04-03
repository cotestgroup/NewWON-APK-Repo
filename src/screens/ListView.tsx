import React from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { APKCard } from '../components/APKCard';
import { Analytics } from '../components/Analytics';
import { MOCK_APKS, REPO_STATS } from '../constants';
import { APKArtifact } from '../types';

interface ListViewProps {
  onSelectAPK: (apk: APKArtifact) => void;
}

export const ListView: React.FC<ListViewProps> = ({ onSelectAPK }) => {
  return (
    <main className="pt-20 px-4 max-w-2xl mx-auto pb-12">
      {/* Search Section */}
      <section className="mb-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-on-surface-variant" />
          </div>
          <input 
            className="w-full h-14 pl-12 pr-4 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-on-surface-variant focus:ring-0 transition-all duration-200" 
            placeholder="Search versions (e.g. 1.2.3)" 
            type="text"
          />
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-focus-within:w-full"></div>
        </div>
      </section>

      {/* Header Label */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-sm font-semibold text-on-surface-variant tracking-wider uppercase">Recent Artifacts</h2>
        <span className="text-xs font-medium text-primary bg-primary-fixed px-2 py-1 rounded-md">
          {MOCK_APKS.length} Files Found
        </span>
      </div>

      {/* APK List */}
      <div className="space-y-3">
        {MOCK_APKS.map((apk, index) => (
          <APKCard 
            key={apk.id} 
            apk={apk} 
            onClick={onSelectAPK} 
            isOld={index === MOCK_APKS.length - 1}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant/30 cursor-not-allowed">
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-1">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-sm">1</button>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant/30 cursor-not-allowed">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Analytics */}
      <Analytics stats={REPO_STATS} />
    </main>
  );
};
