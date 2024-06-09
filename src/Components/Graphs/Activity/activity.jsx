import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import style from "./activity.module.scss";
import ActivityTooltip from "./tooltip";
import RefreshBtn from "../../Refresh/refreshBtn";

const Activity = ({ activityData, isLoading, error, refresh}) => {
  //state 
  
  const hideTickNumbers = () => null;

  //render
  return (
    <div id="container" className={style.component}>
      <div className={style.header}>
        <p className={style.title}>Activité quotidienne</p>

        <ul className={style.legend}>
          <li className={style.legendText}>
            <div className={style.markerPds}></div>Poids (kg)
          </li>
          <li className={style.legendText}>
            <div className={style.markerCal}></div>Calories brûlées (kCal)
          </li>
        </ul>
      </div>
      {isLoading ? (
              <p className={style.loading}>Chargement...</p>
            ) : error ? (
              <div className={style.errorDiv}>
              <p className={style.error}>Erreur chargement des données d'activité</p>
              <RefreshBtn onClick={refresh}/>
              </div>
            ) : (
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={activityData}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis dataKey="day" />
          <YAxis
            orientation="right"
            stroke="#9B9EAC"
            axisLine={false}
            tickLine={false}
            dataKey="calories"
            tick={hideTickNumbers}
          />
          <Tooltip content={<ActivityTooltip />} />
          <Bar
            dataKey="kilogram"
            barSize={7}
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            barSize={7}
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
            )}
    </div>
  );
};

Activity.propTypes = {
  activityData: PropTypes.any,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  refresh: PropTypes.func,
};

export default Activity;
