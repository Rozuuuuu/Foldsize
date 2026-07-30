import { useState } from 'react';

const levels = ['Low', 'Medium', 'High'];

const CompressionLevel: React.FC = () => {
  const [active, setActive] = useState('Medium');

  return (
    <section className="space-y-2 md:space-y-3">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs md:text-sm">
        Compression Level
      </h3>
      <div className="flex border-b border-paper-grey">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setActive(level)}
            className={`relative px-3 md:px-4 py-2 font-data-mono text-data-mono text-ink flex-1 text-center transition-colors text-xs md:text-sm ${
              active === level
                ? 'bg-surface-container-high border-x border-t border-paper-grey rounded-t z-10'
                : 'hover:bg-surface-container-low'
            }`}
          >
            {level}
            {active === level && (
              <div className="absolute top-0 left-0 w-full h-0.5 md:h-1 bg-ochre rounded-t" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CompressionLevel;