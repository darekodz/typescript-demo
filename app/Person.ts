export class Person {
	private BMI: number;

	constructor(protected name: string, protected growth: number, protected weight: number) {
		this.BMI = this.countBmi(this.growth, this.weight);
	}

	public think(): void {
		console.log(`${this.name} as a Person is able to think. His / Her BMI is ${this.BMI}`);
	}

	private countBmi(growth: number, weight: number): number {
		const growthInMetres = growth / 100;
		const bmi = (weight / growthInMetres) / growthInMetres;
		return Math.round(bmi * 100) / 100;
	}

}
