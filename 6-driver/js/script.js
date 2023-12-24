// Задание Проверка прав
let balance = 1000;
// бонусы
let bonusBalance = 100;
// бан
let isBanned = false;
// некуплена игра
let isExist = false;
// в продаже
let isSelling = true;


if ((balance >= 1000 || bonusBalance >= 100) && !isBanned && !isExist && isSelling) {
  console.log('Купит');
}else {
  console.log('Не купит');
}



// Домашнее задание Булева логика
// Имеет права
const hasLicence = true;
// Возраст 18 лет или больше
const age = 18;
// Он пьян
const isDrink = false;

const canDrive = hasLicence && (age >= 18) && !isDrink;

console.log(`Водитель: ${canDrive ? 'Может водить' : 'Не может водить'}`);