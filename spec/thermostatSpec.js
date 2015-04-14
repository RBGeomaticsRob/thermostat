describe("Thermostat", function(){
  it("starts at 20 degrees", function(){
    var thermostat = new Thermostat();
    expect(thermostat.temp()).toBe(20);
  });

  it("can be increased by 1 degree", function() {
    var thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.temp()).toBe(21);
  });

});