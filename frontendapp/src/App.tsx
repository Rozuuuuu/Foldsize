import { useState, useEffect } from 'react';
import DesktopSidebar from './components/Layout/DesktopSidebar';
import MobileHeader from './components/Layout/MobileHeader';
import MobileBottomNav from './components/Layout/MobileBottomNav';
import CompressorPage from './pages/CompressorPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import { useMobile } from './hooks/useMobile';
import './App.css';

type Page = 'compressor' | 'history' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('compressor');
  const isMobile = useMobile();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure layout settles
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <div className="min-h-screen bg-bone"></div>;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'compressor':
        return <CompressorPage isMobile={isMobile} />;
      case 'history':
        return <HistoryPage isMobile={isMobile} />;
      case 'settings':
        return <SettingsPage isMobile={isMobile} />;
      default:
        return <CompressorPage isMobile={isMobile} />;
    }
  };

  return (
    <div className="min-h-screen bg-bone">
      {!isMobile && (
        <DesktopSidebar 
          activePage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
      
      {isMobile && <MobileHeader />}
      
      {renderPage()}
      
      {isMobile && (
        <MobileBottomNav 
          activePage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;