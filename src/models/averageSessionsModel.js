
/**
 * class for the average sessions data
 */

export default class UserAverageSessions {
    /**
     * format fetch average sessions data
     * @param userId number
     * @param sessions any
     */
    constructor(userId, sessions) {
        this.id = userId;
        this.averageSession = sessions.map((session, index) => ({
            day: this.getDayName(session.day),
            sessionLength: session.sessionLength,
        }))
    }

    
  getDayName = (day) => {
    const dayNames = ["", "L", "M", "M", "J", "V", "S", "D"];
    return dayNames[day];
  };
}