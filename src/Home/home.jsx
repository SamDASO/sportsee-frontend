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
      <div className={style.component}>
        {userName ? <h1>Bonjour {userName}</h1> : <p>Loading...</p>}
      </div>
    </Context.Provider>
  );
}

export default Home;
