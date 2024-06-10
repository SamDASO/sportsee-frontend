/**
 * class for the user data
 */

export default class UserData {
    /**
     * format fetch user data
     * @param userId number
     * @param data any
     */
    constructor(userId, data) {
        this.id = userId;
        this.firstName = data.userInfos.firstName;
        this.todayScore = data.todayScore || data.score;
        this.keyData = data.keyData;
        
    }

      
}