interface DesktopSidebarProps {
  activePage?: string;
  onPageChange?: (page: 'compressor' | 'history' | 'settings') => void;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ 
  activePage = 'compressor', 
  onPageChange 
}) => {
  const handleNavClick = (page: 'compressor' | 'history' | 'settings') => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <nav className="hidden md:flex flex-col items-center py-6 bg-bone text-ink font-label-caps text-label-caps fixed left-0 top-0 h-screen w-16 lg:w-20 border-r border-paper-grey z-50">
      {/* Logo */}
      <div className="font-headline-md text-headline-md text-ink uppercase tracking-widest mb-8">
        F
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col items-center space-y-6">
        <button
          aria-label="Compressor"
          onClick={() => handleNavClick('compressor')}
          className={`relative flex flex-col items-center justify-center p-2 group ${
            activePage === 'compressor'
              ? 'text-ochre after:content-[""] after:absolute after:left-0 after:w-0.5 after:h-8 after:bg-ochre'
              : 'text-on-surface-variant opacity-60 hover:text-ink transition-opacity'
          }`}
        >
          <span className="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform">
            folder_zip
          </span>
        </button>

        <button
          aria-label="History"
          onClick={() => handleNavClick('history')}
          className={`relative flex flex-col items-center justify-center p-2 group ${
            activePage === 'history'
              ? 'text-ochre after:content-[""] after:absolute after:left-0 after:w-0.5 after:h-8 after:bg-ochre'
              : 'text-on-surface-variant opacity-60 hover:text-ink transition-opacity'
          }`}
        >
          <span className="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform">
            history
          </span>
        </button>

        <button
          aria-label="Settings"
          onClick={() => handleNavClick('settings')}
          className={`relative flex flex-col items-center justify-center p-2 group ${
            activePage === 'settings'
              ? 'text-ochre after:content-[""] after:absolute after:left-0 after:w-0.5 after:h-8 after:bg-ochre'
              : 'text-on-surface-variant opacity-60 hover:text-ink transition-opacity'
          }`}
        >
          <span className="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform">
            settings
          </span>
        </button>
      </div>

      {/* Avatar at bottom */}
      <div className="mt-auto pt-6 border-t border-paper-grey w-full flex justify-center">
        <div className="w-8 h-8 rounded-full bg-surface-variant border border-paper-grey overflow-hidden flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">
            person
          </span>
        </div>
      </div>
    </nav>
  );
};

export default DesktopSidebar;