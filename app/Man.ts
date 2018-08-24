import { Employee } from './Employee';

export class Man extends Employee {

	constructor(name: string, g: number, w: number, p: string, protected power: string) {
		super(name, g, w, p);
	}

	public hardWork() {
		console.log(`
			${this.name} as a Man has ${this.growth} cm growth, 
			${this.weight} kg weight and he is ${this.power} so he is able to work very hard
		`);
	}

}
