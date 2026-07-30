import { useState } from 'react';

type Level = 'FAST' | 'BALANCED' | 'MAXIMUM';

const CompressionLevel: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('BALANCED');

  const levels: Level[] = ['FAST', 'BALANCED', 'MAXIMUM'];

  return (
    <section>
      <h2 className="font-headline-md-mobile text-headline-md-mobile text-ink mb-6 border-b border-paper-grey pb-2 inline-block">
        Compression Level
      </h2>
      <div className="flex space-x-0 border-b border-paper-grey">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`relative px-6 py-3 font-label-caps text-label-caps transition-colors ${
              selectedLevel === level
                ? 'text-ink font-bold bg-bone'
                : 'text-on-surface-variant hover:text-ink'
            }`}
          >
            {level}
            {selectedLevel === level && (
              <div className="absolute top-0 left-0 w-full h-1 bg-ochre" />
            )}
          </button>
        ))}
      </div>
      <p className="mt-4 font-body-base text-sm text-on-surface-variant">
        Balanced provides the best ratio of visual quality to file size reduction for most general use cases.
      </p>
    </section>
  );
};

export default CompressionLevel;