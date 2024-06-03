import style from "./stats.module.scss";
import RefreshBtn from "../../Refresh/refreshBtn";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const Stats = ({ statsData, isLoading, error, refresh }) => {
  const transformData = () => {
    if (!statsData) return [];

    const statsSubject = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    return statsData.map((item) => ({
      ...item,
      kind: statsSubject[item.kind],
    }));
  };

  const transformedData = transformData();

  return (
    <div className={style.component}>
      {isLoading ? (
              <p className={style.loading}>Chargement...</p>
            ) : error ? (
              <div className={style.errorDiv}>
              <p className={style.error}>Erreur chargement des données de statistiques</p>
              <RefreshBtn onclick={refresh}/></div>
            ) : (
      <ResponsiveContainer width={330} height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={transformedData}>
          <PolarGrid stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fontSize: 12,
              fill: "#FFFFFF",
            }}
            tickSize={15}
          />
          <PolarRadiusAxis tick={false} axisLine={false} tickLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>)}
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
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  refresh: PropTypes.func,
};

export default Stats;
