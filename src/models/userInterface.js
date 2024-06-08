/**
 * class for the user data
 */

export default class UserInterface {
    /**
     * format fetch user data
     * @param {Object}
     */
    constructor(id, data) {
        this.id = data.id;
        this.firstName = data.userInfos.firstName;
        this.todayScore = data.todayScore || data.score;
        this.keyData = data.keyData;
        
    }
}