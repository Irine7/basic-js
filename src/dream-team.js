const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 function createDreamTeam(members) {
	// Проверяем чтобы это был массив:
	if (!Array.isArray(members)) {
		return false;
	}
		// Применяем фильтр и убираем пробелы:
	const validItems = members.filter(member =>
		typeof member === 'string').map(member => member.trim());
		// Берем первую букву:
		const firstChars = validItems.map(member => member[0].toUpperCase());
		// Сортируем и склеиваем строку:
		const res = firstChars.sort().join('');
		return res;
}

module.exports = {
  createDreamTeam
};
