import { useState, useEffect } from "react";
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
  const { userId } = useParams();
  const [userName, setUserName] = useState(null);
  const [userKeyData, setUserKeyData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [statsSubjects, setStatsSubjects] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [goalScore, setGoalScore] = useState(null);

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

    //Fetch Average sessions data//

    const fetchAverageSessions = async () => {
      try {
        const averageSessionsData =
          await dataController.getUserAverageSessions();
        setAverageSessions(averageSessionsData);
      } catch (error) {
        console.error("Error fetching average sessions data:", error);
      }
    };

    fetchAverageSessions();

    //Fetch stats data

    const fetchStatsSubjects = async () => {
      try {
        const userStats = await dataController.getUserStats();
        const statsSubjects = userStats.kind;
        const statsData = userStats.data;
        setStatsSubjects(statsSubjects);
        setStatsData(statsData);
      } catch (error) {
        console.error("Error fetching stats subjects:", error);
      }
    };
    fetchStatsSubjects();

    //fetch goalScore//
    const fetchGoalScore = async () => {
      try {
        const userGoalScore = await dataController.getGoalScore();
        setGoalScore(userGoalScore);
      } catch (error) {
        console.error("Error fetching stats subjects:", error);
      }
    };

    fetchGoalScore();
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
          {userActivity && <Activity activityData={userActivity} />}
          <div className={style.graphs}>
            {averageSessions && <AverageSession data={averageSessions} />}
            {statsData && statsSubjects && (
              <Stats statsData={statsData} statsSubject={statsSubjects} />
            )}
            {goalScore && <Goal goalScore={goalScore} />}
          </div>
        </div>
        <aside className={style.summary}>
          {userKeyData && (
            <SummaryElement
              className={style.calories}
              alt={"calories"}
              img={caloriesLogo}
              color={"#FF00001A"}
              dataName={"Calories"}
              dataValue={userKeyData.calorieCount}
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
              dataValue={userKeyData.proteinCount}
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
              dataValue={userKeyData.carbohydrateCount}
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
              dataValue={userKeyData.lipidCount}
              unit={"g"}
            />
          )}
        </aside>
      </section>
    </div>
  );
}

export default Home;
