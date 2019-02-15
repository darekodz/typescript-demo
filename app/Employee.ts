import { Person } from './Person';

/**
 * Employee class
 *
 * @export
 * @class Employee
 * @extends {Person}
 */
export class Employee extends Person {

	/**
	 * Creates an instance of Employee.
	 * 
	 * @param {string} name
	 * @param {number} g
	 * @param {number} w
	 * @param {string} profession
	 * @memberof Employee
	 */
	constructor(name: string, g: number, w: number, protected profession: string) {
		super(name, g, w);
	}

	/**
	 * Main method of the Employee class
	 *
	 * @memberof Employee
	 */
	public showProfession(): void {
		$('textarea.textarea.is-loading.is-info').append(
`This person's profession is ${this.profession}.
The "showProfession() method" executed.\n`,
		);
	}

}
