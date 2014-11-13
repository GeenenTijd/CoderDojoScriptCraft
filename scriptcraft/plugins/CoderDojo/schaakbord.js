var schaakbord = function() {

    this.chkpt('schaakbord');
	
	for(var j = 0; j < 8; ++j)
	{
		for(var i = 0; i < 4; ++i) 
		{
			// Controleer of j deelbaar is door 2
			if(j % 2 == 0) {
				this.box(49).right().box(42).right();
			}
			else {
				this.box(42).right().box(49).right();
			}
		}
		this.fwd().left(8);
	}
	
	return this.move('schaakbord');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('schaakbord',schaakbord);