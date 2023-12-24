// Упражнение - Цикл в обратном порядке

const arr = ['!', 'JS', 'люблю', 'Я'];
const newArr1 = [];
const newArr2 = [];

for (let i = arr.length - 1; i >= 0; i--) {
  newArr1.push(arr[i]);
}

for (let i = 0; i <= arr.length - 1; i++) {
  newArr2.unshift(arr[i]);
}

console.log(newArr1.join(' '));
console.log(newArr2.join(' '));

console.log('-------------------------');



/*
Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчета:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
- Расчета среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function getBalance (arrayOfOperation, startBalance) {
  let balance = startBalance;
  for (const element of arrayOfOperation) {
    balance += element;
  }
  return balance;
}

console.log(getBalance(operations, startBalance));

function checkOperations (arrayOfOperation, startBalance ) {

  let balance = startBalance;
  let isOk = true;

  for (const element of arrayOfOperation) {
    balance += element;
    if (balance < 0) {
      isOk = false;
      break;
    }
  }
  return isOk;
}

console.log(checkOperations(operations, startBalance));

function avarageOperation (arrayOfOperation) {

  let positiveCount = 0;
  let positiveSum = 0;
  let negativeCount = 0;
  let negativeSum = 0;

  for (const element of arrayOfOperation) {
    if (element > 0) {
      positiveCount++;
      positiveSum += element;
    } 
    if(element < 0) {
      negativeCount++;
      negativeSum -= element;
    }
  }
  return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(avarageOperation(operations));

console.log('--------------------------');

