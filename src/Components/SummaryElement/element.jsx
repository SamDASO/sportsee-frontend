import PropTypes from "prop-types";
import style from "./element.module.scss";

const SummaryElement = ({ alt, img, color, dataName, dataValue, unit }) => {
  //render
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
  dataValue: PropTypes.any.isRequired,
  unit: PropTypes.string.isRequired,
};

export default SummaryElement;
