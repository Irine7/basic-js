const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

	// Задаем начальную сумму:
	let sum = 0;

	// Перебираем циклом каждый столбик (j):
	for (let j = 0; j < matrix[0].length; j++) {
		// Перебираем циклом каждую строку (i):
		for (let i = 0; i < matrix.length; i++) {
			// Если найденный элемент не меньше 0, то добавляем его к sum:
			if (i === 0 || matrix[i - 1][j] !== 0) {
				sum += matrix[i][j];
			}
		}
	}
	return sum;
}

module.exports = {
	getMatrixElementsSum
};
