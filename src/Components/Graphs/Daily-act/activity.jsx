import { useContext, useState, useEffect } from "react";
import {
  BarChart,
  Bar,
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
  const [containerWidth, setContainerWidth] = useState(0);

  //behavior
  useEffect(() => {
    const updateWidth = () => {
      const width = document.getElementById("container").offsetWidth; // Assuming the container has an id of 'container'
      setContainerWidth(width);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  //render
  return (
    <div id="container" className={style.component}>
      <BarChart
        width={containerWidth}
        height={320}
        data={activityData}
        margin={{
          top: 5,
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
        />
        <Tooltip />
        <Legend />
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
    </div>
  );
};

export default Activity;
