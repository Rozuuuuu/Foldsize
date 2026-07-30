interface HistoryHeaderProps {
  title: string;
}

const HistoryHeader: React.FC<HistoryHeaderProps> = ({ title }) => {
  return (
    <header className="sticky top-0 bg-bone border-b border-paper-grey flex justify-between items-center px-gutter py-4 z-40">
      <div className="flex items-center space-x-4 flex-1">
        <h1 className="font-headline-md text-headline-md md:text-display-lg font-display-lg text-ink m-0">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default HistoryHeader;