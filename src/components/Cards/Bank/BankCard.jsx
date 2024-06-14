import { Chip } from "@mui/material";
import styles from "./BankCard.module.css";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

/**
 * BankCard Component
 *
 * Renders a card displaying bank details or a default informational section if no props are provided.
 * - Displays bank logo, name, interest rates, and features using Chip components.
 * - Shows a "Book Now" button styled according to the bank's theme.
 * - If no props are given, it shows an informational section with articles.
 *
 * Props:
 * - bankLogo: Image source for the bank logo
 * - bankName: Name of the bank
 * - chip1: First feature chip label
 * - chip2: Second feature chip label
 * - roi: Rate of interest
 * - bankShortName: Short identifier for the bank to apply specific styles
 *
 * Returns:
 * JSX.Element - The rendered bank card or informational section.
 */

const BankCard = ({ bankLogo, bankName, chip1, chip2, roi, bankShortName }) => {
  return (
    <>
      {!bankLogo && !bankName && !chip1 && !chip2 && !roi && !bankShortName ? (
        <div style={{ width: "61.5%" }}>
          <div className={styles.displayFlex}>
            <div>
              <h2>Get Answer</h2>
              <p>to all your questions</p>
            </div>
            <div>
              <ChevronLeft style={{ fontSize: "80px", opacity: "0.5" }} />
              <ChevronRight style={{ fontSize: "80px" }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: "25px", marginTop: "30px" }}>
            <div className={styles.footerCard}>
              <h3>How FDs are taxed</h3>
              <p className={styles.commonP}>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p style={{ marginTop: "10px" }}>
                <a href="#">Read more...</a>
              </p>
            </div>
            <div className={styles.footerCard}>
              <h3>How FDs are taxed</h3>
              <p className={styles.commonP}>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p style={{ marginTop: "10px" }}>
                <a href="#">Read more...</a>
              </p>
            </div>
            <div className={styles.footerCard}>
              <h3>How FDs are taxed</h3>
              <p className={styles.commonP}>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p style={{ marginTop: "10px" }}>
                <a href="#">Read more...</a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          <div className={styles.cardHead}>
            <img src={bankLogo} alt={bankName} width={"50px"} height={"50px"} />
            <p>{bankName}</p>
          </div>
          <div className={styles.chipParent}>
            <Chip
              icon={
                <CheckIcon
                  className={`${styles.checked} ${
                    (bankShortName === "utkarsh" && styles.utkarshFinance) ||
                    (bankShortName === "bajaj" && styles.bajajFinance) ||
                    (bankShortName === "shriram" && styles.shriramFinance) ||
                    (bankShortName === "mahindra" && styles.mahindraFinance)
                  }`}
                />
              }
              label={chip1}
              className={`${styles.chip} ${
                (bankShortName === "utkarsh" && styles.utkarshChip) ||
                (bankShortName === "bajaj" && styles.bajajChip) ||
                (bankShortName === "shriram" && styles.shriramChip) ||
                (bankShortName === "mahindra" && styles.mahindraChip)
              }`}
            />
            <Chip
              icon={
                <CheckIcon
                  className={`${styles.checked} ${
                    (bankShortName === "utkarsh" && styles.utkarshFinance) ||
                    (bankShortName === "bajaj" && styles.bajajFinance) ||
                    (bankShortName === "shriram" && styles.shriramFinance) ||
                    (bankShortName === "mahindra" && styles.mahindraFinance)
                  }`}
                />
              }
              label={chip2}
              className={`${styles.chip} ${
                (bankShortName === "utkarsh" && styles.utkarshChip) ||
                (bankShortName === "bajaj" && styles.bajajChip) ||
                (bankShortName === "shriram" && styles.shriramChip) ||
                (bankShortName === "mahindra" && styles.mahindraChip)
              }`}
            />
          </div>

          <div className={styles.cardFooter}>
            <div>
              <p style={{ opacity: "0.8", paddingBottom: "4px" }}>
                Interest Upto
              </p>
              <p style={{ fontWeight: "600" }}>{roi} p.a</p>
            </div>
            <Button
              variant="contained"
              className={`${styles.button} ${
                (bankShortName === "utkarsh" && styles.utkarshFinance) ||
                (bankShortName === "bajaj" && styles.bajajFinance) ||
                (bankShortName === "shriram" && styles.shriramFinance) ||
                (bankShortName === "mahindra" && styles.mahindraFinance)
              }`}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
export default BankCard;
