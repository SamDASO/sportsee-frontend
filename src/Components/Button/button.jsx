import style from "./button.module.scss";
import PropTypes from "prop-types";

const Button = ({ content, contentAlt }) => {
  return (
    <button className={style.component}>
      <img alt={contentAlt} src={content} className={style.img} />
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  contentAlt: PropTypes.string.isRequired,
};

export default Button;
