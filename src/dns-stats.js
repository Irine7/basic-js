const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	// Задаем объект:
	const obj = {};

	// Перебираем циклом:
	for (let domain of domains) {
		// Разбиваем на части и переводим в обратный порядок:
		const parts = domain.split('.').reverse();
	
		// Здесь задаем переменную для ключа объекта:
		let key = '';
		for (let part of parts) {
			// Добавляем часть домена к ключу:
			key += `.${part}`;
			// Увеличиваем счетчик для ключа в объекте
			obj[key] = obj[key] ? obj[key] + 1 : 1;
		}
	}
	return obj;
}

module.exports = {
  getDNSStats
};
