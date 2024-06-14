import BankCard from "../Cards/Bank/BankCard";
import utkarsh from "../../assets/utkarsh.png";
import bajaj from "../../assets/bajaj.jpg";
import shriram from "../../assets/shriram.jpg";
import mahindra from "../../assets/mahindra.png";
import BankProcessCard from "../Cards/BankProcess/BankProcessCard";
import styles from "./BankSection.module.css";

/**
 * BankSection Component
 *
 * Renders a section with bank information cards and bank process cards.
 * - Uses BankCard to display bank details like logo, name, and interest rates.
 * - Uses BankProcessCard to show ongoing processes like video KYC and pending payments.
 * - Arranges cards in a flex layout for a structured presentation.
 *
 * Returns:
 * JSX.Element - The rendered bank section.
 */

const BankSection = () => {
  return (
    <div className={styles.marginTop}>
      <div className={styles.commonFlex}>
        <BankCard
          bankLogo={utkarsh}
          bankName={"Utkarsh Small Finance Bank"}
          chip1={"Higest Interest Rate"}
          chip2={"RBI Insured"}
          roi={"9.10%"}
          bankShortName={"utkarsh"}
        />
        <BankCard
          bankLogo={bajaj}
          bankName={"Bajaj Finserv"}
          chip1={"Crisi AAA Rated"}
          chip2={"No Video KYC required"}
          roi={"8.80%"}
          bankShortName={"bajaj"}
        />
        <BankProcessCard
          requestType={"Video KYC"}
          type={"Scheduled On"}
          requestedBy={"Utkarsh SF Bank FD Plan 2"}
          depoAMt={"Rs. 20,000"}
          tenner={"2 Years"}
          roi={"9.10%"}
          btn1={"Complete now"}
          btn2={"reschedule"}
        />
      </div>
      <div className={styles.commonFlex}>
        <BankCard
          bankLogo={shriram}
          bankName={"Shriram Finance"}
          chip1={"Crisi AAA Rated"}
          chip2={"No Video KYC required"}
          roi={"8.80%"}
          bankShortName={"shriram"}
        />
        <BankCard
          bankLogo={mahindra}
          bankName={"Mahindra Finance"}
          chip1={"Crisi AAA Rated"}
          chip2={"No Video KYC required"}
          roi={"8.80%"}
          bankShortName={"mahindra"}
        />
        <BankProcessCard
          requestType={"Pending Payment"}
          type={"Pay By"}
          requestedBy={"Bajaj Finserv Corp FD 1"}
          depoAMt={"Rs. 25,000"}
          tenner={"18 Months"}
          roi={"8.10%"}
          btn1={"Pay Now"}
          btn2={"Cancel Application"}
        />
      </div>

      <div className={styles.commonFlex2}>
        <BankCard />
        <BankProcessCard
          requestType={"Upcoming FD Maturity"}
          type={"Renew By"}
          requestedBy={"Shriram Finance Corp FD 1"}
          depoAMt={"Rs. 25,000"}
          tenner={"18 Months"}
          roi={"8.10%"}
          btn1={"Renew Now"}
          btn2={"Compare other FDs"}
        />
      </div>
    </div>
  );
};

export default BankSection;
