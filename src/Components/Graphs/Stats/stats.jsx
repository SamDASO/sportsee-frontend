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
  
  return (
    <div className={style.component}>
      {isLoading ? (
              <p className={style.loading}>Chargement...</p>
            ) : error ? (
              <div className={style.errorDiv}>
              <p className={style.error}>Erreur chargement des données de statistiques</p>
              <RefreshBtn onclick={refresh}/></div>
            ) : (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={statsData}>
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
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  refresh: PropTypes.func,
};

export default Stats;
