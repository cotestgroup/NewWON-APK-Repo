import React from 'react';
import { Database, Calendar, Fingerprint, Copy, Download } from 'lucide-react';
import { APKArtifact } from '../types';
import { motion } from 'motion/react';
import { AndroidIcon } from '../components/AndroidIcon';

interface DetailViewProps {
  apk: APKArtifact;
}

export const DetailView: React.FC<DetailViewProps> = ({ apk }) => {
  return (
    <main className="pt-24 pb-12 px-4 max-w-2xl mx-auto space-y-6">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/15 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-gradient"></div>
        <div className="w-20 h-20 bg-primary-fixed mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-inner">
          <AndroidIcon size={52} className="text-primary" fill="currentColor" />
        </div>
        <h1 className="text-2xl font-extrabold text-primary tracking-tight mb-3">{apk.name}</h1>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container-high rounded-full">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">{apk.version}</span>
          <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
          <span className="text-xs font-medium text-on-surface-variant">Build #{apk.buildNumber}</span>
        </div>
      </motion.section>

      {/* Metadata Grid */}
      <div className="grid gap-3">
        <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between border border-outline-variant/10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <Database size={20} />
            </div>
            <span className="text-sm text-on-surface-variant font-semibold uppercase tracking-wider">File Size</span>
          </div>
          <span className="text-base font-bold text-on-surface">{apk.size}</span>
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between border border-outline-variant/10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <Calendar size={20} />
            </div>
            <span className="text-sm text-on-surface-variant font-semibold uppercase tracking-wider">Uploaded</span>
          </div>
          <span className="text-base font-bold text-on-surface">{apk.timestamp}</span>
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between border border-outline-variant/10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <Fingerprint size={20} />
            </div>
            <span className="text-sm text-on-surface-variant font-semibold uppercase tracking-wider">Build ID</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-on-surface bg-surface-container-high px-2 py-1 rounded">{apk.buildId}</span>
            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-primary">
              <Copy size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <section className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/15 flex flex-col items-center shadow-sm">
        <h3 className="text-sm font-bold text-primary mb-8 uppercase tracking-widest flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></div>
          Scan for Quick Install
        </h3>
        <div className="relative p-6 bg-white rounded-3xl shadow-xl border border-outline-variant/20">
          <img 
            alt="QR Code" 
            className="w-44 h-44" 
            referrerPolicy="no-referrer"
            src={`https://api.qrserver.com/v1/create-qr-code/?size=176x176&data=https://ais-dev-2vhekfabqgmnobgb66cms5-24463632500.asia-southeast1.run.app/download/${apk.id}`} 
          />
          {/* Decorative Corners */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl"></div>
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl"></div>
        </div>
        <p className="mt-8 text-sm text-on-surface-variant text-center max-w-[240px] leading-relaxed">
          Scan this code with your mobile camera to begin <span className="text-primary font-bold">instant installation</span>.
        </p>
      </section>

      {/* Primary Action */}
      <div className="pt-4 sticky bottom-6">
        <button className="w-full bg-primary-gradient text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
          <Download size={24} fill="currentColor" />
          Download APK
        </button>
      </div>
    </main>
  );
};
