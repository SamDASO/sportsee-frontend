import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mock/mockData.js";

export class MockFetch {
  constructor() {
    this.mockData = {
      USER_MAIN_DATA,
      USER_ACTIVITY,
      USER_AVERAGE_SESSIONS,
      USER_PERFORMANCE,
    };
  }

  async userData(userId) {
    return new Promise((resolve) => {
      const user = this.mockData.USER_MAIN_DATA.find(
        (user) => user.id == userId
      );
      resolve(user);
    });
  }

  async activityData(userId) {
    return new Promise((resolve) => {
      const userActivity = this.mockData.USER_ACTIVITY.find(
        (user) => user.userId == userId
      );

      resolve(userActivity);
    });
  }

  async averageSessionsData(userId) {
    return new Promise((resolve) => {
      const userSessions = this.mockData.USER_AVERAGE_SESSIONS.find(
        (user) => user.userId == userId
      );
      resolve(userSessions);
    });
  }

  async performanceData(userId) {
    return new Promise((resolve) => {
      const userPerformance = this.mockData.USER_PERFORMANCE.find(
        (user) => user.userId == userId
      );
      resolve(userPerformance);
    });
  }
}
