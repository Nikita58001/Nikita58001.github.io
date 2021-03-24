/* функция document.write() записывает строку в документ HTML,вы также можете использовать HTML-разметку в результате */
/* В то время как document.write() используется для написания результата в HTML,функия console.log() используется для
вывода результата в браузера.Консоль это часть веб-браузера,которая позволяет сохранять в журнал сообщения,запускать код
JavaScript и просматривать ошибки и предупреждения
 */
/* Переменные это контейнеры для хранения значений.Значения переменной может изменяться в течени работы программы.
Используйте ключевое слово var для объявления переменной.В JavaScript, знак равенства(=) называется оператором "присваивания"
а не оператором равенства.Например в выражении x = y,Значение у будет присвоено x.
 */
/*Использование переменных полезно по многим причинам.У вас могут быть тысячи строк кода с переменной x.Вы можете изменить
значение переменных и использовать их в коде множество раз.
 */
/* Правила наименования: -Первым символом должна быть буква,нижнее подчёркнивание(_) или знак доллара($).Следующими
символами могут быть буквы,цифры,нижние подчёркивания или знаки доллара. -Первым символом не можеть быть цифра.
-Название переменных не могут соддержать математические или логические операторы.Например 2*something или this+that;
Имена в JavaScript не должны содержать пробелы. Вы не должны использовать специальные символы, такие как my#num, num%
и т.д. Использовать дефисы в JavaScript запрещено.Они отведены для операций вычитания.
 */
/* Термин тип данных относится к типам значений с которыми может работать программа.Переменные JavaScript могут сохранять
множество типов данных,таких как цифры,строки,массивы и многое другое.Цифры в JavaScript могут быть написаны с десятичными
знаками или без.
 */
/* В JavaScript строки используются для хранения и управления текстом.Строкой может быть любой текст,написанный внутри
кавычек.Вы можете использовать одинарные или двойные кавычки. Вы можете использовать кавычки внутри строки, если они не подходят
кавычкам,окружающим строку.Вы можете получить двойные кавычки внутри двойных кавычек,используя escape-символ,такой как
:\"или \' внутри одинарных кавычек.
 */

alert(1)
var num = 42 //число без десятичных знаков
var price = 55.55 // чмсло с десятичными знаками
document.write(price);
var name = 'Nikita'
var text = "my name is Nikita Kulkov";
var text = "My name is 'Nikita' ";