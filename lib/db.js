var Type = require('./type.js');

function Database(path, opt, cb) {
	if(typeof opt == 'function') { cb = opt; opt = {}; }
	opt = opt || {};
	this.level = require('level')(path, cb || function() {});
	
	this.flds = opt.flds || '\0';
	this.hdrs = opt.hdrs || ':';
	this.dpre = opt.dpre || 'd';
	this.ipre = opt.ipre || 'i';
	this.mpre = opt.mpre || 'm';
}

Database.prototype.key = require("./key.js");
Database.prototype.defineLink = require("./defineLink.js");
Database.prototype.defineType = function(name, opt) { return new Type(this, name, opt); };
module.exports = Database;
