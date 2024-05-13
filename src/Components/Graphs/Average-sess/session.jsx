import style from "./session.module.scss";
import { useState } from "react";
import { LineChart, Line, ReferenceDot, Tooltip, XAxis } from "recharts";
import PropTypes from "prop-types";
import SessionTooltip from "./tooltip.jsx";

const AverageSession = ({ data }) => {
  //state

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const dayNames = ["", "L", "M", "M", "J", "V", "S", "D"];
  const getDayName = (day) => {
    return dayNames[day];
  };

  //behavior

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
      <LineChart
        width={258}
        height={263}
        data={data}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <text
          x={258 / 2}
          y={10}
          textAnchor="middle"
          dominantBaseline="hanging"
          fill="#fff"
          className={style.title}
        >
          Durée moyenne des sessions
        </text>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          strokeWidth={2}
          dot={false}
        />
        {hoveredIndex !== null && data[hoveredIndex] && (
          <ReferenceDot
            x={data[hoveredIndex].sessionLength}
            y={data[hoveredIndex].sessionLength}
            stroke="#fff"
            fill="#fff"
            dot={<circle style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }} />}
            r={5}
          />
        )}
        <XAxis
          dataKey="day"
          tickFormatter={getDayName}
          axisLine={false}
          tickLine={false}
          className={style.xAxis}
        />
        <Tooltip content={<SessionTooltip />} cursor={false} />
      </LineChart>
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
};

export default AverageSession;
