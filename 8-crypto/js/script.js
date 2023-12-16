// Написать две функции
/*
-Шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами
какието буквы по заданному алгоритму и возвращает строку.

-проверка пароля - принимет зашифрованный пароль и второй пароль. Воспроизводит
алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со втромы
паролем и false, если нет
*/


function crypto (password) {

  const breakPassword = password.split('');
  const reversePass = breakPassword.reverse();
  const firstPartPass = reversePass.slice(0, 4);
  const secondPartPass = reversePass.slice(4);
  const newArray = secondPartPass.concat(firstPartPass);

  return newArray.join('');
}




function decryptor (encryptedPass, password) {
  const breakNewPassword = encryptedPass.split('');

  const firstPartPass = breakNewPassword.slice(0, 4);
  const secondPartPass = breakNewPassword.slice(4);
  const newArray = secondPartPass.concat(firstPartPass);
  const decryotedPassword = newArray.reverse().join('');

  if (decryotedPassword === password) {
      return true;
  }

  return false;
}
console.log(decryptor('ssapdrow', 'password'));