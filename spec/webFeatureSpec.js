describe("thermostat.html", function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
  });

  it("displays the temperature", function() {
    expect("#temperature").toContainHtml("20");
  });

  it("can increase the temperature by three and descrease by four", function() {
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect("#temperature").toContainHtml("23");
    $("#down").click();
    $("#down").click();
    $("#down").click();
    $("#down").click();
    expect("#temperature").toContainHtml("19")
  });

  it("has a powersaving mode controlled by a tick box", function(){
    expect($('#power_saving_mode').is(':checked')).toBe(true);
    expect(thermostat.powerSaving).toBe(true);
    $("#power_saving_mode").click();
    expect(thermostat.powerSaving).toBe(false);
  });
});