Module 1 summary
var robot;
Ќапишите классы описывающие битву роботов
function Battleground() {
}
function Robot(name) {
}
function Weapon(name) {
}
BattleGround:
Ќа поле могут присутствовать несколько роботов, размер передаетс€ в конструктор
—войства:
round
robots
” пол€ есть методы:
addRobot() - добавл€ет робота к битве
startBattle() - стартует сражение
size() - возвращает количество добавленных роботов
ќсобенности битвы:
Ѕитва заканчиваетс€ когда осталс€ только один робот.
Ѕитва может начатьс€ только когда на поле больше 1 робота
Ѕитву начинает первый робот по€вившийс€ на поле и дальше ходы делаютс€ поочередно
Ќа каждом шаге в консоль вывод€тс€ ходы роботов:
¬ конце в консоле должен быть выведен победитель
ѕогибших роботов можно перемещать в какой-то внутренний массив
ѕример вывода
Round 1
Robot1 attack with 10 power area damage
Robot2 receives 10 points damage
Robot3 receives 10 points damage
Robot3 out of game
Round 2
Robot2 attack with 50 power single damage
Robot1 receives 50 points damage
Robot1 out of game
Robot2 wins!!!
Robot
—войства робота:
name
weapon
alive
health (20-50)
ћетоды робота:
attack - осуществление атаки с помощью оружи€
receiveDamage(points)
¬о врем€ атаки другим роботам начисл€етс€ урон от оружи€ в количестве points  огда здоровье становитс€ 0 - робот погибает и флаг alive выставл€етс€ в false ѕри создании робота, он случайным образом получает количество здоровь€ от 20 до 50 и одно оружие
Weapon
—войства
type
power (5 - 20)
name
function Weapon(type, power) {
}
¬озможные типы:
area - урон по области, наноситс€ всем роботам
single - наносит урон случайно выбранному роботу
—оздать функцию запускающую битву
function makeBattle(robotCount) {
}
‘ункци€ должна создать битву с заданным количеством роботов и запустить еЄ