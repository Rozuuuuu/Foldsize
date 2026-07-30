import { useState } from 'react';

interface HistorySearchProps {
  onSearch?: (query: string) => void;
}

const HistorySearch: React.FC<HistorySearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="relative w-full">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm">
        search
      </span>
      <input
        className="w-full bg-surface-bright border border-paper-grey rounded-sm pl-8 md:pl-9 pr-3 md:pr-4 py-1.5 md:py-2 font-data-mono text-data-mono text-sm md:text-base focus:outline-none focus:border-ochre focus:ring-0 transition-colors"
        placeholder="Search filenames or formats..."
        type="text"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default HistorySearch;