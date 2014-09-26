var paramsString = function(view) {
	this.view = view
	this.valuesJSON = {}
}

paramsString.prototype = {
	separateParams: function() {
		var keyValueSep = []
    var params = $('form').serialize()
    debugger
    params = params.split("&") 
    for (var i = 0; i < params.length; i++) {
      keyValueSep.push(params[i].split("="))
    }
    return keyValueSep
	},

	convertParamsToJSON: function(params) {
		for(var i = 0; i < params.length; i++) {
      this.valuesJSON[params[i][0]] = parseInt(params[i][1], 10)
    }
	}
}