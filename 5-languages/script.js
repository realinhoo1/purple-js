// const russianLanguage = 'rus';
// const germanLanguage = 'ger';
// const englishLanguage = 'eng';
// const norwegianLanguage = 'nor';


const userLanguage = prompt('Какой ваш язык?')

switch (userLanguage) {
  case 'russian':
    console.log('Здравствуйте');
    break;
  case 'german':
    console.log('Guten Tag');
    break;
  case 'english':
    console.log('Hello');
    break;
  case 'norwegian':
    console.log('Hei');
    break;
  default:
    console.log('Hello everyone!=)');
    break;
}
