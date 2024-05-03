import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./home.module.scss";
import { DataController } from "../fetchData/DataController";

export const Context = React.createContext();

function Home() {
  //state

  //const userName = useContext(Context);
  const [userName, setUserName] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataController = new DataController(userId);
        const name = await dataController.getUserName();
        setUserName(name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <Context.Provider value={userName}>
      <div className={style.dashboard}>
        <div className={style.infoUser}>
          {userName ? (
            <h1 className={style.title}>
              Bonjour <span className={style.name}>{userName}</span>
            </h1>
          ) : (
            <p>Chargement...</p>
          )}
          <p className={style.summary}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
      </div>
    </Context.Provider>
  );
}

export default Home;
