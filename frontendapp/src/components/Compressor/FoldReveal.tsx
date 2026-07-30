import styles from './DropZone.module.css';

interface FoldRevealProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

const FoldReveal: React.FC<FoldRevealProps> = ({ front, back, className }) => {
  return (
    <div className={`${styles.foldContainer} ${className || ''}`}>
      <div className={styles.foldInner}>
        <div className={styles.foldFront}>{front}</div>
        <div className={styles.foldBack}>{back}</div>
      </div>
    </div>
  );
};

export default FoldReveal;