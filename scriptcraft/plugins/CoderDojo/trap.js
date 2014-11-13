var trap = function(mat,breedte,diepte) {

	if(typeof mat === 'undefined')
	{
		mat = 1;
	}
	if(typeof breedte === 'undefined')
	{
		breedte = 1;
	}
	if(typeof diepte === 'undefined')
	{
		diepte = 5;
	}

    this.chkpt('trap');
	
	for(var i = diepte; i > 0; --i)
	{
		this.box(mat,breedte,1,i).fwd().up()
	}
	
	return this.move('trap');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('trap',trap);