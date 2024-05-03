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
      setTimeout(() => {
        const user = this.mockData.USER_MAIN_DATA.find(
          (user) => user.id == userId
        );
        resolve(user);
      }, 1000);
    });
  }

  async activityData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockData.USER_ACTIVITY);
      }, 1000);
    });
  }

  async averageSessionsData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockData.USER_AVERAGE_SESSIONS);
      }, 1000);
    });
  }

  async performanceData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockData.USER_PERFORMANCE);
      }, 1000);
    });
  }
}
