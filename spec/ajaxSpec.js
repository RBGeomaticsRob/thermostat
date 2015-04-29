beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
  });

describe("an ajax call", function() {
  // it("sends a post request with temperature upon pressing up", function() {
  //   spyOn($, 'ajax');
  //   $("#up").click();
  //   expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("temperature_change");
  //    expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(thermostat.temp);
  // });
  // it("sends a post request with temperature upon pressing down", function() {
  //   spyOn($, 'ajax');
  //   $("#down").click();
  //   expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("temperature_change");
  //    expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(thermostat.temp);
  // });
  // it("sends a post request with temperature upon pressing reset", function() {
  //   spyOn($, 'ajax');
  //   $("#reset").click();
  //   expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("temperature_change");
  //    expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(thermostat.temp);
  // });
  // it("sends a post request with temperature upon pressing reset if temp is above 25", function() {
  //   spyOn($, 'ajax');
  //   $("#power_saving_mode").click();
  //   $("#up").click();
  //   $("#up").click();
  //   $("#up").click();
  //   $("#up").click();
  //   $("#up").click();
  //   $.ajax.calls.reset();
  //   $("#power_saving_mode").click();
  //   expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("temperature_change");
  //    expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(thermostat.temp);
  // });

  // it("does not send a post request when turning power saving on and below 25", function() {
  //   spyOn($, 'ajax');
  //   $("#power_saving_mode").click();
  //   $.ajax.calls.reset();
  //   $("#power_saving_mode").click();
  //   expect($.ajax).not.toHaveBeenCalled();
  // });










  it("can display current temp for London", function(){
    jasmine.Ajax.install();
    var weatherobject = {"main": {"temp": 12.09}}
    jasmine.Ajax.stubRequest('http://api.openweathermap.org/data/2.5/weather').andReturn({
      status: 200,
      data: weatherobject});
    $("#London").click({});
    expect("#weatherapidata").toContainHtml("12.09");
    jasmine.Ajax.uninstall();
  });
















  // it("can send a GET request for weather data", function(){

  //   var weatherobject = {"main" : {"temp" : 12.09}}

  //   spyOn($, 'ajax');
  //   $("#London").click();
  //   $.ajax.calls.mostRecent().args[0].success(weatherobject);
  //   expect("#weatherapidata").toContainHtml("12.09")
  // });











  it("can send a GET request for weather data", function(){

    var weatherobject = {"main" : {"temp" : 12.09}}

    spyOn($, 'ajax').and.callFake(function(fakeajax) {
      fakeajax.success(weatherobject)
    });
    $("#London").click();
    expect("#weatherapidata").toContainHtml("12.09")
  });

});