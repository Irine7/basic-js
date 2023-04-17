const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	//   throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	// запускаем цикл n меньше 9:
	while (n > 9) {
		// Здесь мы переводим n в строку, чтобы можно было перебирать цифры:
		const nToStr = n.toString();

		// Создаем переменную, где можно хранить сумму всех цифр:
		let SumOfDigits = 0;

		// Перебираем цифры циклом и добавляем их к сумме:
		for (let i = 0; i < nToStr.length; i++) {
			SumOfDigits += parseInt(nToStr[i]);
		}

		n = SumOfDigits;
	}
	return n;
}

module.exports = {
	getSumOfDigits
};
