import React from 'react';
import { ShieldCheck, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-8 px-4 border-t border-outline-variant/10 bg-surface-container-low">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Woori APK Repo</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm">
              This is a list of test versions for the NewWON Android application. 
              The system provides the latest builds for internal testing purposes.
            </p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-on-surface-variant">
            <div className="flex items-center gap-1 text-[10px] font-medium">
              <ShieldCheck size={12} className="text-secondary" />
              Verified Builds
            </div>
            <div className="flex items-center gap-1 text-[10px] font-medium">
              <Globe size={12} className="text-secondary" />
              Internal Network
            </div>
          </div>
          <p className="text-[10px] text-on-surface-variant">
            © 2026 Woori Bank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
