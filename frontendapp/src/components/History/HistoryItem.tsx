interface HistoryItemProps {
  id: number;
  name: string;
  icon: string;
  time: string;
  originalSize: string;
  compressedSize: string;
  percentage: string;
  group?: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
  name,
  icon,
  time,
  originalSize,
  compressedSize,
  percentage,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-3 md:py-4 border-b border-paper-grey hover:bg-surface-container-lowest transition-colors group cursor-default">
      {/* File Info - Left */}
      <div className="flex items-center sm:w-2/5 mb-2 sm:mb-0">
        <span className="material-symbols-outlined text-outline-variant mr-2 md:mr-3 text-base md:text-xl">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-body-base text-ink truncate max-w-[150px] sm:max-w-xs text-sm md:text-base">
            {name}
          </p>
          <p className="font-data-mono text-xs text-on-surface-variant sm:hidden mt-0.5">
            {time}
          </p>
        </div>
      </div>

      {/* Time - Center Left (hidden on mobile) */}
      <div className="hidden sm:block sm:w-1/5 font-data-mono text-data-mono text-on-surface-variant text-sm">
        {time}
      </div>

      {/* Sizes - Center */}
      <div className="flex items-center sm:w-1/4 font-data-mono text-data-mono mb-2 sm:mb-0 space-x-1 md:space-x-2 text-xs sm:text-sm">
        <span className="text-on-surface-variant line-through">{originalSize}</span>
        <span className="material-symbols-outlined text-sm md:text-base text-paper-grey">
          arrow_right_alt
        </span>
        <span className="text-ink">{compressedSize}</span>
      </div>

      {/* Percentage & Download - Right */}
      <div className="flex items-center justify-between sm:w-1/5 sm:justify-end space-x-2 md:space-x-4">
        <span className="bg-surface-variant text-ochre font-data-mono text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-sm font-semibold tracking-tight">
          {percentage}
        </span>
        <button
          aria-label="Download"
          className="opacity-0 group-hover:opacity-100 transition-opacity text-ink hover:text-ochre p-1 rounded hover:bg-surface-variant active:scale-95"
          onClick={() => console.log('Download:', name)}
        >
          <span className="material-symbols-outlined text-base md:text-xl">download</span>
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;