describe("Thermostat", function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temp).toBe(20);
  });

  it("can be increased by 1 degree", function() {
    thermostat.up();
    expect(thermostat.temp).toBe(21);
    thermostat.up();
    expect(thermostat.temp).toBe(22);
  });

  it("can be decreased by 1 degree", function(){
    thermostat.down();
    expect(thermostat.temp).toBe(19);
    thermostat.down();
    expect(thermostat.temp).toBe(18);
  });

  it("cannot be set below 10 degrees", function() {
    thermostat.temp = 10
    expect(function(){
      thermostat.down()
    }).toThrowError("Too Damn Cold!")
  });
});