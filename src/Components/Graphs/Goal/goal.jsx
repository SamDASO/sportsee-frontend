import style from "./goal.module.scss";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

import PropTypes from "prop-types";

const Goal = ({ goalScore }) => {
  const data = [
    { name: "notReached", value: 1 - goalScore, fill: "transparent" },
    {
      name: "Goal",
      value: goalScore,
      fill: "#FF0000",
    },
  ];

  return (
    <div className={style.component}>
      <p className={style.title}>Score</p>
      <ResponsiveContainer
        width="100%"
        height={217}
        className={style.container}
      >
        <PieChart width={217} height={217}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius={70}
            outerRadius={80}
            fill="#FF0000"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
        <p className={style.ScoreNumber}>
          {goalScore * 100}% <br />
          <span className={style.scoreText}>de votre objectif</span>
        </p>
      </ResponsiveContainer>
    </div>
  );
};

Goal.propTypes = {
  goalScore: PropTypes.number,
};

export default Goal;
