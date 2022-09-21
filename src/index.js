import 'jquery'
import './main.scss'




console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');

let booksCount = 19; // Количество книг, прочтённых за год
let result; // Сюда запишем результат сравнения booksCount с эталонным значением

// Сравним с помощью условной конструкции if
if (booksCount > 15) {
  result = 'План на год выполнен!';
} else {
  result = 'Читать и ещё раз читать';
}

console.log(result);

// А теперь с помощью тернарного оператора
result = (booksCount > 15) ? 'План на год выполнен!' : 'Читать и ещё раз читать';

console.log(result);