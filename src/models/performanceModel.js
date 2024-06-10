/**
 * class for the performance data
 */

export default class UserPerformance {
    /**
     * format fetch performance data
     * @param userId number
     * @param performance any
     */
    constructor(userId, performance) {
        this.id = userId;
        this.kind = performance.kind;
        const kindFr = {
                cardio: 'Cardio',
                energy: 'Énergie',
                endurance: 'Endurance',
                strength: 'Force',
                speed: 'Vitesse',
                intensity: 'Intensité',
              }
              
        this.performance = performance.data.map((d) => ({
            ...d,
            value: d.value,
            kind: kindFr[this.kind[d.kind]]
        }))
    }
}