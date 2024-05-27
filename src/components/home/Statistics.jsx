// components/Statistics.js
import styles from './Statistics.module.scss';

const Statistics = ({ stats }) => {
  return (
    <div className={styles.statisticsContainer}>
      <h2 className={styles.heading}>Check Out Our Stats</h2>
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <h3>{stats.totalUsers}</h3>
          <p>Total Users</p>
        </div>
        <div className={styles.statItem}>
          <h3>{stats.totalTrades}</h3>
          <p>Total Trades</p>
        </div>
        <div className={styles.statItem}>
          <h3>{stats.totalSkins}</h3>
          <p>Skins Listed</p>
        </div>
        <div className={styles.statItem}>
          <h3>{stats.successfulTrades}</h3>
          <p>Successful Trades</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
