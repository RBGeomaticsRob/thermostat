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
    }).toThrow(Error("Too Damn Cold!"));
  });

  it('has a powersaving mode', function() {
    expect(themostat.powerSaving).toBe(true)
  });
});