var Thermostat = function() {
  this.temp = 20;
  this.powerSaving = true;
};

Thermostat.prototype.up = function() {
  this.temp++;
};

Thermostat.prototype.down = function() {
  if(this.temp === 10) {
    throw new Error("Too Damn Cold!");
  };
  this.temp--;
};