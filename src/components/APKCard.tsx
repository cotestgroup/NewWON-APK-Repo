import React from 'react';
import { Bug, History, Download, ArrowRight } from 'lucide-react';
import { APKArtifact } from '../types';
import { motion } from 'motion/react';
import { AndroidIcon } from './AndroidIcon';

interface APKCardProps {
  apk: APKArtifact;
  onClick: (apk: APKArtifact) => void;
  isOld?: boolean;
}

export const APKCard: React.FC<APKCardProps> = ({ apk, onClick, isOld }) => {
  const Icon = isOld ? History : (apk.type === 'debug' ? Bug : null);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl shadow-sm border border-outline-variant/15 flex flex-col overflow-hidden transition-all active:scale-[0.99] ${
        isOld ? 'bg-surface-container-low opacity-80' : 'bg-surface-container-lowest'
      }`}
    >
      {/* Prominent Detail Button Area */}
      <div 
        onClick={() => onClick(apk)}
        className={`p-4 flex items-start justify-between cursor-pointer transition-colors ${
          isOld ? 'hover:bg-black/5' : 'bg-primary/5 hover:bg-primary/10'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            isOld ? 'bg-surface-container-highest text-outline-variant' : 
            (apk.type === 'debug' ? 'bg-surface-container-high text-on-surface-variant' : 'bg-primary-fixed text-primary shadow-sm')
          }`}>
            {Icon ? <Icon size={24} /> : <AndroidIcon size={28} fill={!isOld ? "currentColor" : "none"} />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-on-surface text-base leading-tight">{apk.name}</h3>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Build #{apk.buildNumber} • {apk.timestamp}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                isOld ? 'text-on-surface-variant bg-surface-container-highest' : 'text-on-secondary-container bg-secondary-container'
              }`}>
                {apk.size}
              </span>
              {apk.type === 'debug' && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent-red/10 text-accent-red">
                  Debug
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="text-primary/40">
          <ArrowRight size={20} />
        </div>
      </div>
      
      {/* Action Area */}
      <div className="px-4 pb-4 mt-2">
        <button className={`w-full h-11 rounded-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform ${
          isOld ? 'bg-surface-container-high text-on-surface-variant' : 'bg-primary-gradient text-white shadow-md shadow-primary/20'
        }`}>
          <Download size={18} />
          Download APK
        </button>
      </div>
    </motion.div>
  );
};
