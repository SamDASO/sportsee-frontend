import style from "./activity.module.scss";
import PropTypes from "prop-types";

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

export default CustomTooltip;
