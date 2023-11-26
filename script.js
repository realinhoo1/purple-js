const questionUser = prompt('Сколько будет 7 + или -15');

// switch(true) {
//   case questionUser === 'Я не робот':
//   case Number(questionUser) === 22: 
//   case Number(questionUser) === -8:
//     console.log('Успех!');
//     break;
//   default:
//     console.log('Вы робот!');
// };

if (questionUser === 'Я не робот') {
  alert('Успех!');
} else if(Number(questionUser) === 22) {
  alert('Успех!');
}  else if(Number(questionUser) === -8) {
  alert('Успех!');
} else {
  alert('Вы робот!');
}
