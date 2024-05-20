import style from "./averageSessions.module.scss";
import PropTypes from "prop-types";

const SessionTooltip = ({ active, payload }) => {
  if (active && payload) {
    const sessionLength = payload[0].payload.sessionLength;
    return (
      <div className={style.customTooltip}>
        <p className={style.tooltipItem}>{sessionLength}mins</p>
      </div>
    );
  }
};
SessionTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default SessionTooltip;
