const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	// Создаем массив, где будут только value для сортировки:
	const sortedArr = arr.filter(n => n !== -1)
	.sort((a, b) => a - b);
	
	// Создаем новый массив и проходиим циклом:
	const resArr = [];
	let i = 0;
	for (const n of arr) {
		if (n === -1) {
			resArr.push(n);
		} else {
			resArr.push(sortedArr[i]);
			i++;
		}
	}
	return resArr;
}

module.exports = {
	sortByHeight
};
