/**
 * class for the activity data
 */

export default class UserActivity {
    /**
     * format fetch activity data
     * @param userId number
     * @param sessions any
     */
    constructor({userId, sessions}) {
        this.id = userId;
        this.activity = sessions?.map((session) => ({
            day: this.formatDay(session.day),
            kilogram: session.kilogram,
            calories: session.calories,
        }))
    }

    formatDay = (value) => {
        const day = value.split("-")[2];
        return parseInt(day, 10).toString();
      };
}