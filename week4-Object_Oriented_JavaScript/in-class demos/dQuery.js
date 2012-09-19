var dQuery = function(id) {
	if (!(this instanceof dQuery)) {
		return new dQuery;
	}

	this.el = document.getElementById(id);
};

dQuery.prototype = {
	constructor: dQuery,
	html: function(html) {
		if (html) { // set the inner html
			this.el.innerHTML = html;
			return this;
		} else {
			return this.el.innerHTML;
		}
	},
	css: function(prop, value) {
		// if we did style.prop, it would literally look for prop
		this.el.style[prop] = value;
		return this; // allows us to chain methods because returns the object
	}
};