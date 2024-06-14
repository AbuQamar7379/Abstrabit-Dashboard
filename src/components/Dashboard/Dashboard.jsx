import PieChartCard from '../Cards/Portfolio/FdPortfolio';
import styles from './Dashboard.module.css';

/**
 * Dashboard component represents the main dashboard view for the user.
 * It includes a welcome message and a section to display a pie chart.
 *
 * @component
 * @returns {JSX.Element} The rendered dashboard component.
 */
const Dashboard = () => {
    return (
        <div className={styles.dashboardWrapper}>
            <h2 className={styles.welcome}>Welcome, Johan Paul</h2>

            <div className={styles.fdWrapper}>
                <div className={styles.fdPieParent}>
                    <PieChartCard />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;