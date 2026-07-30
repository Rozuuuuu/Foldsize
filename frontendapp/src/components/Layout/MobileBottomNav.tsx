interface MobileBottomNavProps {
  activePage?: string;
  onPageChange?: (page: 'compressor' | 'history' | 'settings') => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  activePage = 'compressor', 
  onPageChange 
}) => {
  const handleNavClick = (page: 'compressor' | 'history' | 'settings') => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-bone text-ink border-t border-paper-grey z-50">
      <ul className="flex justify-around items-center py-2">
        <li className="flex-1 flex justify-center">
          <button
            onClick={() => handleNavClick('compressor')}
            className={`flex flex-col items-center p-2 relative ${
              activePage === 'compressor'
                ? 'text-ochre after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:bg-ochre'
                : 'text-on-surface-variant opacity-60 hover:text-ink transition-opacity'
            }`}
          >
            <span className="material-symbols-outlined">folder_zip</span>
          </button>
        </li>
        <li className="flex-1 flex justify-center">
          <button
            onClick={() => handleNavClick('history')}
            className={`flex flex-col items-center p-2 relative ${
              activePage === 'history'
                ? 'text-ochre after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:bg-ochre'
                : 'text-on-surface-variant opacity-60 hover:text-ink transition-opacity'
            }`}
          >
            <span className="material-symbols-outlined">history</span>
          </button>
        </li>
        <li className="flex-1 flex justify-center">
          <button
            onClick={() => handleNavClick('settings')}
            className={`flex flex-col items-center p-2 relative ${
              activePage === 'settings'
                ? 'text-ochre after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:bg-ochre'
                : 'text-on-surface-variant opacity-60 hover:text-ink transition-opacity'
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileBottomNav;