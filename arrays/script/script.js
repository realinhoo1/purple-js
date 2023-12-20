const users = ['Аня', 'Вика', 'Катя'];
console.log(users);

users[2] = 'Крис';
console.log(users);

// Метод push - добавляет в конец массива и возвращает новую длину массива

const arrLenght = users.push('Василий');
console.log(users);
console.log(arrLenght);

const addArrLenght = users.push('Василий', 'Kost', 'Viva');
console.log(users);
console.log(addArrLenght);

// Метод unshift() добавляет новые элементы в начало массива и 
// возвращает новую длину

newArrLenght = users.unshift('Disc');
console.log(users);
console.log(newArrLenght);

// Метод pop() удаляет последний элемент из массива и возвращает его значение

const elOne = users.pop();
console.log(users);
console.log(elOne);

// Метод shift() используется для удаления первого элемента из массива и возвращает удаленный элемент

const elSecond = users.shift();
console.log(users);
console.log(elSecond);


// Поиск элемента

// Метод indexOf возвращает первый индекс, по которому данный 
// элемент может быть найден в массиве или -1, если такого индекса нет.

const roles = ['user', 'admin', 'manager'];
const elIndes1 = roles.indexOf('admin');
console.log(elIndes1);

const elIndes2 = roles.indexOf('superuser');
console.log(elIndes2);

if (roles.indexOf('admin' >= 0)) {
  console.log('Доступ есть')
}


// Метод includes определяет, содержит ли массив определённый элемент, 
// возвращая в зависимости от этого true или false.
console.log(roles.includes('user'));
console.log(roles.includes('superuser'));
