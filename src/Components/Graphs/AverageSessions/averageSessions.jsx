import style from "./averageSessions.module.scss";
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import SessionTooltip from "./tooltip.jsx";

const AverageSession = ({ data }) => {
  //state

  const dayNames = ["", "L", "M", "M", "J", "V", "S", "D"];
  const getDayName = (day) => {
    return dayNames[day];
  };

  //behavior

  if (!data || data.length === 0) {
    return (
      <div className={style.component}>
        <p>Chargement...</p>
      </div>
    );
  }

  //render

  return (
    <div className={style.component}>
      <p className={style.title}>Durée moyenne des sessions</p>
      <ResponsiveContainer
        width="100%"
        height={200}
        className={style.lineContainer}
      >
        <LineChart
          width={280}
          height={260}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
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
      </ResponsiveContainer>
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
};

export default AverageSession;
