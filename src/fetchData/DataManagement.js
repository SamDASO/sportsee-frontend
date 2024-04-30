import { Mock } from "../fetchData/mock.js";
import { Api } from "../fetchData/api.js";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mock/mockData.js";

export class DataManagement {
  constructor() {
    this.isMockMode = import.meta.env.VITE_ISMODE_MOCK === "true";
  }

  getDatas() {
    let data;

    if (this.isMockMode) {
      data = new Mock({
        USER_MAIN_DATA,
        USER_ACTIVITY,
        USER_AVERAGE_SESSIONS,
        USER_PERFORMANCE,
      });
    } else {
      data = new Api();
    }
    return data;
  }
}
