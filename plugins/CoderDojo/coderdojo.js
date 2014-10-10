
var coderdojo = function(mat) {

	if(typeof mat === 'undefined') {
		mat = 41;
	}
	
    this.chkpt('logostart')
	
	// Beweeg vooruit
	.fwd(15).left(15)
	
	.chkpt('letterstart') // Start C
	.box(mat,4,7,1)
	.up()
	.right()
	.box(0,3,5,1)
	.move('letterstart') // Terug naar Start C
	.right(5)
	.chkpt('letterstart') // Start O
	.box(mat,4,7,1)
	.up()
	.right()
	.box(0,2,5,1)
	.move('letterstart') // Terug naar Start O
	.right(5)
	.chkpt('letterstart') // Start D
	.box(mat,3,7,1)
	.up()
	.right()
	.box(0,2,5,1)
	.right(2)
	.box(mat)
	.right()
	.up()
	.box(mat,1,3,1)
	.left()
	.up(3)
	.box(mat)
	.move('letterstart') // Terug naar Start D
	.right(6)
	.chkpt('letterstart') // Start E
	.box(mat,4,7,1)
	.up()
	.right()
	.box(0,3,2,1)
	.up(3)
	.box(0,3,2,1)
	.move('letterstart') // Terug naar Start E
	.right(5)
	.chkpt('letterstart') // Start R
	.box(mat,1,6,1)
	.up(3)
	.box(mat,4,4,1)
	.up()
	.right()
	.box(0,2,2,1)
	.down(2)
	.box(mat)
	.right()
	.down()
	.box(mat)
	.right()
	.down()
	.box(mat)
	.move('letterstart') // Terug naar Start R
	.right(5)
	.chkpt('letterstart') // Start D
	.box(mat,3,7,1)
	.up()
	.right()
	.box(0,2,5,1)
	.right(2)
	.box(mat)
	.right()
	.up()
	.box(mat,1,3,1)
	.left()
	.up(3)
	.box(mat)
	.move('letterstart') // Terug naar Start D
	.right(6)
	.chkpt('letterstart') // Start O
	.box(mat,4,7,1)
	.up()
	.right()
	.box(0,2,5,1)
	.move('letterstart') // Terug naar Start O
	.right(5)
	.chkpt('letterstart') // Start J
	.box(mat,1,2,1)
	.box(mat,4,1,1)
	.right(3)
	.box(mat,1,7,1)
	.move('letterstart') // Terug naar Start J
	.right(5)
	.chkpt('letterstart') // Start O
	.box(mat,4,7,1)
	.up()
	.right()
	.box(0,2,5,1)

	return this.move('logostart');
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('coderdojo',coderdojo);
