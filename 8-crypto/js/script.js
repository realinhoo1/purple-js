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
  
  const splicePass = reversePass.splice(0, 4);
  
  const joinPass =  splicePass.join('');
  
  
  return console.log(joinPass);
}

crypto('password');

function decryptor (changedPass, password) {

  const breakNewPassword = changedPass.split('');
  const reverseNewPass = breakNewPassword.reverse();
  const joinNewPass = reverseNewPass.join('');
  
  if (password === joinNewPass) {
    return console.log(true);
  }
  return console.log(false);
}

decryptor('drowssap', 'password');