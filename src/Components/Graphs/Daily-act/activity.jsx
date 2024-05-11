import { useContext } from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import style from "./activity.module.scss";
import { ContextActivity } from "../../../Home/home";

////customToolTip component////

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className={style.customTooltip}>
        <ul className={style.tooltipItemList}>
          {payload.map((item, index) => (
            <li key={index} className={style.tooltipItem}>
              {item.value}
              {item.dataKey === "kilogram" ? "kg" : "Kcal"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

//// ////

const Activity = () => {
  //state
  const activityData = useContext(ContextActivity);
  const formatXAxisTick = (value, index) => {
    return index + 1;
  };

  //render
  return (
    <div id="container" className={style.component}>
      <div className={style.header}>
        <p className={style.title}>Activité quotidienne</p>
        <ul className={style.legend}>
          <li className={style.legendPoids}>
            <span className={style.legendText}>Poids (kg)</span>
          </li>
          <li className={style.legendCal}>
            <span className={style.legendText}>Calories brûlées (kCal)</span>
          </li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          width={700}
          height={320}
          data={activityData}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis dataKey="day" tickFormatter={formatXAxisTick} />
          <YAxis
            orientation="right"
            stroke="#9B9EAC"
            axisLine={false}
            tickLine={false}
            dataKey="calories"
            tickFormatter="kilogram"
          />
          <Tooltip content={<CustomTooltip />} />
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
    </div>
  );
};

export default Activity;
