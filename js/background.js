var particles = Particles.init({
	selector: '.background',
	color: '#333333',
	connectParticles: true,
	maxParticles: 50,

	responsive: [
    	{
	      	breakpoint: 768,
	      	options: {
	        	maxParticles: 200,
	        	color: '#333333',
	        	connectParticles: false
	      	}
    	}, {
      		breakpoint: 425,
		      options: {
		        maxParticles: 100,
		        connectParticles: false
		      }
	    }, {
      		breakpoint: 320,
	    	options: {
	    		maxParticles: 0
	 			// disables particles.js
			}
    	}
  	]
});