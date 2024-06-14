import React from "react";
import styles from "./FdTimeline.module.css";
import timeline from "./Timeline.png";

/**
 * FdMaturityTimelineChart component displays the FD Maturity Timeline Chart.
 *
 * @component
 * @example
 * return (
 *   <FdMaturityTimelineChart />
 * )
 */
const FdMaturityTimelineChart = () => {
  return (
    <div className={styles.timelineChartWrapper}>
      <h4>FD Maturity Timeline</h4>
      <div className={styles.timelineParent}>
        <img src={timeline} alt="Timeline" />
      </div>
    </div>
  );
};

export default FdMaturityTimelineChart;
