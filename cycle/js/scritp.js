// Упражнение - Цикл в обратном порядке

const arr = ['!', 'JS', 'люблю', 'Я'];
const newArr1 = [];
const newArr2 = [];

for (let i = arr.length - 1; i >= 0; i--) {
  newArr1.push(arr[i]);
}

console.log(newArr1.join(' '));

for (let i = 0; i <= arr.length - 1; i++) {
  newArr2.unshift(arr[i]);
}

console.log(newArr2.join(' '));