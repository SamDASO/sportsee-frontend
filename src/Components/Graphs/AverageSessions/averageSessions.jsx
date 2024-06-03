import style from "./averageSessions.module.scss";
import RefreshBtn from "../../Refresh/refreshBtn";
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import SessionTooltip from "./tooltip.jsx";

const AverageSession = ({ data, isLoading, error, refresh}) => {
  //state

  const dayNames = ["", "L", "M", "M", "J", "V", "S", "D"];
  const getDayName = (day) => {
    return dayNames[day];
  };


  //render

  return (
    <div className={style.component}>
      <p className={style.title}>Durée moyenne des sessions</p>
      {isLoading ? (
              <p className={style.loading}>Chargement...</p>
            ) : error ? (
              <div className={style.errorDiv}>
              <p className={style.error}>Erreur chargement des données de sessions</p>
              <RefreshBtn onClick={refresh}/></div>
            ) : (
      <ResponsiveContainer
        width="100%"
        height="100%"
        className={style.lineContainer}
      >
        <LineChart
          width={280}
          height={200}
          data={data}
          margin={{ top: 40, right: 10, left: 10, bottom: 60 }}
        >
          <Line
            type="monotone"
            dataKey="sessionLength"
            className={style.lineChart}
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.5)",
              strokeWidth: 10,
              r: 5,
            }}
            
          />

          <XAxis
            dataKey="day"
            tickFormatter={getDayName}
            axisLine={false}
            tickLine={false}
            className={style.xAxis}
          />
          <Tooltip content={<SessionTooltip />} cursor={false} />
        </LineChart>
      </ResponsiveContainer>)}
    </div>
  );
};

AverageSession.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
  cx: PropTypes.number,
  cy: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  refresh: PropTypes.func,
};

export default AverageSession;
