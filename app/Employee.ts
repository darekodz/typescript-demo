import { Person } from './Person';

export class Employee extends Person {

	constructor(name: string, g: number, w: number, protected profession: string) {
		super(name, g, w);
	}

	public showProfession(): void {
		$('textarea.textarea.is-loading.is-info').append(
`This person's profession is ${this.profession}.
The "showProfession() method" executed.\n`,
		);
	}

}
