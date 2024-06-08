
/**
 * class for the average sessions datas
 */

export default class AverageSessionsInterface {
    /**
     * format fetch average sessions data
     * @param {Object}
     */
    constructor({userId, sessions}) {
        this.id = userId;
        this.averageSession = sessions.map((session, index) => ({
            day: (index +1).toString(),
            sessionLength: session.sessionLength,
        }))
    }
}