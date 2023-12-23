function fromMilesToKm(miles) {
  const km = miles / 0.62137
  return km;
}

function logName (name, surname) {
  console.log(`Моё имя ${name} ${surname}`);
}

logName('Константин', 'Сукин');

function countDepositSum(depositInUSD, month, rate) {
  const sum = depositInUSD * (1 + rate / 12) ** month;
  return sum;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);


const poft = (num) => num * num;

function toPower(num, power) {
  const res = num ** power;
  return res;
}

console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;

console.log(toPowerArrow(2, 6));


function canAssessWebsite(age) {
  if (age < 18) {
    return 'Yes';
  } 
    return 'No';
}


console.log(canAssessWebsite(19));

const canAssessWebsite2 = age => age < 18 ? "No" : 'Yes';
console.log(canAssessWebsite2(12));



const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
  return present * KG_IN_USD;
}

function calculateKm(distance) {
  return distance * KM_IN_USD;
}

function getExchagePrice (presentOne, presentSecond, distance) {
  const priceOne = calculateW(presentOne);
  const priceSecond = calculateW(presentSecond);
  const distancePrice = calculateKm(distance)
  return priceOne + priceSecond + distancePrice;
}

console.log(getExchagePrice(1, 2, 10))






function computeCredit(age, hasJob = false) {
  if (age >= 24 && hasJob === true ) {
    return 500;
  } else if (age >= 24 && hasJob === false) {
    return 100;
  } else {
    return 0;
  }
};

function canBuy (productPrice, age, money, hasJob= false) {
  const creditMoney = computeCredit(age, hasJob);
  return productPrice <= money + creditMoney;
}

console.log(canBuy(2000, 25, 1600, true));