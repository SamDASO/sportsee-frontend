import { MockFetch } from "./mock.js";
import { ApiFetch } from "./api.js";

export class DataController {
  constructor(userId) {
    this.isMockMode = import.meta.env.MODE === "mock";
    this.userId = userId;
  }

  async getUserName() {
    try {
      let name;
      if (this.isMockMode) {
        const userData = await new MockFetch().userData(this.userId);
        name = userData.userInfos.firstName;
      } else {
        const userData = await new ApiFetch().userData(this.userId);
        name = userData.userInfos.firstName;
      }
      return name;
    } catch (error) {
      console.error("Error fetching dataUserName:", error);
      throw error;
    }
  }

  async getKeyData() {
    try {
      let keyData;
      if (this.isMockMode) {
        const userData = await new MockFetch().userData(this.userId);
        keyData = userData.keyData;
      } else {
        const userData = await new ApiFetch().userData(this.userId);
        keyData = userData.keyData;
      }
      return keyData;
    } catch (error) {
      console.error("Error fetching KeyData:", error);
      throw error;
    }
  }
}
