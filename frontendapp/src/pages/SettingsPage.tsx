import SettingsHeader from '../components/Settings/SettingsHeader';
import CompressionLevel from '../components/Settings/CompressionLevel';
import OutputFormat from '../components/Settings/OutputFormat';
import FileManagement from '../components/Settings/FileManagement';
import UsageStats from '../components/Settings/UsageStats';
import SaveButton from '../components/Settings/SaveButton';

interface SettingsPageProps {
  isMobile: boolean;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ isMobile }) => {
  return (
    <main className={`${!isMobile ? 'md:ml-20' : ''} flex-1 min-h-screen pt-4 md:pt-16 ${isMobile ? 'pb-24' : 'pb-8'} px-4 md:px-8 lg:px-12 w-full max-w-[1200px] mx-auto`}>
      <SettingsHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
        <div className="lg:col-span-8 space-y-8 md:space-y-12 lg:space-y-16">
          <CompressionLevel />
          <OutputFormat />
          <FileManagement />
        </div>
        <div className="lg:col-span-4">
          <UsageStats />
        </div>
      </div>

      <SaveButton />
    </main>
  );
};

export default SettingsPage;