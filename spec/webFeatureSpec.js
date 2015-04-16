describe("thermostat.html", function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
    jasmine.Ajax.install();
    spyOn($, 'ajax');
  });

  afterEach(function(){
    jasmine.Ajax.uninstall();
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

  it("can reset to 25 if power saving mode turned on and above 25", function() {
    $("#power_saving_mode").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect("#temperature").toContainHtml("26");
    $("#power_saving_mode").click();
    expect("#temperature").toContainHtml("25");
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
    expect($('#temperature').css("color")).toEqual('rgb(0, 128, 0)');
    $("#power_saving_mode").click();
    $("#down").click();
    $("#down").click();
    expect($('#temperature').css("color")).toEqual('rgb(0, 128, 0)');
    $("#down").click();
    expect($('#temperature').css("color")).toEqual('rgb(255, 255, 0)');
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect($('#temperature').css("color")).toEqual('rgb(0, 128, 0)');
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect($('#temperature').css("color")).toEqual('rgb(0, 128, 0)');
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect($('#temperature').css("color")).toEqual('rgb(255, 0, 0)');
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect($('#temperature').css("color")).toEqual('rgb(255, 0, 0)');
  });
});