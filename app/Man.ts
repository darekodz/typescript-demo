import { Person } from './Person';

export class Man extends Person {

	constructor(name: string, g: number, w: number, protected power: string) {
		super(name, g, w);
	}

	public hardWork() {
		console.log(`${this.name} as a Man has ${this.growth} cm growth, 
		${this.weight} kg weight and he is ${this.power} so he is able to work very hard`);
	}

}
