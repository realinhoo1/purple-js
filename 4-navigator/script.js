// Координаты точек
const addressLat = 2;
const addressLong = 7;
const positionLat = -2;
const positionLong = 7;

// Формула расчета, формула взята из интернета
const positions = (((addressLat - positionLat) * 2) + ((addressLong - positionLong) * 2)) * 2;

// Рачет квадрата
const distance = Math.sqrt(positions);

console.log(distance);