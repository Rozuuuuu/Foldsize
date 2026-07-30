import { useState } from 'react';

type Format = 'original' | 'webp' | 'jpeg';

const OutputFormat: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<Format>('original');

  const formats = [
    { id: 'original', label: 'Keep Original Format' },
    { id: 'webp', label: 'Force WebP' },
    { id: 'jpeg', label: 'Force JPEG' },
  ];

  return (
    <section>
      <h2 className="font-headline-md-mobile text-headline-md-mobile text-ink mb-6 border-b border-paper-grey pb-2 inline-block">
        Output Format
      </h2>
      <div className="space-y-4">
        {formats.map((format) => (
          <label
            key={format.id}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setSelectedFormat(format.id as Format)}
          >
            <div className="w-4 h-4 rounded-full border border-paper-grey group-hover:border-ink flex items-center justify-center relative">
              {selectedFormat === format.id && (
                <div className="w-2 h-2 rounded-full bg-ochre" />
              )}
            </div>
            <span
              className={`font-body-base text-body-base transition-colors ${
                selectedFormat === format.id
                  ? 'text-ink'
                  : 'text-on-surface-variant group-hover:text-ink'
              }`}
            >
              {format.label}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default OutputFormat;