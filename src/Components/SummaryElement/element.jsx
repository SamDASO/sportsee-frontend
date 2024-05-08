import PropTypes from "prop-types";
import style from "./element.module.scss";
import { useContext } from "react";
import { Context } from "../../Home/home";

const SummaryElement = ({ alt, img, color, dataName, data, unit }) => {
  const userKeyData = useContext(Context);
  const dataValue = userKeyData[data];

  return (
    <div className={style.component}>
      <div className={style.logoContainer} style={{ backgroundColor: color }}>
        <img className={style.logo} alt={alt} src={img} />
      </div>
      <div className={style.text}>
        <p className={style.data}>
          {dataValue}
          {unit}
        </p>
        <p className={style.dataName}>{dataName}</p>
      </div>
    </div>
  );
};

SummaryElement.propTypes = {
  alt: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default SummaryElement;
