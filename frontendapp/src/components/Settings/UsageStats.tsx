const UsageStats: React.FC = () => {
  const compressedCount = 42;
  const maxLimit = 100;
  const percentage = (compressedCount / maxLimit) * 100;

  return (
    <div className="border border-paper-grey p-4 md:p-6 lg:p-8 sticky top-24 bg-bone">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 md:mb-6 uppercase tracking-widest border-b border-paper-grey pb-2 text-xs md:text-sm">
        Current Cycle Usage
      </h3>

      <div className="mb-6 md:mb-8">
        <div className="font-data-mono text-data-mono text-ink text-3xl md:text-4xl lg:text-5xl mb-1 md:mb-2">
          {compressedCount}
        </div>
        <div className="font-body-base text-sm text-on-surface-variant">
          files compressed this month
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-paper-grey h-1 mb-2">
        <div
          className="bg-ink h-1 transition-all duration-500"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>

      <div className="flex justify-between font-data-mono text-xs text-on-surface-variant mb-6 md:mb-8">
        <span>0</span>
        <span>{maxLimit} limit</span>
      </div>

      <a
        className="inline-flex items-center font-label-caps text-label-caps text-ochre hover:text-ink transition-colors group text-xs md:text-sm"
        href="#"
      >
        UPGRADE PLAN
        <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </a>
    </div>
  );
};

export default UsageStats;