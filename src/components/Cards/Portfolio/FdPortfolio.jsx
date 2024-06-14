import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import './styles.css'
import Dropdown from "../../Navbar/DropDown/Dropdown";
import styles from './FdPortfolio.module.css'

const data = [
  {
    value: 25,
    label: "Bajaj Finserv",
    color: "#6c63ff",
    legendLabel: "25,000",
  },
  {
    value: 20,
    label: "Shriram Finance",
    color: "#fa9d17",
    legendLabel: "20,000",
  },
  {
    value: 15,
    label: "Mahindra Finance",
    color: "#b9c606",
    legendLabel: "15,000",
  },
  {
    value: 40,
    label: "Utkarsh Small Finance Bank",
    color: "#59cbd3",
    legendLabel: "40,000",
  },
];

const size = {
  width: 370,
  height: 200,
};

/**
 * CustomLegend component renders the legend with custom styles.
 *
 * @component
 * @example
 * return (
 *   <CustomLegend data={data} />
 * )
 */
const CustomLegend = ({ data }) => {
  return (
    <div className={styles.customLegendWrapper}>
      {data.map((item, index) => (
        <div className={styles.customLegendParent} key={index}>
          <div className={styles.customLegendColor} style={{
            backgroundColor: item.color,
          }}></div>
          <span className={styles.customLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};


/**
 * PieChartCard component renders a pie chart with custom data and styles.
 *
 * @component
 * @example
 * return (
 *   <PieChartCard />
 * )
 */
export default function PieChartCard() {
  return (
    <div className={styles.pieChartWrapper}>
        <div className={styles.pieHead}>
        <h4>Your FD Portfolio</h4>
        <Dropdown text="Deposit Amt" />
        </div>
    <div className={styles.pieParent}>
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.legendLabel} (${item.value}%)`, 
          arcLabelMinAngle: 45,
          data: data.map(({ value, label, color, legendLabel }) => ({
            value,
            label,
            color,
            legendLabel,
          })),
          arcProps: (item) => ({
            fill: item.color,
          }),
          innerRadius: 0, 
          outerRadius: 135, 
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "600",
          fontSize: "11px",
        },
        '& .MuiLegend-root': {
          display: 'none',
        },
      }}
      {...size}
    />
    <CustomLegend data={data} />
</div>
</div>
  );
}
