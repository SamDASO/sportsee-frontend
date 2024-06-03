import style from "./refreshBtn.module.scss";
import PropTypes from "prop-types";

const RefreshBtn = ({ onClick}) => {
  return (
    <button className={style.component} onClick={onClick}>
      Recharger
    </button>
  );
};

RefreshBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default RefreshBtn;
