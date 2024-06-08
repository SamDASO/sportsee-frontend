/**
 * class for the activity datas
 */

export default class ActivityInterface {
    /**
     * format fetch activity data
     * @param {Object}
     */
    constructor({userId, sessions}) {
        this.id = userId;
        this.activity = sessions.map((session) => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }))
    }
}