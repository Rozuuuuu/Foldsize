const SaveButton: React.FC = () => {
  const handleSave = () => {
    console.log('Settings saved!');
  };

  return (
    <div className="mt-8 md:mt-12 lg:mt-16 pt-6 md:pt-8 border-t border-paper-grey flex flex-col sm:flex-row justify-end gap-4">
      <button
        onClick={handleSave}
        className="w-full sm:w-auto px-6 md:px-8 py-2 md:py-3 bg-ink text-bone font-label-caps text-label-caps rounded hover:bg-ink/90 transition-colors tracking-wider text-sm md:text-base"
      >
        SAVE CHANGES
      </button>
    </div>
  );
};

export default SaveButton;