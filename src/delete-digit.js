const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {

		// Переводим число в строку:
		let str = n.toString();

		// Задаем максимальное значение:
		let maxValue = 0;
	
		// С помощью цикла перебираем все диджиты числа:
		for (let i = 0; i < str.length; i++) {
			let str2 = str.slice(0, i) + str.slice(i + 1);
			
			// Обрабатываем случай где первая цифра равна нулю:
			if (str2[0] === "0") {
			  for (let j = 1; j < str2.length; j++) {
				 let newNum = +(str2.slice(0, j) + str2.slice(j + 1));
				 if (newNum > maxValue) {
					maxValue = newNum;
				 }
			  }
			} else {
			  let newNum = +(str2);
			  if (newNum > maxValue) {
				 maxValue = newNum;
			  }
			}
		 }

		return maxValue
}



module.exports = {
  deleteDigit
};
