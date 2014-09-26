var formController = function(view) {
  this.view = view
}

formController.prototype = {
  listen: function() {
    submit = document.querySelector('#submit')
    submit.addEventListener("click", this.init.bind(this), false)
  },

  init: function(event) {
    event.preventDefault()
    var paramInst = new paramsString(this.view)
    var incomeInst = new income(this.view, paramInst)
    
    var params = paramInst.separateParams()
    paramInst.convertParamsToJSON(params)
    incomeInst.getBreezeIncome(paramInst)
    incomeInst.getOwnCarIncome(paramInst)
    incomeInst.showFigures()
  }
}