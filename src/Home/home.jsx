import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./home.module.scss";
import { DataManagement } from "../fetchData/DataManagement";

const Home = () => {
  //state

  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  //behavior
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataManagement = new DataManagement();
        const dataProvider = dataManagement.getDatas();
        console.log("Fetching data for userId:", userId);
        const user = await dataProvider.userData(userId);
        console.log("Received user data:", user);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className={style.component}>
      {userData ? (
        <h1>Bonjour {userData.userInfos.firstName}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
