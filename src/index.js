module.exports = function toReadable(number) {
	let arrTillTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let arrTillTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let arrTillHundred = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	number = String(number);
 	if (number.length === 1) {
		return arrTillTen[number];
	} else if (number.length === 2 && number[0] == 1) {
		return arrTillTwenty[number[1]];

	} else if (number.length === 2 && number[1] == 0) {
		return arrTillHundred[number[0]];

	} else if (number.length === 2 && number[1] != 0) {
		return arrTillHundred[number[0]] + ' ' + arrTillTen[number[1]];

	} else if (number.length === 3 && number[1] == 0 && number[2] == 0) {
		return arrTillTen[number[0]] + ' hundred';

	} else if (number.length === 3 && number[1] == 1 && number[2] != 0) {
		return arrTillTen[number[0]] + ' hundred ' + arrTillTwenty[number[2]];

	} else if (number.length === 3 && number[1] != 0 && number[2] == 0) {
		return arrTillTen[number[0]] + ' hundred ' + arrTillHundred[number[1]];

	} else if (number.length === 3 && number[1] == 0 && number[2] != 0) {
		return arrTillTen[number[0]] + ' hundred ' + arrTillTen[number[2]];

	} else if (number.length === 3 && number[1] != 0 && number[2] != 0) {
		return arrTillTen[number[0]] + ' hundred ' + arrTillHundred[number[1]] + ' ' + arrTillTen[number[2]];
	}  
}
