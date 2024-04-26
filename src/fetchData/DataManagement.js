import axios from "axios";

export class DataManagement {
  constructor(userId) {
    this.isMockMode = import.meta.env.VITE_ISMODE_MOCK === "true";

    // API endpoints
    this.apiUrl = this.isMockMode
      ? "../mock/mockData.js"
      : "http://localhost:3000";

    this.userId = userId;
  }

  async userData() {
    try {
      const response = await axios.get(`${this.apiUrl}/user/${this.userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async activityData() {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/${this.userId}/activity`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async averageSessionsData() {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/${this.userId}/average-sessions`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async performanceData() {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/${this.userId}/performance`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
