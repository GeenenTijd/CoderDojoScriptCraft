var functieNaam = function(mat) {

	if(typeof mat === 'undefined') {
		mat = 1;
	}
	
    this.chkpt('leegstart')
	
	.box()

	return this.move('leegstart');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('mijnFunctieNaam',functieNaam);
