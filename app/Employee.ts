import { Man } from './Man';

export class Employee extends Man {

	constructor(name: string, g: number, w: number, power: string, protected profession: string) {
		super(name, g, w, power);
	}

	public showProfession(): void {
		console.log(`This person is a Man and his profession is ${this.profession}`);
	}

}
