import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ListView } from './screens/ListView';
import { DetailView } from './screens/DetailView';
import { APKArtifact } from './types';

export default function App() {
  const [selectedAPK, setSelectedAPK] = useState<APKArtifact | null>(null);

  const handleBack = () => {
    setSelectedAPK(null);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header 
        title="Woori APK Repo" 
        showBack={!!selectedAPK} 
        onBack={handleBack} 
      />
      
      <div className="flex-grow">
        {selectedAPK ? (
          <DetailView apk={selectedAPK} />
        ) : (
          <ListView onSelectAPK={setSelectedAPK} />
        )}
      </div>

      <Footer />
    </div>
  );
}
