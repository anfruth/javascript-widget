var income = function(view, paramInst) {
	this.valuesJSON = paramInst.valuesJSON
	this.view = view

	this.breezeIncome = 0
  this.haveOwnCarIncome = 0
  this.gasPrice = 4
  this.breezeMPG = 60
  this.breezeMonthly = 600
}

income.prototype = {
	getBreezeIncome: function() {
		this.breezeIncome = Math.round(this.valuesJSON.income - 
			((this.valuesJSON.miles / this.breezeMPG) * this.gasPrice)
		 - this.valuesJSON.insurance - this.breezeMonthly);
	}, 

	getOwnCarIncome: function() {
		this.haveOwnCarIncome = Math.round(this.valuesJSON.income - 
			((this.valuesJSON.miles / this.valuesJSON.mpg) * this.gasPrice) - 
			this.valuesJSON.loan - this.valuesJSON.insurance - 
			this.valuesJSON.taxes - this.valuesJSON.maintenance);
	},

	showFigures: function() {
		if (!isNaN(this.breezeIncome) && !isNaN(this.haveOwnCarIncome) && this.valuesJSON.mpg > 0)
      this.view.getFinalResults().replaceWith(this.view.getSuccessText(this.breezeIncome, 
      	this.haveOwnCarIncome))
    else 
      this.view.getFinalResults().replaceWith(this.view.finalResultsFailText)
  }
}

//attempt to fix tab issue on github