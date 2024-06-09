import { MockFetch } from "./mock.js";
import { ApiFetch } from "./api.js";
import UserActivity from "../models/activityModel.js";
import UserData from "../models/userModel.js";
import UserPerformance from "../models/performanceModel.js";
import UserAverageSessions from "../models/averageSessionsModel.js";

export class DataController {
  constructor(userId) {
    this.isMockMode = import.meta.env.MODE === "mock";
    this.userId = userId;
    if (this.isMockMode) {
      this.fetcher = new MockFetch();
    } else {
      this.fetcher = new ApiFetch();
    }
  }

  async getUserName() {
    try {
      const userData = await this.fetcher.userData(this.userId);
      const name = new UserData(this.userId, userData);
      return name;
    } catch (error) {
      console.error("Error fetching dataUserName:", error);
      throw error;
    }
  }

  async getKeyData() {
    try {
      const userData = await this.fetcher.userData(this.userId);
      const keyData = new UserData(this.userId, userData).keyData;
      return keyData;
    } catch (error) {
      console.error("Error fetching KeyData:", error);
      throw error;
    }
  }

  async getGoalScore() {
    try {
      const userData = await this.fetcher.userData(this.userId);
      const userGoal = new UserData(this.userId, userData)

      return userGoal;
    } catch (error) {
      console.error("Error fetching KeyData:", error);
      throw error;
    }
  }

  async getUserActivity() {
    try {
      const userData = await this.fetcher.activityData(this.userId);
      const userActivity = new UserActivity({userId:this.userId, sessions:userData.sessions})
      return userActivity;
    } catch (error) {
      console.error("Error fetching activityData:", error);
      throw error;
    }
  }

  async getUserAverageSessions() {
    try {
      const userData = await this.fetcher.averageSessionsData(
        this.userId
      );
      const userAverageSessions = new UserAverageSessions({userId:this.userId, sessions:userData.sessions})
      
      return userAverageSessions;
    } catch (error) {
      console.error("Error fetching data from average sessions:", error);
      throw error;
    }
  }

  async getUserStats() {
    try {
      const performance = await this.fetcher.performanceData(this.userId);
      const userPerformance = new UserPerformance({userId: this.userId, kind: performance.data.kind,
        data: performance.data.data})
              

      return userPerformance;
    } catch (error) {
      console.error("Error fetching data from performance sessions:", error);
      throw error;
    }
  }
}
