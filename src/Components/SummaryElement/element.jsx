import PropTypes from "prop-types";
import style from "./element.module.scss";
import RefreshBtn from "../Refresh/refreshBtn";

const SummaryElement = ({ isLoading, error, refresh, alt, img, color, dataName, dataValue, unit }) => {
  //render
  return (
    <div className={style.component}>
      
      <div className={style.logoContainer} style={{ backgroundColor: color }}>
        <img className={style.logo} alt={alt} src={img} />
      </div>
      {isLoading ? (
              <p className={style.loading}>Chargement...</p>
            ) : error ? (
              <div className={style.errorDiv}>
              <p className={style.error}>Erreur</p>
              <RefreshBtn onClick={refresh}/></div>
            ) : (
      <div className={style.text}>

        <p className={style.data}>
          {dataValue}
          {unit}
        </p>
        <p className={style.dataName}>{dataName}</p>
        
      </div>)}
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
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  refresh: PropTypes.func.isRequired,
};

export default SummaryElement;
