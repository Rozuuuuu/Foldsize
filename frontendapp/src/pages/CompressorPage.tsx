import DropZone from '../components/Compressor/DropZone';
import CompressionLevel from '../components/Compressor/CompressionLevel';
import RecentActivity from '../components/Compressor/RecentActivity';

interface CompressorPageProps {
  isMobile: boolean;
}

const CompressorPage: React.FC<CompressorPageProps> = ({ isMobile }) => {
  return (
    <main className={`${!isMobile ? 'md:ml-20' : ''} px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 max-w-7xl mx-auto min-h-screen flex flex-col ${isMobile ? 'pb-20' : 'pb-8'}`}>
      {/* Header - Hidden on mobile */}
      <header className="hidden md:flex justify-between items-center mb-6 md:mb-8 lg:mb-12 border-b border-paper-grey pb-3 md:pb-4">
        <h1 className="font-display-lg text-display-lg text-ink">Compressor</h1>
      </header>

      {/* Mobile Header - Shown only on mobile */}
      <div className="md:hidden flex justify-between items-center mb-4 border-b border-paper-grey pb-3">
        <h1 className="font-headline-md-mobile text-headline-md-mobile text-ink">Compressor</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-12 flex-grow">
        {/* Left Column - Drop Zone */}
        <div className="lg:col-span-8 flex flex-col min-h-[300px] md:min-h-[400px]">
          <DropZone />
        </div>

        {/* Right Column - Settings & Recent */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6 lg:gap-8 mt-4 lg:mt-0">
          <CompressionLevel />
          <RecentActivity />
        </div>
      </div>
    </main>
  );
};

export default CompressorPage;