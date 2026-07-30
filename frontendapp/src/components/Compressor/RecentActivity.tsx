import ActivityCard from './ActivityCard';
import { recentItems } from '../../data/mockData';

const RecentActivity: React.FC = () => {
  return (
    <section className="space-y-3 md:space-y-4">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs md:text-sm">
        Recent Activity
      </h3>
      <div className="space-y-2 md:space-y-3">
        {recentItems.map((item) => (
          <ActivityCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
      <button className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-ink text-bone font-label-caps text-label-caps rounded hover:opacity-90 transition-opacity uppercase tracking-widest text-xs md:text-sm">
        Download All
      </button>
    </section>
  );
};

export default RecentActivity;