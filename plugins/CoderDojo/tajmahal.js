var tajgate = function(mat) {

	if(typeof mat === 'undefined') {
		mat = 41;
	}
	
    this.chkpt('gatestart');

	this.back()
		.box(mat,17,16,9)
		.right(3)
		.box(0,11,8,5)
		.up(8).right()
		.box(0,9,1,5)
		.up().right()
		.box(0,7,1,5)
		.up().right()
		.box(0,5,1,5)
		.up().right()
		.box(0,3,1,5)
		.up().right()
		.box(0,1,1,5)
		.move('gatestart')
		.up(16)
		.box(mat,17,2,1)
		.box(mat,1,5,1)
		.right(16)
		.box(mat,1,5,1)
	
	return this.move('gatestart');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('tajgate',tajgate);

var tajcorner = function(mat) {

	if(typeof mat === 'undefined') {
		mat = 41;
	}
	
    this.chkpt('cornerstart');

	this.right()
		.box(mat,8,16,8)
		.right(5)
		.box(0,3,16,1)
		.right()
		.fwd()
		.box(0,2,16,1)
		.right()
		.fwd()
		.box(0,1,16,1)
		.move('cornerstart')
		.right(2)
		.up(2)
		.box(0,3,4,2)
		.up(4).right()
		.box(0,1,1,2)
		.up(3).left()
		.box(0,3,4,2)
		.up(4).right()
		.box(0,1,1,2)
		.move('cornerstart')
		.right(7)
		.up(2)
		.fwd(4)
		.box(0,2,4,3)
		.up(4).fwd()
		.box(0,2,1,1)
		.up(3).back()
		.box(0,2,4,3)
		.up(4).fwd()
		.box(0,2,1,1)
	
	return this.move('cornerstart');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('tajcorner',tajcorner);

var tajdome = function(mat) {

	if(typeof mat === 'undefined') {
		mat = 41;
	}
	
    this.chkpt('tajdomestart');
	
	this.cylinder( mat, 8, 5 )
		.up(5).left().back()
		.cylinder( mat, 9, 2 )
		.up(2).left().back()
		.cylinder( mat, 10, 4 )
		.up(4).right().fwd()
		.cylinder( mat, 9, 2 )
		.up(2).right().fwd()
		.cylinder( mat, 8, 2 )
		.up(2).right().fwd()
		.cylinder( mat, 7, 1 )
		.up(1).right().fwd()
		.cylinder( mat, 6, 1 )
		.up(1).right().fwd()
		.cylinder( mat, 5, 1 )
		.up(1).right().fwd()
		.cylinder( mat, 4, 1 )
		.up(1).right().fwd()
		.cylinder( mat, 3, 1 )
		.up(1).right().fwd()
		.cylinder( mat, 2, 1 )
		.up(1).right(2).fwd(2)
		.box(mat,1,5,1)
	
	return this.move('tajdomestart');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('tajdome',tajdome);

var tajminaret = function(mat) {
	
	if(typeof mat === 'undefined') {
		mat = 41;
	}
	
	var i = 0;
    this.chkpt('minaretstart')

	for(var i = 0; i < 3; ++i) {
		this.box(mat,6,1,4)
		.back().right()
		.box(mat,4,1,1)
		.fwd(5)
		.box(mat,4,1,1)
		.back(3).left(2)
		.box(mat,1,1,2)
		.right(7)
		.box(mat,1,1,2)
		.left(6)
		.back().up()
	}
	
	this.right().fwd()
	
	for(i = 0; i < 6; ++i) {
		this.box(mat,4,1,2)
		.back().right()
		.box(mat,2,1,1)
		.fwd(3)
		.box(mat,2,1,1)
		.back(2).left(1).up()
	}
	
	this.left()
		.back()
		.box(mat,6,1,4)
		.back().right()
		.box(mat,4,1,1)
		.fwd(5)
		.box(mat,4,1,1)
		.back(3).left(2)
		.box(mat,1,1,2)
		.right(7)
		.box(mat,1,1,2)
		.left(5)
		.up()
	
	for(i = 0; i < 6; ++i) {
		this.box(mat,4,1,2)
		.back().right()
		.box(mat,2,1,1)
		.fwd(3)
		.box(mat,2,1,1)
		.back(2).left(1).up()
	}
	
	this.left()
		.back()
		.box(mat,6,1,4)
		.back().right()
		.box(mat,4,1,1)
		.fwd(5)
		.box(mat,4,1,1)
		.back(3).left(2)
		.box(mat,1,1,2)
		.right(7)
		.box(mat,1,1,2)
		.left(5)
		.up()
		
	for(i = 0; i < 6; ++i) {
		this.box(mat,4,1,2)
		.back().right()
		.box(mat,2,1,1)
		.fwd(3)
		.box(mat,2,1,1)
		.back(2).left(1).up()
	}
	
	this.left()
		.back()
		.box(mat,6,1,4)
		.back().right()
		.box(mat,4,1,1)
		.fwd(5)
		.box(mat,4,1,1)
		.back(3).left(2)
		.box(mat,1,1,2)
		.right(7)
		.box(mat,1,1,2)
		.left(5)
		.up()
	
	for(i = 0; i < 3; ++i) {
		this.box(mat,4,1,2)
		.back().right()
		.box(mat,2,1,1)
		.fwd(3)
		.box(mat,2,1,1)
		.back(2).left(1).up()
	}
	
	this.right()
		.box(mat,2,3,2)
	
	return this.move('minaretstart');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('tajminaret',tajminaret);

var tajmahal = function(mat) {
	
	if(typeof mat === 'undefined') {
		mat = 41;
	}
	
    this.chkpt('halstart');
	
	this.fwd(48)
		.box(mat,17,16,17)
	
	for(var i = 0; i < 4; ++i)
	{
		this.turn()
		.back(8)
		.tajcorner(mat)
		.left(16)
		.tajgate(mat)
		.fwd(8)
	}
	
	this.up(16)
		.tajdome(mat)
		.move('halstart')
		.fwd(17)
		.left(32)
		
	for(var i = 0; i < 4; ++i)
	{
		this.tajminaret(mat)
		.turn()
		.left(80)
	}		
	
	return this.move('halstart');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('tajmahal',tajmahal);