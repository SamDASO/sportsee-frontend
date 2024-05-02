export class Mock {
  constructor(mockData) {
    this.mockData = mockData;
  }

  async userData(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = this.mockData.USER_MAIN_DATA.find(
          (user) => user.id === userId
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
