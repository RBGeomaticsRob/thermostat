var Thermostat = function() {
  this.temp = 20;
};

Thermostat.prototype.up = function() {
  this.temp++;
};

Thermostat.prototype.down = function() {
  this.temp--;
};