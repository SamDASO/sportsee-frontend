import axios from "axios";

export class ApiFetch {
  constructor() {
    // API endpoints
    this.apiUrl = "http://localhost:3000";
  }

  async userData(userId) {
    try {
      const response = await axios.get(`${this.apiUrl}/user/${userId}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async activityData(userId) {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/${userId}/activity`
      );
      return response.data.data;
      
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async averageSessionsData(userId) {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/${userId}/average-sessions`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async performanceData(userId) {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/${userId}/performance`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
