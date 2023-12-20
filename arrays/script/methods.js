const roles = ['user', 'admin', 'manager', 'superuser'];

// Метод slice() возвращает новый массив, 
// содержащий копию части исходного массива.

const res = roles.slice(2);
console.log(roles);
console.log(res);
console.log(roles);

// Вернет 1й и 2й элементы
const res2 = roles.slice(0, 2);
console.log(res2);

// Вернет последный элемент
const res3 = roles.slice(-1);
console.log(res3);


// Метод splice() изменяет содержимое массива, 
// удаляя существующие элементы и/или добавляя новые. 

const res5 = roles.splice(2);
console.log(res5);
console.log(roles);

// Метод reverse() на месте обращает порядок следования элементов массива.
// Первый элемент массива становится последним, а последний — первым. 

const res6 = roles.reverse();
console.log(res6);

// Метод concat() возвращает новый массив, состоящий из массива, 
// на котором он был вызван, соединённого с другими массивами и/или 
// значениями, переданными в качестве аргументов.

const newRoles = ['sysadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);
console.log(roles);


// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
const users = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const result = url.split('/');
console.log(result);

// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.


const result2 = users.join('-');
console.log(result2);
console.log(users);

console.log('----------------------------------------')
/*
Задание Обновление списка задач

Дан список задач
const tasks = ['Задача 1'];

Сделать функции:
  Добавление задачи в конец
  Удаление задачи по названию
  Перенос задачи в начало списка по названию
! Всегда меняем исходный массив

*/


const tasks = ['Задача 1'];

const addTask = (task)=> {
  tasks.push(task);
}

const deleteTask = (taskName) => {
  const indexTask = tasks.indexOf(taskName);
  if (indexTask < 0) {
    console.log('Такой задачи нет.');
    return;
  }
  return tasks.splice(indexTask, 1);
}

const transfersTask = (taskName) => {
  const result = deleteTask(taskName);
  if (!result) {
    return;
  }
  tasks.unshift(result[0]);
}

addTask('jj');
addTask('ff');
addTask('dd');
console.log(tasks);

deleteTask('ff')
console.log(tasks);

transfersTask('jj');
console.log(tasks);


// Деструктуризация
const userData = ['Антон', 22, 'Москва'];
const [userName, age, city] = userData;

console.log(userName, age, city);

// Оператор rest ...

const data = [1, 2, 3, 4, 5, 6];

const [one, two, ...others] = data;
console.log(one,two,others);


console.log('-------------------------');


// Упражнение - Функция разбора URL

/*
Дан произвольный url вида - https://purpleschool.ru/course/javascript
Нужно сделать функцию, которая выводит в консоль:
  Протокол (https)
  Доменное имя (purpleschool.ru)
  Путь внутри сайта (/course/javascript)
*/

const urlLink = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
  const [protocol, _, domen, ...path] = url.split('/');

  console.log(`Протокол сайта: ${protocol.split(':')[0]}`)
  console.log(`Домен сайта: ${domen}`)
  console.log(`Путь до курсов сайта:/${path.join('/')}`);
}

getUrlParts(urlLink);