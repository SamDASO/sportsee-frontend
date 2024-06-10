import { useParams } from "react-router-dom";
import { useCallback, useMemo } from "react";
import style from "./home.module.scss";
import RefreshBtn from "../Components/Refresh/refreshBtn";
import { DataController } from "../fetchData/DataController";
import Activity from "../Components/Graphs/Activity/activity";
import AverageSession from "../Components/Graphs/AverageSessions/averageSessions";
import Stats from "../Components/Graphs/Stats/stats";
import Goal from "../Components/Graphs/Goal/goal";
import SummaryElement from "../Components/SummaryElement/element";
import useDisplay from "../Components/CustomHook/useDisplay";
import UserInterface from "../models/userModel";


//img

import caloriesLogo from "../assets/images/calories.svg";
import proteinLogo from "../assets/images/protein.svg";
import carbohydrateLogo from "../assets/images/carbohydrate.svg";
import fatLogo from "../assets/images/fat.svg";

function Home() {
  //state
  const { userId } = useParams();
  
  const dataController = useMemo(() => new DataController(userId), [userId]);
  
  const fetchUserName = useCallback(
    () => dataController.getUserName(),
    [dataController]
  );
  const fetchUserKey = useCallback(
    () => dataController.getKeyData(),
    [dataController]
  );
  const fetchActivity = useCallback(
    () => dataController.getUserActivity(),
    [dataController]
  );
  const fetchSessions = useCallback(
    () => dataController.getUserAverageSessions(),
    [dataController]
  );
  const fetchUserStats = useCallback(
    () => dataController.getUserStats(),
    [dataController]
  );
  const fetchUserGoal = useCallback(
    () => dataController.getGoalScore(),
    [dataController]
  );

  const {
    data: userName,
    isLoading: nameLoading,
    error: nameError,
    refresh : refreshName,
  } = useDisplay(fetchUserName);
  const {
    data: userKeyData,
    isLoading: keyDataLoading,
    error: keyDataError,
    refresh : refreshKeyData,
  } = useDisplay(fetchUserKey);

  const {
    data: userActivity,
    isLoading: activityLoading,
    error: activityError,
    refresh : refreshActivity,
  } = useDisplay(fetchActivity);

  const {
    data: averageSessions,
    isLoading: sessionsLoading,
    error: sessionsError,
    refresh : refreshSessions,
  } = useDisplay(fetchSessions);

  const {
    data: statsData,
    isLoading: statsLoading,
    error: statsError,
    refresh : refreshStats,
  } = useDisplay(fetchUserStats);

  const {
    data: goalScore,
    isLoading: goalLoading,
    error: goalError,
    refresh : refreshGoal,
  } = useDisplay(fetchUserGoal);

  //render

  return (
    <div className={style.component}>
      <div className={style.infoUser}>
        <h1 className={style.title}>
          Bonjour
          {nameLoading ? (
            <span className={style.name}>Chargement...</span>
          ) : nameError ? (
            <div className={style.errorDiv}>
            <span className={style.nameError}>Erreur chargement du nom...</span>
            <RefreshBtn onClick={refreshName}/></div>
          ) : (
            userName && <span className={style.name}> {userName?.firstName}</span>
          )}
        </h1>

        <p className={style.result}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <section className={style.dashboard}>
        <div className={style.graphContainer}>
          <Activity activityData={userActivity?.activity} isLoading={activityLoading} error={activityError} refresh={refreshActivity}/>
          

          <div className={style.graphs}>
            <AverageSession data={averageSessions?.averageSession} isLoading={sessionsLoading} error={sessionsError} refresh={refreshSessions}/>
            

            <Stats statsData={statsData?.performance} isLoading={statsLoading} error={statsError} refresh={refreshStats}/>
            

            <Goal goalScore={goalScore?.todayScore} isLoading={goalLoading} error={goalError} refresh={refreshGoal}/>
            
          </div>
        </div>
        <aside className={style.summary}>
          <SummaryElement
                className={style.calories}
                isLoading={keyDataLoading} error={keyDataError} refresh={refreshKeyData}
                alt={"calories"}
                img={caloriesLogo}
                color={"#FF00001A"}
                dataName={"Calories"}
                dataValue={userKeyData?.calorieCount}
                unit={"kCal"}
              />
            
          
          
              <SummaryElement
                className={style.protein}
                isLoading={keyDataLoading} error={keyDataError} refresh={refreshKeyData}
                alt={"proteines"}
                img={proteinLogo}
                color={"#4AB8FF1A"}
                dataName={"Proteines"}
                dataValue={userKeyData?.proteinCount}
                unit={"g"}
              />
            
              <SummaryElement
                className={style.carbohydrate}
                isLoading={keyDataLoading} error={keyDataError} refresh={refreshKeyData}
                alt={"glucides"}
                img={carbohydrateLogo}
                color={"#FDCC0C1A"}
                dataName={"Glucides"}
                dataValue={userKeyData?.carbohydrateCount}
                unit={"g"}
              />
            
          

          <SummaryElement
                className={style.fat}
                isLoading={keyDataLoading} error={keyDataError} refresh={refreshKeyData}
                alt={"Lipides"}
                img={fatLogo}
                color={"#FD51811A"}
                dataName={"Lipides"}
                dataValue={userKeyData?.lipidCount}
                unit={"g"}
              />
            
          
        </aside>
      </section>
    </div>
  );
}

export default Home;
