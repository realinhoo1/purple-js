// Домашнее задание "Функции, конвертер валют"

/*
Параметры : сумма, валюта, целевая валюта.

Написать функцию, которая получает на вход строку с:
- суммой средств - 1000
- валютой средств - руб
- целевой валютой - $
Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет.
Ставки конвертации хранятся внутри функции.
*/


function converterCurrency(sum, currency = 'USD', targetСurrency) {
  
  const USD = 90;
  const EUR = 98;
  const CNY = 12;

  switch(true){
    case currency === 'RUB':
      targetСurrency = sum / USD;
      return  `${targetСurrency} $`;

    case currency === 'EUR':
      targetСurrency = (sum * EUR) / USD;
      return `${targetСurrency} $`;

    case currency === 'CNY':
      targetСurrency = (sum * CNY) / USD;
      return `${targetСurrency} $`;

    default: 
      return null;
  }

}

console.log(converterCurrency(100, 'CNY'));