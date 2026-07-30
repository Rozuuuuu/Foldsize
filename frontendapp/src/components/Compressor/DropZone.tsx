import { useRef, useState, DragEvent } from 'react';
import styles from './DropZone.module.css';

const DropZone: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFiles(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files[0]);
    }
    e.target.value = '';
  };

  const handleFiles = (file: File) => {
    setFileName(file.name);
    setUploading(true);
    console.log('File selected:', file.name, file.size, file.type);

    setTimeout(() => {
      setUploading(false);
      console.log('File processed successfully!');
    }, 2000);
  };

  return (
    <div
      className={`relative border-2 border-dashed rounded-lg transition-all duration-300 min-h-[250px] md:min-h-[350px] lg:min-h-[400px] flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 cursor-pointer ${
        isDragOver
          ? 'border-ochre bg-surface-container-high'
          : 'border-paper-grey bg-surface-container-low hover:bg-surface-container'
      } ${uploading ? 'opacity-60 pointer-events-none' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => !uploading && fileInputRef.current?.click()}
    >
      {/* Decorative Stack Cards - Hidden on mobile */}
      <div className="hidden sm:block relative w-40 md:w-48 lg:w-64 h-48 md:h-60 lg:h-80 mb-4 md:mb-6 lg:mb-8 transition-transform duration-300 group-hover:scale-105">
        {/* Bottom Card - Image */}
        <div
          className={`absolute inset-0 border border-paper-grey transform translate-y-2 md:translate-y-3 translate-x-2 md:translate-x-3 rotate-3 ${styles.cardBot} rounded shadow-sm flex items-center justify-center overflow-hidden`}
        >
          <div
            className="w-full h-full bg-cover bg-center opacity-30 grayscale"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhygbbKRRx9oPRKJ16qajxldJKbexQN4eT7ShkD6kEv7cF9jkQ1M6Ilg3GnuBJ0yXVT0kOOrLJTwn85pC2aRFhHPgzT2CW8zouhkQqXEB-dRj_1rKnY34wW0VJOvoXoQaJEvg6cfDmESHsWYirxbQ892WD0eobgTHINiKP7jHw5XMNCNlvAlvujm79F5l3JCDoRPHugyeaXraXJN4xWHkkEcJTlq4jvNkzHFLsnrkVpEgLwpqbDeM9DQ')`,
            }}
            role="img"
            aria-label="Minimalist architectural shadows"
          />
        </div>

        {/* Middle Card - Skeleton */}
        <div
          className={`absolute inset-0 bg-bone border border-paper-grey transform translate-y-1 translate-x-1 -rotate-1 ${styles.cardMid} rounded shadow-sm p-3 md:p-4 flex flex-col`}
        >
          <div className="w-3/4 h-2 md:h-3 bg-paper-grey mb-2 rounded opacity-50" />
          <div className="w-1/2 h-2 md:h-3 bg-paper-grey rounded opacity-50" />
          <div className="mt-auto w-2/3 h-2 md:h-3 bg-paper-grey rounded opacity-30" />
        </div>

        {/* Top Card - Main Content */}
        <div
          className={`absolute inset-0 bg-surface-container-lowest border border-paper-grey ${styles.cardTop} rounded shadow-sm p-3 md:p-4 lg:p-6 flex flex-col items-center justify-center z-20`}
        >
          {uploading ? (
            <>
              <span className="material-symbols-outlined text-3xl md:text-4xl lg:text-5xl text-ochre mb-2 md:mb-3 lg:mb-4 animate-spin">
                autorenew
              </span>
              <p className="font-data-mono text-data-mono text-center text-ink text-xs md:text-sm lg:text-base">
                Processing...
              </p>
              {fileName && (
                <p className="font-body-base text-body-base text-on-surface-variant text-center text-xs mt-2 truncate max-w-[150px] md:max-w-[200px]">
                  {fileName}
                </p>
              )}
            </>
          ) : fileName ? (
            <>
              <span className="material-symbols-outlined text-3xl md:text-4xl lg:text-5xl text-green-600 mb-2 md:mb-3 lg:mb-4">
                check_circle
              </span>
              <p className="font-data-mono text-data-mono text-center text-ink text-xs md:text-sm lg:text-base">
                File ready
              </p>
              <p className="font-body-base text-body-base text-on-surface-variant text-center text-xs mt-2 truncate max-w-[150px] md:max-w-[200px]">
                {fileName}
              </p>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-3xl md:text-4xl lg:text-5xl text-ink mb-2 md:mb-3 lg:mb-4 opacity-80">
                upload_file
              </span>
              <p className="font-data-mono text-data-mono text-center opacity-80 text-xs md:text-sm lg:text-base">
                Drop a file onto the stack
              </p>
            </>
          )}
        </div>
      </div>

      {/* Mobile-only icon - shown only on small screens */}
      <div className="sm:hidden flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-ink mb-3 opacity-80">
          upload_file
        </span>
        <p className="font-data-mono text-data-mono text-center opacity-80 text-sm">
          Tap to select a file
        </p>
      </div>

      {/* Bottom text */}
      <p className="font-body-base text-body-base text-on-surface-variant text-center text-xs md:text-sm lg:text-base">
        {uploading ? 'Uploading and compressing...' : 'Or click to browse your folders'}
      </p>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        title=""
        onChange={handleFileSelect}
        disabled={uploading}
      />
    </div>
  );
};

export default DropZone;