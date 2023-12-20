/* 

Дан массив чисел const arr = [1, 40, -5, 10, 0];
Написать функцию, которая сортирует данный массив при помощи циклов.

подсказка:
- нужно использовать 2 цикла, вложенных друг в друга,
- нужно сравнивать и менять элементы

*/

// Решение взял из интернета, для меня оказалось задание очень сложным

const array = [1, 40, -5, 10, 0, 33, 21, -45];

function sortArray(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray(array));