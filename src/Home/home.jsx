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

//userKeyData
export const ContextKey = React.createContext();

//graphs
export const ContextActivity = React.createContext();

function Home() {
  //state
  const { userId } = useParams();
  const [userName, setUserName] = useState(null);
  const [userKeyData, setUserKeyData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);

  //behavior
  useEffect(() => {
    const dataController = new DataController(userId);

    //FetchName//
    const fetchName = async () => {
      try {
        const name = await dataController.getUserName();
        setUserName(name);
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    fetchName();

    //Fetch keyData//
    const fetchKeyData = async () => {
      try {
        const keyData = await dataController.getKeyData();
        setUserKeyData(keyData);
      } catch (error) {
        console.error("Error fetching keyDatas:", error);
      }
    };

    fetchKeyData();

    //Fetch Activity//
    const fetchActivity = async () => {
      try {
        const activityData = await dataController.getUserActivity();
        setUserActivity(activityData);
      } catch (error) {
        console.error("Error fetching activity data:", error);
      }
    };

    fetchActivity();
  }, [userId]);

  return (
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
          <ContextActivity.Provider value={userActivity}>
            <Activity />
          </ContextActivity.Provider>
          <div className={style.graphs}>
            <AverageSession />
            <Stats />
            <Goal />
          </div>
        </div>
        <ContextKey.Provider value={userKeyData}>
          <aside className={style.summary}>
            {userKeyData && (
              <SummaryElement
                className={style.calories}
                alt={"calories"}
                img={caloriesLogo}
                color={"#FF00001A"}
                dataName={"Calories"}
                data={"calorieCount"}
                unit={"kCal"}
              />
            )}

            {userKeyData && (
              <SummaryElement
                className={style.protein}
                alt={"proteines"}
                img={proteinLogo}
                color={"#4AB8FF1A"}
                dataName={"Proteines"}
                data={"proteinCount"}
                unit={"g"}
              />
            )}
            {userKeyData && (
              <SummaryElement
                className={style.carbohydrate}
                alt={"glucides"}
                img={carbohydrateLogo}
                color={"#FDCC0C1A"}
                dataName={"Glucides"}
                data={"carbohydrateCount"}
                unit={"g"}
              />
            )}
            {userKeyData && (
              <SummaryElement
                className={style.fat}
                alt={"Lipides"}
                img={fatLogo}
                color={"#FD51811A"}
                dataName={"Lipides"}
                data={"lipidCount"}
                unit={"g"}
              />
            )}
          </aside>
        </ContextKey.Provider>
      </section>
    </div>
  );
}

export default Home;
