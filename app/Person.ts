
/**
 * Person class
 *
 * @export
 * @class Person
 */
export class Person {
	private BMI: number;

	/**
	 * Creates an instance of Person.
	 * 
	 * @param {string} name
	 * @param {number} growth
	 * @param {number} weight
	 * @memberof Person
	 */
	constructor(protected name: string, protected growth: number, protected weight: number) {
		this.BMI = this.countBmi(this.growth, this.weight);
	}

	/**
	 * Main method of the Person class
	 *
	 * @memberof Person
	 */
	public think(): void {
		$('textarea.textarea.is-loading.is-info').append(
`${this.name} as a Person is able to think. His / Her BMI is ${this.BMI}. 
The "think() method" executed.\n`,
		);
	}

	/**
	 * Counts BMI based on growth and weight
	 *
	 * @private
	 * @param {number} growth
	 * @param {number} weight
	 * @returns {number}
	 * @memberof Person
	 */
	private countBmi(growth: number, weight: number): number {
		const growthInMetres = growth / 100;
		const bmi = (weight / growthInMetres) / growthInMetres;
		return Math.round(bmi * 100) / 100;
	}

}
