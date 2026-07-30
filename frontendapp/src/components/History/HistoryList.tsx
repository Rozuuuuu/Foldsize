import HistoryItem from './HistoryItem';
import { historyItems } from '../../data/historyData';

const HistoryList: React.FC = () => {
  // Group items by date
  const todayItems = historyItems.filter(item => item.group === 'Today');
  const yesterdayItems = historyItems.filter(item => item.group === 'Yesterday');
  const olderItems = historyItems.filter(item => item.group === 'Older');

  return (
    <div className="space-y-12">
      {/* Today Group */}
      {todayItems.length > 0 && (
        <section>
          <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-widest border-b border-paper-grey pb-2">
            Today
          </h2>
          <div className="flex flex-col">
            {todayItems.map((item) => (
              <HistoryItem key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}

      {/* Yesterday Group */}
      {yesterdayItems.length > 0 && (
        <section>
          <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-widest border-b border-paper-grey pb-2">
            Yesterday
          </h2>
          <div className="flex flex-col">
            {yesterdayItems.map((item) => (
              <HistoryItem key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}

      {/* Older Group */}
      {olderItems.length > 0 && (
        <section>
          <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-widest border-b border-paper-grey pb-2">
            Older
          </h2>
          <div className="flex flex-col">
            {olderItems.map((item) => (
              <HistoryItem key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HistoryList;