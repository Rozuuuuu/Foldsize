import { useState } from 'react';

const FileManagement: React.FC = () => {
  const [deleteEnabled, setDeleteEnabled] = useState(false);

  const toggleDelete = () => {
    setDeleteEnabled(!deleteEnabled);
  };

  return (
    <section>
      <h2 className="font-headline-md-mobile text-headline-md-mobile text-ink mb-6 border-b border-paper-grey pb-2 inline-block">
        File Management
      </h2>
      <div className="flex items-center justify-between py-4 border-b border-paper-grey hover:bg-surface-variant/30 transition-colors px-2 -mx-2">
        <div>
          <div className="font-body-base text-body-base text-ink mb-1">
            Delete original files
          </div>
          <div className="font-body-base text-sm text-on-surface-variant">
            Automatically remove uncompressed source files after successful processing.
          </div>
        </div>

        {/* Toggle Switch */}
        <button
          onClick={toggleDelete}
          aria-pressed={deleteEnabled}
          className={`w-12 h-6 rounded-full border relative flex items-center px-1 cursor-pointer transition-colors ${
            deleteEnabled
              ? 'bg-ink border-ink'
              : 'bg-bone border-paper-grey hover:border-ink'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full transition-transform duration-200 ${
              deleteEnabled
                ? 'bg-bone translate-x-6'
                : 'bg-paper-grey translate-x-0'
            }`}
          />
        </button>
      </div>
    </section>
  );
};

export default FileManagement;