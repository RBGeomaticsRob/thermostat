var Thermostat = function() {
  this.temp = 20;
  this.powerSaving = true;
};

Thermostat.prototype.up = function() {
  if(this.powerSaving === true && this.temp === 25) {
    throw new Error("You're killing the planet!");
  };
  if (this.temp === 32) {
    throw new Error("Too Damn Hot!")
  };
  this.temp++;
};

Thermostat.prototype.down = function() {
  if(this.temp === 10) {
    throw new Error("Too Damn Cold!");
  };
  this.temp--;
};

Thermostat.prototype.powerSavingOff = function() {
    this.powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  if (this.temp > 25) {
    this.temp = 25;
  };
  this.powerSaving = true;
};