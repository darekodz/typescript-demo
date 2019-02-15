import { Employee } from './Employee';

/**
 * Man class
 *
 * @export
 * @class Man
 * @extends {Employee}
 */
export class Man extends Employee {

	/**
	 * Creates an instance of Man.
	 * 
	 * @param {string} name
	 * @param {number} g
	 * @param {number} w
	 * @param {string} p
	 * @param {string} power
	 * @memberof Man
	 */
	constructor(name: string, g: number, w: number, p: string, protected power: string) {
		super(name, g, w, p);
	}

	/**
	 * Main method of the Man class
	 *
	 * @memberof Man
	 */
	public hardWork() {
		$('textarea.textarea.is-loading.is-info').append(
`${this.name} as a Man has ${this.growth} cm growth, 
${this.weight} kg weight and he is ${this.power} so he is able to work very hard
The "hardWork() method" executed.\n`,
		);
	}

}
