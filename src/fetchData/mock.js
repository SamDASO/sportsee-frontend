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
        resolve(this.mockData.userActivity);
      }, 1000);
    });
  }

  async averageSessionsData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockData.userAverageSessions);
      }, 1000);
    });
  }

  async performanceData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockData.userPerformance);
      }, 1000);
    });
  }
}
