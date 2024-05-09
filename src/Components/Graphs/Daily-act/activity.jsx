import { useContext } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import style from "./activity.module.scss";
import { ContextActivity } from "../../../Home/home";

const Activity = () => {
  //state
  const activityData = useContext(ContextActivity);

  //render
  return (
    <div className={style.component}>
      <BarChart
        width={500}
        height={300}
        data={activityData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 0" />
        <XAxis dataKey="day" />
        <YAxis orientation="right" stroke="#9B9EAC" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="kilogram"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </div>
  );
};

export default Activity;
