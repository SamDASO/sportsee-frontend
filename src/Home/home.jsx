import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./home.module.scss";
import { DataController } from "../fetchData/DataController";
import Activity from "../Components/Graphs/Daily-act/activity";
import AverageSession from "../Components/Graphs/Average-sess/session";
import Stats from "../Components/Graphs/Stats/stats";
import Goal from "../Components/Graphs/Goal/goal";
import SummaryElement from "../Components/SummaryElement/element";

//img

import caloriesLogo from "../assets/images/calories.svg";
import proteinLogo from "../assets/images/protein.svg";
import carbohydrateLogo from "../assets/images/carbohydrate.svg";
import fatLogo from "../assets/images/fat.svg";

function Home() {
  //state

  const [userName, setUserName] = useState(null);
  const [userKeyData, setUserKeyData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataController = new DataController(userId);
        const name = await dataController.getUserName();
        setUserName(name);

        const keyData = await dataController.getKeyData();
        setUserKeyData(keyData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <Context.Provider value={userKeyData}>
      <div className={style.component}>
        <div className={style.infoUser}>
          {userName ? (
            <h1 className={style.title}>
              Bonjour <span className={style.name}>{userName}</span>
            </h1>
          ) : (
            <p>Chargement...</p>
          )}
          <p className={style.result}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <section className={style.dashboard}>
          <div className={style.graphContainer}>
            <Activity />
            <div className={style.graphs}>
              <AverageSession />
              <Stats />
              <Goal />
            </div>
          </div>
          <aside className={style.summary}>
            <SummaryElement
              className={style.calories}
              alt={"calories"}
              img={caloriesLogo}
              color={"#FF00001A"}
              dataName={"Calories"}
              data={"calorieCount"}
              unit={"kCal"}
            />
            <SummaryElement
              className={style.protein}
              alt={"proteines"}
              img={proteinLogo}
              color={"#4AB8FF1A"}
              dataName={"Proteines"}
              data={"proteinCount"}
              unit={"g"}
            />
            <SummaryElement
              className={style.carbohydrate}
              alt={"glucides"}
              img={carbohydrateLogo}
              color={"#FDCC0C1A"}
              dataName={"Glucides"}
              data={"carbohydrateCount"}
              unit={"g"}
            />
            <SummaryElement
              className={style.fat}
              alt={"Lipides"}
              img={fatLogo}
              color={"#FD51811A"}
              dataName={"Lipides"}
              data={"lipidCount"}
              unit={"g"}
            />
          </aside>
        </section>
      </div>
    </Context.Provider>
  );
}

export default Home;
export const Context = React.createContext();
