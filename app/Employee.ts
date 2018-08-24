import { Person } from './Person';

export class Employee extends Person {

	constructor(name: string, g: number, w: number, protected profession: string) {
		super(name, g, w);
	}

	public showProfession(): void {
		console.log(`
			This person's profession is ${this.profession}
		`);
	}

}
