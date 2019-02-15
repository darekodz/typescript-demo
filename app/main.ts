import { Person } from './Person';
import { Man } from './Man';
import { Employee } from './Employee';
import * as $ from 'jquery';

$('a.button.is-primary.is-medium.is-fullwidth').click(() => {
	const person = new Person('Gabriel', 176, 80);
	person.think();
	$('textarea.textarea.is-loading.is-info').append('\n');
});

$('a.button.is-link.is-medium.is-fullwidth').click(() => {
	const employee = new Employee('Gabriel', 176, 80, 'Policeman');
	employee.think();
	employee.showProfession();
	$('textarea.textarea.is-loading.is-info').append('\n');
});

$('a.button.is-info.is-medium.is-fullwidth').click(() => {
	const man = new Man('Gabriel', 176, 80, 'Policeman', 'very strong');
	man.think();
	man.showProfession();
	man.hardWork();
	$('textarea.textarea.is-loading.is-info').append('\n');
});
