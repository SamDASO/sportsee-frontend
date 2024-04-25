import style from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Aside from "../Navigation/verticalNavigation";

const Layout = () => {
  return (
    <div className={style.component}>
      <Header />
      <main className={style.main}>
        <Aside />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
