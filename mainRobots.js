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
Battleground.prototype.randomRobot = function(currentRobot) {
  var robot;
  do {
    robot = getRandom(0, (this.robots.length - 1));
  } while(robot == currentRobot);
  
  return robot;
}


Battleground.prototype.awayDeadRobot = function(robot) { //deleting robots from array if destroyed
	if (robot.health <= 0) { 
					console.log('  CRASH!!! - ' + robot.name + ' is destroyed and out of the game');
					robot.alive = false;
					// delete bg.robots[i];
					return countAliveRobots--;
	}
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
	var round = 1;
	var newRobot;
	var healthRobot;
	var exitLoop = true; // condition of exit from the loop battle
	var countAliveRobots;
	
	for (var i = 0; i < robotCount; i++) { //create array with robots
		newRobot = new Robot('Rob_' + (i+1));
		bg.addRobot(newRobot);
	}
	countAliveRobots = bg.robots.length;

	while (exitLoop) {
		for (var i = 0; i < countAliveRobots; i++) { //begining the battle
			console.log('ROUND ' + (round));
			if (bg.robots[i].alive === true) {
				console.log(' ' + bg.robots[i].name + ' is attack with ' + bg.robots[i].weapon.power + 
							' power ' + bg.robots[i].weapon.type + ' damage!');
				var currentRobot = bg.robots[i].name;
			

				if (bg.robots[i].weapon.type === 'single') { //single damage
					var indexRobot = bg.randomRobot(i); //index number of random robot
					console.log('  health of ' + bg.robots[indexRobot].name + ' before damage ' + 
										'= ' + bg.robots[indexRobot].health);
					bg.robots[indexRobot].health = bg.robots[indexRobot].health -
								bg.robots[i].weapon.power;
					console.log('  health of ' + bg.robots[indexRobot].name + ' after damage ' +
									 '= ' + bg.robots[indexRobot].health);

					if (bg.robots[i].health <= 0) { 
							console.log('  CRASH!!! - ' + bg.robots[i].name + ' is destroyed and out of the game');
							bg.robots[i].alive = false;
							countAliveRobots--;
					}
					if (countAliveRobots === 1) {
						console.log(bg.robots[i].name + ' WINS!!!!')
						exitLoop = false;
					}


				} else { //area damage
					for (var j = 0; j < countAliveRobots; j++) {
						if (currentRobot !== bg.robots[j].name && bg.robots[j].alive === true) {
							console.log(' ' + bg.robots[j].name + ' receives ' + bg.robots[i].weapon.power + 
										' points damage');
							console.log('  health of ' + bg.robots[j].name + ' before damage ' + 
											'= ' + bg.robots[j].health);
						 	// healthRobot = bg.robots[j].health - bg.robots[i].weapon.power;
						 	bg.robots[j].health = bg.robots[j].health - bg.robots[i].weapon.power;
							console.log('  health of ' + bg.robots[j].name + ' after damage ' +
										 '= ' + bg.robots[j].health);
						}
						

						if (bg.robots[j].health <= 0) { //deleting robots from array if destroyed
							console.log('  CRASH!!! - ' + bg.robots[j].name + ' is destroyed and out of the game');
							bg.robots[j].alive = false;
							countAliveRobots--;
						}
						if (countAliveRobots === 1) {
							console.log(bg.robots[i].name + ' WINS!!!!')
							exitLoop = false;
						}

					}
				}
				round++;
			} //if robot alive
		} // for
		
	} // while	
	
} //function battle

