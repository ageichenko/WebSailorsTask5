let min = parseInt(prompt('введите минимальное значение', 0));
let max = parseInt(prompt('введите максимальное значение', 10));


function fillArray(min, max) {
	let arr = [];

	for (let i = min; i <= max; i++) {
		arr.push(i);
	};

	return arr;
}

let arr = fillArray(min, max);
alert('Массив: ' + arr);
alert('Длина массива: ' + arr.length);