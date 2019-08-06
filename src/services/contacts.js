import { compose, map, propEq, find, reject, findIndex, merge } from 'ramda';
import contactResponse from '../seeds/contacts';
import contactResponseFormatter from './utils/contact-response-formatter';
import contactInputFormatter from './utils/contact-input-formatter';

/*
 * Retrieve all active contacts
 * @return {Array} List of formatted contacts
 */
export function getAll() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const contacts = map(contactResponseFormatter, contactResponse);
			resolve(contacts);
		}, 1000);
	});
}

/*
   * Retrieve an contact by id
   * @return {Array} List of formatted contacts
   */
export function get(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const contact = find(propEq('id', parseInt(id)), contactResponse);
			resolve(contactResponseFormatter(contact));
		}, 1000);
	});
}

/*
 * Create an contact
 * @return {Array} List of formatted contacts
 */
export function create(data) {
	return update(data);
}

/*
 * Update an contact
 * @return {Array} List of formatted contacts
 */
export function update(data) {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			const contacts = await getAll();
			const index = findIndex(propEq('id', data.id))(contacts);
			contacts[index] = contactInputFormatter(merge(contacts[index], data));
			resolve(contacts);
		}, 1000);
	});
}

/*
 * Delete an contact
 * @return {Array} List of formatted contacts
 */
export function deleteById(id) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			const contacts = compose(
				map(contactResponseFormatter),
				reject(propEq('id', id))
			)(contactResponse);
			res(contacts);
		}, 1000);
	});
}
