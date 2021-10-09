//Задания 1-9

let a = +prompt(`Введи число`);

a === 0 ? alert(`Верно`) : alert(`Неверно`);
a > 0 ? alert(`Верно`) : alert(`Неверно`);
a < 0 ? alert(`Верно`) : alert(`Неверно`);
a >= 0 ? alert(`Верно`) : alert(`Неверно`);
a <= 0 ? alert(`Верно`) : alert(`Неверно`);
a !== 0 ? alert(`Верно`) : alert(`Неверно`);
a === "test" ? alert(`Верно`) : alert(`Неверно`);
a === 1 ? alert(`Верно`) : alert(`Неверно`);
a > 0 && a < 5 ? alert(`Верно`) : alert(`Неверно`);

//Задания 10 - 12   

let b = +prompt(`Введи второй операнд`);
            
a === 0 || a === 2 ? alert(a + 7) : alert(a / 10);
a <= 1 && b >= 3 ? alert( a + b ) : alert ( a - b );
a > 2 && a < 11 || b >= 6 && b < 14 ? alert(`Верно`) : alert(`Неверно`);

//Задание 13

let num  =+prompt(`Введи значение от 1 до 4`);

switch (num) {
    case 1:
        num = "Зима";
        break;
    case 2:
        num = "Весна";
        break;
    case 3:
        num = "Лето";
        break;
    case 4:
        num = "Осень";
        break;   
}
alert(num);