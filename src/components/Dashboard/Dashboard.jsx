import PieChartCard from "../Cards/Portfolio/FdPortfolio";
import styles from "./Dashboard.module.css";
import FdMaturity from "../Cards/Maturity/FdTimeline";
import BankSection from "../Bank Cards Section/BankSection";

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
        <div className={styles.fdMaturityParent}>
          <FdMaturity />
        </div>
      </div>

      <BankSection />
    </div>
  );
};

export default Dashboard;
