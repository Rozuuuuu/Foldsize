import FoldReveal from './FoldReveal';

interface ActivityCardProps {
  id: number;
  name: string;
  originalSize: string;
  compressedSize: string;
  percentage: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  isProcessing?: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  name,
  originalSize,
  compressedSize,
  percentage,
  thumbnailUrl,
  thumbnailAlt,
  isProcessing = false,
}) => {
  return (
    <div
      className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 border border-paper-grey rounded bg-surface-container-lowest hover:bg-surface-container-low transition-colors ${
        isProcessing ? 'opacity-70' : 'cursor-pointer'
      }`}
    >
      {/* Thumbnail */}
      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-surface-variant rounded border border-paper-grey flex-shrink-0 overflow-hidden flex items-center justify-center">
        {isProcessing ? (
          <span className="material-symbols-outlined animate-spin text-ink opacity-50 text-base md:text-xl">
            autorenew
          </span>
        ) : (
          <img
            src={thumbnailUrl}
            alt={thumbnailAlt}
            className="w-full h-full object-cover grayscale"
          />
        )}
      </div>

      {/* Info */}
      <div className="flex-grow min-w-0">
        <p className="font-body-base text-body-base truncate text-ink text-xs md:text-sm lg:text-base">
          {name}
        </p>
        <div className="font-data-mono text-data-mono text-on-surface-variant mt-0.5 flex items-center gap-1 md:gap-2 text-xs md:text-sm flex-wrap">
          {isProcessing ? (
            <span>Processing...</span>
          ) : (
            <>
              <span className="text-xs md:text-sm">{originalSize}</span>
              <span className="text-on-surface-variant text-xs md:text-sm">→</span>
              <span className="text-xs md:text-sm">{compressedSize}</span>
              <div className="inline-block w-10 md:w-12 h-4 md:h-5 align-middle cursor-help">
                <FoldReveal
                  front={<span className="text-ochre font-semibold text-xs md:text-sm">{percentage}</span>}
                  back={<span className="text-ink font-semibold text-xs md:text-sm">✓ Done</span>}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;