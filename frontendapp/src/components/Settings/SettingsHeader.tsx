const SettingsHeader: React.FC = () => {
  return (
    <div className="mb-8 md:mb-12 lg:mb-16 pb-4 md:pb-6 lg:pb-8 border-b border-paper-grey">
      <h1 className="font-headline-md-mobile md:font-display-lg text-headline-md-mobile md:text-display-lg text-ink mb-2">
        Settings
      </h1>
      <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl text-sm md:text-base">
        Configure global compression defaults, output preferences, and manage your account usage.
      </p>
    </div>
  );
};

export default SettingsHeader;