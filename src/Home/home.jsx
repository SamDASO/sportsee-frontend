import { useParams } from "react-router-dom";
import style from "./home.module.scss";
import { DataController } from "../fetchData/DataController";
import Activity from "../Components/Graphs/Activity/activity";
import AverageSession from "../Components/Graphs/AverageSessions/averageSessions";
import Stats from "../Components/Graphs/Stats/stats";
import Goal from "../Components/Graphs/Goal/goal";
import SummaryElement from "../Components/SummaryElement/element";
import useDisplay from "../Components/CustomHook/useDisplay";

//img

import caloriesLogo from "../assets/images/calories.svg";
import proteinLogo from "../assets/images/protein.svg";
import carbohydrateLogo from "../assets/images/carbohydrate.svg";
import fatLogo from "../assets/images/fat.svg";

function Home() {
  //state
  const { userId } = useParams();
  const dataController = new DataController(userId);

  const {
    fetchData: userName,
    isLoading: nameLoading,
    error: nameError,
  } = useDisplay(() => dataController.getUserName());
  const {
    fetchData: userKeyData,
    isLoading: keyDataLoading,
    error: keyDataError,
  } = useDisplay(() => dataController.getKeyData());

  const {
    fetchData: userActivity,
    isLoading: activityLoading,
    error: activityError,
  } = useDisplay(() => dataController.getUserActivity());

  const {
    fetchData: averageSessions,
    isLoading: sessionsLoading,
    error: sessionsError,
  } = useDisplay(() => dataController.getUserAverageSessions());

  const {
    fetchData: statsData,
    isLoading: statsLoading,
    error: statsError,
  } = useDisplay(() =>
    dataController.getUserStats().then((response) => response.data)
  );

  const {
    fetchData: goalScore,
    isLoading: goalLoading,
    error: goalError,
  } = useDisplay(() => dataController.getGoalScore());

  //render

  return (
    <div className={style.component}>
      <div className={style.infoUser}>
        <h1 className={style.title}>
          Bonjour
          {nameLoading ? (
            <span className={style.name}>Chargement...</span>
          ) : nameError ? (
            <span className={style.nameError}>Erreur chargement du nom...</span>
          ) : (
            userName && <span className={style.name}>{userName}</span>
          )}
        </h1>

        <p className={style.result}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <section className={style.dashboard}>
        <div className={style.graphContainer}>
          {activityLoading ? (
            <p className={style.loading}>Chargement...</p>
          ) : activityError ? (
            <p className={style.error}>Erreur chargement des données</p>
          ) : (
            userActivity && <Activity activityData={userActivity} />
          )}

          <div className={style.graphs}>
            {sessionsLoading ? (
              <p className={style.loading}>Chargement...</p>
            ) : sessionsError ? (
              <p className={style.error}>Erreur chargement des données</p>
            ) : (
              averageSessions && <AverageSession data={averageSessions} />
            )}

            {statsLoading ? (
              <p className={style.loading}>Chargement...</p>
            ) : statsError ? (
              <p className={style.error}>Erreur chargement des données</p>
            ) : (
              statsData && <Stats statsData={statsData} />
            )}

            {goalLoading ? (
              <p className={style.loading}>Chargement...</p>
            ) : goalError ? (
              <p className={style.error}>Erreur chargement des données</p>
            ) : (
              goalScore && <Goal goalScore={goalScore} />
            )}
          </div>
        </div>
        <aside className={style.summary}>
          {keyDataLoading ? (
            <p className={style.loading}>Chargement...</p>
          ) : keyDataError ? (
            <p className={style.error}>Erreur chargement des données</p>
          ) : (
            userKeyData && (
              <SummaryElement
                className={style.calories}
                alt={"calories"}
                img={caloriesLogo}
                color={"#FF00001A"}
                dataName={"Calories"}
                dataValue={userKeyData.calorieCount}
                unit={"kCal"}
              />
            )
          )}
          {keyDataLoading ? (
            <p className={style.loading}>Chargement...</p>
          ) : keyDataError ? (
            <p className={style.error}>Erreur chargement des données</p>
          ) : (
            userKeyData && (
              <SummaryElement
                className={style.protein}
                alt={"proteines"}
                img={proteinLogo}
                color={"#4AB8FF1A"}
                dataName={"Proteines"}
                dataValue={userKeyData.proteinCount}
                unit={"g"}
              />
            )
          )}
          {keyDataLoading ? (
            <p className={style.loading}>Chargement...</p>
          ) : keyDataError ? (
            <p className={style.error}>Erreur chargement des données</p>
          ) : (
            userKeyData && (
              <SummaryElement
                className={style.carbohydrate}
                alt={"glucides"}
                img={carbohydrateLogo}
                color={"#FDCC0C1A"}
                dataName={"Glucides"}
                dataValue={userKeyData.carbohydrateCount}
                unit={"g"}
              />
            )
          )}

          {keyDataLoading ? (
            <p className={style.loading}>Chargement...</p>
          ) : keyDataError ? (
            <p className={style.error}>Erreur chargement des données</p>
          ) : (
            userKeyData && (
              <SummaryElement
                className={style.fat}
                alt={"Lipides"}
                img={fatLogo}
                color={"#FD51811A"}
                dataName={"Lipides"}
                dataValue={userKeyData.lipidCount}
                unit={"g"}
              />
            )
          )}
        </aside>
      </section>
    </div>
  );
}

export default Home;
