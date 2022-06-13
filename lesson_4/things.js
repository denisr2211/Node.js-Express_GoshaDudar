module.exports.array_counter = function(array) {
    return "В массиве находится " + array.length + " элементов";
};

module.exports.multiply = function(x, y) {
    return `${x} умножить ${y} равно ${x * y}`;
};

module.exports.some_value = 452;

// module.exports = {
//     array_counter: array_counter,
//     multiply: multiply,
//     some_value: some_value
// };                               // 2-й вариант записи