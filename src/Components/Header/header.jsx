import style from "./header.module.scss";
import SportSee from "../../assets/images/logoText.svg";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.component}>
      <div className={style.logoContainer}>
        <img alt="logo" src={Logo} className={style.logoImg} />
        <img alt="SportSee" src={SportSee} className={style.logoText} />
      </div>
      <nav className={style.navbar}>
        <Link to="/" className={style.link}>
          Accueil
        </Link>
        <Link to="/" className={style.link}>
          Profil
        </Link>
        <Link to="/" className={style.link}>
          Réglage
        </Link>
        <Link to="/" className={style.link}>
          Communauté
        </Link>
      </nav>
    </header>
  );
};

export default Header;
