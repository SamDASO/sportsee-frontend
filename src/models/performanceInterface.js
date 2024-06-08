/**
 * class for the performance datas
 */

export default class PerformanceInterface {
    /**
     * format fetch performance data
     * @param {Object}
     */
    constructor({userId, data}) {
        this.id = userId;
        this.kind = kind;
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