const MobileHeader: React.FC = () => {
  return (
    <header className="md:hidden flex justify-between items-center px-gutter py-4 bg-bone text-ink border-b border-paper-grey sticky top-0 z-50">
      <div className="font-display-lg text-display-lg-mobile text-ink">
        Foldsize
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined hover:opacity-80 transition-all cursor-pointer">
          search
        </span>
        <span className="material-symbols-outlined hover:opacity-80 transition-all cursor-pointer">
          account_circle
        </span>
      </div>
    </header>
  );
};

export default MobileHeader;