// BATTLEGROUND
function Battleground() {
	this.round = 0;
	this.robots = [];
}
Battleground.prototype.addRobot = function(robot) {
	this.robots.push(robot);
	
}

Battleground.prototype.startBattle = function() { // to do


}
Battleground.prototype.size = function() {
	return this.robots.length;
}

// ROBOT
	function Robot(name) {
		this.name = name;
		this.alive = true;
		this.health = Math.floor(Math.random() * 31 + 20);
		this.weapon = makeWeapon();
	}

	Robot.prototype.attack = function() {  //to do


	}
	Robot.prototype.receiveDamage = function(points) {


	}

// WEAPON
	function Weapon(type, power) {
		this.type = type;
		this.power = power;
	}
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function makeWeapon() {
	  var type = Math.round(Math.random()) == 0 ? 'single' : 'area';
	      power = getRandom(5, 20);

	  return new Weapon(type, power);
	}

//makeBattle
function makeBattle(robotCount) {
	var bg = new Battleground();
	var newRobot;
	for (var i = 0; i < robotCount; i++) {
		newRobot = new Robot('Rob' + (i+1));
		bg.addRobot(newRobot);
	} //for
	for (var i = 0; i < bg.robots.length; i++) {
		console.log('Round ' + (i+1));
		console.log(bg.robots[i].name + ' is attack with ' + bg.robots[i].weapon.power + 
					' power ' + bg.robots[i].weapon.type + ' damage!');
		console.log(bg.robots[i].health + ' - ' + bg.robots[i].weapon.power);

	}

}

