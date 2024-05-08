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

  async activityData() {
    return new Promise((resolve) => {
      resolve(this.mockData.USER_ACTIVITY);
    });
  }

  async averageSessionsData() {
    return new Promise((resolve) => {
      resolve(this.mockData.USER_AVERAGE_SESSIONS);
    });
  }

  async performanceData() {
    return new Promise((resolve) => {
      resolve(this.mockData.USER_PERFORMANCE);
    });
  }
}
