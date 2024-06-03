import { MockFetch } from "./mock.js";
import { ApiFetch } from "./api.js";

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
      const name = userData.userInfos.firstName;
      return name;
    } catch (error) {
      console.error("Error fetching dataUserName:", error);
      throw error;
    }
  }

  async getKeyData() {
    try {
      const userData = await this.fetcher.userData(this.userId);
      const keyData = userData.keyData;
      return keyData;
    } catch (error) {
      console.error("Error fetching KeyData:", error);
      throw error;
    }
  }

  async getGoalScore() {
    try {
      let goalScore;
      const userData = await this.fetcher.userData(this.userId);

      if (userData.score !== undefined) {
        goalScore = userData.score;
      } else {
        goalScore = userData.todayScore;
      }

      return goalScore;
    } catch (error) {
      console.error("Error fetching KeyData:", error);
      throw error;
    }
  }

  async getUserActivity() {
    try {
      const userData = await this.fetcher.activityData(this.userId);
      const userActivity = userData.sessions;
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
      const averageSessions = userData.sessions;

      return averageSessions;
    } catch (error) {
      console.error("Error fetching data from average sessions:", error);
      throw error;
    }
  }

  async getUserStats() {
    try {
      const performance = await this.fetcher.performanceData(this.userId);

      return performance.data;
    } catch (error) {
      console.error("Error fetching data from average sessions:", error);
      throw error;
    }
  }
}
