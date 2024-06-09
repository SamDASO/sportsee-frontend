/**
 * class for the performance data
 */

export default class UserPerformance {
    /**
     * format fetch performance data
     * @param userId number
     * @param data any
     */
    constructor({userId, kind, data}) {
        this.id = userId;
        const kindFr = {
                cardio: 'Cardio',
                energy: 'Énergie',
                endurance: 'Endurance',
                strength: 'Force',
                speed: 'Vitesse',
                intensity: 'Intensité',
              }
              
        this.performance = data.map((d) => ({
            ...d,
            value: d.value,
            kind: kindFr[kind[d.kind]]
        }))
    }
}