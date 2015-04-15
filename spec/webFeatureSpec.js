describe("thermostat.html", function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
  });

  it("displays the temperature", function() {
    expect("#temperature").toContainHtml("20");
    expect("#temperature").toContainHtml(thermostat.temp);
  });

  it("can increase the temperature by three and descrease by four", function() {
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect("#temperature").toContainHtml("23");
    expect("#temperature").toContainHtml(thermostat.temp);
    $("#down").click();
    $("#down").click();
    $("#down").click();
    $("#down").click();
    expect("#temperature").toContainHtml("19")
    expect("#temperature").toContainHtml(thermostat.temp);
  });

  it("has a powersaving mode controlled by a tick box", function(){
    expect($('#power_saving_mode').is(':checked')).toBe(true);
    expect(thermostat.powerSaving).toBe(true);
    $("#power_saving_mode").click();
    expect(thermostat.powerSaving).toBe(false);
  });

  it("it has a reset button which resets the thermostat to 20", function(){
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect("#temperature").toContainHtml("23");
    expect("#temperature").toContainHtml(thermostat.temp);
    $("#reset").click();
    expect("#temperature").toContainHtml("20");
    expect("#temperature").toContainHtml(thermostat.temp);
  });

  it("changes colour based on energy usage", function(){
    $('#temperature').text(Math.floor(Math.random()*(18 - 10 + 1))+10);
    expect($('#temperature').css("color")).toEqual("yellow");
    $('#temperature').text(Math.floor(Math.random()*(25 - 18 + 1))+18);
    expect('#temperature').toHaveCss({color: "green"});
    $('#temperature').text(Math.floor(Math.random()*(35 - 25 + 1))+25);
    expect('#temperature').toHaveCss({color: "red"});
  });

});