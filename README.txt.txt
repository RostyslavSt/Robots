Module 1 summary
var robot;
�������� ������ ����������� ����� �������
function Battleground() {
}
function Robot(name) {
}
function Weapon(name) {
}
BattleGround:
�� ���� ����� �������������� ��������� �������, ������ ���������� � �����������
��������:
round
robots
� ���� ���� ������:
addRobot() - ��������� ������ � �����
startBattle() - �������� ��������
size() - ���������� ���������� ����������� �������
����������� �����:
����� ������������� ����� ������� ������ ���� �����.
����� ����� �������� ������ ����� �� ���� ������ 1 ������
����� �������� ������ ����� ����������� �� ���� � ������ ���� �������� ����������
�� ������ ���� � ������� ��������� ���� �������:
� ����� � ������� ������ ���� ������� ����������
�������� ������� ����� ���������� � �����-�� ���������� ������
������ ������
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
�������� ������:
name
weapon
alive
health (20-50)
������ ������:
attack - ������������� ����� � ������� ������
receiveDamage(points)
�� ����� ����� ������ ������� ����������� ���� �� ������ � ���������� points ����� �������� ���������� 0 - ����� �������� � ���� alive ������������ � false ��� �������� ������, �� ��������� ������� �������� ���������� �������� �� 20 �� 50 � ���� ������
Weapon
��������
type
power (5 - 20)
name
function Weapon(type, power) {
}
��������� ����:
area - ���� �� �������, ��������� ���� �������
single - ������� ���� �������� ���������� ������
������� ������� ����������� �����
function makeBattle(robotCount) {
}
������� ������ ������� ����� � �������� ����������� ������� � ��������� �