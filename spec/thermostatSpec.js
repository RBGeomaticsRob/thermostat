describe("Thermostat", function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temp).toEqual(20);
  });

  it("can be increased by 1 degree", function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
    thermostat.up();
    expect(thermostat.temp).toEqual(22);
  });

  it("can be decreased by 1 degree", function(){
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
    thermostat.down();
    expect(thermostat.temp).toEqual(18);
  });

  it("cannot be set below 10 degrees", function() {
    thermostat.temp = 10
    expect(function(){
      thermostat.down()
    }).toThrowError("Too Damn Cold!");
  });

  it('is in power saving mode upon startup', function() {
    expect(thermostat.powerSaving).toBe(true)
  });

  it("cannot increase above 25 when power saving is on", function() {
    thermostat.temp = 25;
    expect(function() {
      thermostat.up();
    }).toThrowError("You're killing the planet!");
  });

  it("cannot over 32 when powersaving is off", function(){
    thermostat.powerSaving = false;
    thermostat.temp = 32;
    expect(function(){
      thermostat.up();
    }).toThrowError("Too Damn Hot!");
  });

  it("can turn power saving off", function() {
    thermostat.powerSavingOff();
    expect(thermostat.powerSaving).toBe(false);
  });

  it("should reduce temperature to 25 if above when powersaving is turned on", function() {
      thermostat.temp = Math.floor((Math.random()*10)+25);
      thermostat.powerSavingOn();
      expect(thermostat.powerSaving).toBe(true);
      expect(thermostat.temp).toEqual(25);
  });

  it("can be reset to 20 degrees", function() {
    thermostat.reset;
    expect(thermostat.temp()).toEqual(20);
  });

});