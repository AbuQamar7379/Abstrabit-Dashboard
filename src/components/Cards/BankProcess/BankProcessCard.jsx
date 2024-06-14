import styles from "./BankProcessCard.module.css";
import calendar from "../../../assets/calendar.jpg";
import Button from "@mui/material/Button";

/**
 * BankProcessCard Component
 *
 * Renders a card displaying details of a bank-related process such as video KYC or pending payment.
 * - Shows request type, details, and options to complete or cancel the process.
 * - Displays deposit amount, tenure, and interest rate.
 * - Includes two action buttons for user interaction.
 *
 * Props:
 * - requestType: Type of the request (e.g., "Video KYC", "Pending Payment")
 * - type: Description of the process stage (e.g., "Scheduled On", "Pay By")
 * - requestedBy: Name of the requesting entity
 * - depoAMt: Deposit amount
 * - tenner: Tenure of the deposit
 * - roi: Rate of interest
 * - btn1: Text for the primary action button
 * - btn2: Text for the secondary action button
 *
 * Returns:
 * JSX.Element - The rendered process card.
 */

const BankProcessCard = ({
  requestType,
  type,
  requestedBy,
  depoAMt,
  tenner,
  roi,
  btn1,
  btn2,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <h4>{requestType}</h4>
      <div className={`${styles.marginTop} ${styles.cardParent}`}>
        <span className={styles.opacity}>{type}</span>
        <span className={styles.requestedBy}>{requestedBy}</span>
      </div>
      <div className={styles.schedule}>
        <img src={calendar} alt="Date" width={"80px"} height={"80px"} />
        <div>
          <p className={`${styles.opacity}`}>Deposit Amt</p>
          <p className={styles.boldSize}>{depoAMt}</p>
        </div>
        <div>
          <p className={`${styles.opacity}`}>Tennure</p>
          <p className={styles.boldSize}>{tenner}</p>
        </div>
        <div>
          <p className={`${styles.opacity}`}>Interest Rate</p>
          <p className={styles.boldSize}>{roi}</p>
        </div>
      </div>
      <div className={`${styles.marginTop} ${styles.btnSection}`}>
        <Button variant="contained">{btn1}</Button>
        <Button variant="outlined">{btn2}</Button>
      </div>
    </div>
  );
};

export default BankProcessCard;
