import style from "./verticalNavigation.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import Cycling from "../../assets/Buttons/cycling.svg";
import Meditation from "../../assets/Buttons/meditation.svg";
import Swimming from "../../assets/Buttons/swimming.svg";
import Workout from "../../assets/Buttons/workout.svg";

//Alt for images
const meditationAlt = "meditation";
const swimmingAlt = "swimming";
const cyclingAlt = "cycling";
const workoutAlt = "workout";

const Aside = () => {
  return (
    <aside className={style.component}>
      <nav className={style.btnContainer}>
        <Link to="/" className={style.link}>
          <Button content={Meditation} contentAlt={meditationAlt} />
        </Link>
        <Link to="/" className={style.link}>
          <Button content={Swimming} contentAlt={swimmingAlt} />
        </Link>
        <Link to="/" className={style.link}>
          <Button content={Cycling} contentAlt={cyclingAlt} />
        </Link>
        <Link to="/" className={style.link}>
          <Button content={Workout} contentAlt={workoutAlt} />
        </Link>
      </nav>
      <p className={style.copyright}>Copiryght, SportSee 2020</p>
    </aside>
  );
};

export default Aside;
