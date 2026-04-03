import React from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack, onBack }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-header shadow-sm flex items-center justify-between px-4 h-16">
      <div className="flex items-center gap-4">
        {showBack && (
          <button 
            onClick={onBack}
            className="text-slate-500 hover:bg-slate-100/50 transition-all duration-300 active:scale-95 p-2 rounded-lg"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        <h1 className="text-xl font-bold text-primary tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={handleRefresh}
          className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 active:scale-95 p-2.5 rounded-xl flex items-center justify-center shadow-sm border border-primary/5"
          title="Refresh"
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </header>
  );
};
