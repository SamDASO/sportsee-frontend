import style from "./stats.module.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const Stats = ({ statsData, statsSubject }) => {
  const transformData = () => {
    return statsData.map((item) => ({
      ...item,
      kind: statsSubject[item.kind],
    }));
  };

  const transformedData = transformData();

  return (
    <div className={style.component}>
      <ResponsiveContainer width={320} height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={transformedData}>
          <PolarGrid stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fontSize: 12,
              fill: "#FFFFFF",
            }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} tickLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101B3"
            fill="#FF0101B3"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

Stats.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    })
  ).isRequired,
  statsSubject: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Stats;
