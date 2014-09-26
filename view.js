var view = function() {
	this.finalResultsFailText = "<div class='error'><p>ERROR.  Please make sure to fill out all the fields with numbers.  MPG must be at least 1!</p></div>"
}

view.prototype = {
	getSuccessText: function(breeze, ownCar) {
		return "<div class='income'><p>Income With Breeze: " 
		+ breeze + "</p><p>Income With Your Own Car: " + ownCar + "</p></div>"
	},

	getFinalResults: function() {
		return $('.final-figures div')
	}
}