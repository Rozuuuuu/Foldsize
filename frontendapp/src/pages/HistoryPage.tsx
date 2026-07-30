import HistoryList from '../components/History/HistoryList';
import HistorySearch from '../components/History/HistorySearch';

interface HistoryPageProps {
  isMobile: boolean;
}

const HistoryPage: React.FC<HistoryPageProps> = ({ isMobile }) => {
  return (
    <main className={`${!isMobile ? 'md:ml-20' : ''} flex-1 flex flex-col min-h-screen ${isMobile ? 'pb-20' : 'pb-8'}`}>
      {/* Top App Bar */}
      <header className="sticky top-0 bg-bone border-b border-paper-grey flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 lg:px-12 py-4 z-40 gap-4 md:gap-0">
        <div className="flex items-center space-x-4 flex-1 w-full md:w-auto">
          <h1 className="font-headline-md text-headline-md md:text-display-lg font-display-lg text-ink m-0">
            History
          </h1>
        </div>

        <div className="w-full md:w-auto flex-1 max-w-md relative">
          <HistorySearch />
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
          <button className="text-on-surface-variant hover:opacity-80 transition-all active:translate-y-px">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
          <button className="text-on-surface-variant hover:opacity-80 transition-all active:translate-y-px hidden md:block">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      <div className="flex-1 p-4 md:p-6 lg:p-8 max-w-[1200px] w-full mx-auto">
        <HistoryList />
      </div>
    </main>
  );
};

export default HistoryPage;