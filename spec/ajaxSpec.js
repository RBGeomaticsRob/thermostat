beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
  });

describe("an ajax call", function() {
  it("sends a post request with temperature upon pressing up", function() {
    spyOn($, 'ajax');
    $("#up").click();
    expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("temperature_change");
     expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(thermostat.temp);
  });
  it("sends a post request with temperature upon pressing down", function() {
    spyOn($, 'ajax');
    $("#down").click();
    expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("temperature_change");
     expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(thermostat.temp);
  });
  it("sends a post request with temperature upon pressing reset", function() {
    spyOn($, 'ajax');
    $("#reset").click();
    expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("temperature_change");
     expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(thermostat.temp);
  });
  it("sends a post request with temperature upon pressing reset if temp is above 25", function() {
    spyOn($, 'ajax');
    $("#power_saving_mode").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $("#up").click();
    $.ajax.calls.reset();
    $("#power_saving_mode").click();
    expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("temperature_change");
     expect($.ajax.calls.mostRecent().args[0]['data']).toEqual(thermostat.temp);
  });

  it("does not send a post request when turning power saving on and below 25", function() {
    spyOn($, 'ajax');
    $("#power_saving_mode").click();
    $.ajax.calls.reset();
    $("#power_saving_mode").click();
    expect($.ajax).not.toHaveBeenCalled();
  });

  it("can send a GET request for weather data", function(){
    jasmine.Ajax.install();
    jasmine.Ajax.stubRequest("http://api.openweathermap.org/data/2.5/weather").andReturn({
      "responseText": {"message":"accurate","cod":"200","count":2,"list":[{"id":2643743,"name":"London","coord":{"lon":-0.12574,"lat":51.50853},"main":{"temp":12.12,"temp_min":12.12,"temp_max":12.12,"pressure":1020.52,"sea_level":1028.1,"grnd_level":1020.52,"humidity":48},"dt":1429202261,"wind":{"speed":4.11,"deg":88.5015},"sys":{"country":"GB"},"clouds":{"all":92},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},{"id":6058560,"name":"London","coord":{"lon":-81.23304,"lat":42.983391},"main":{"temp":13.87,"temp_min":13.87,"temp_max":13.87,"pressure":999.28,"sea_level":1037.06,"grnd_level":999.28,"humidity":54},"dt":1429202395,"wind":{"speed":6.86,"deg":182.002},"sys":{"country":"CA"},"clouds":{"all":88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]}]}
    })
    $("#London").click();
    // expect($.ajax.calls.mostRecent().args[0]['url']).toEqual("http://api.openweathermap.org/data/2.5/weather");
    // expect($.ajax.calls.mostRecent().args[0]['data']['APPID']).toEqual("d511992ca81fc06e08f2dfeff6e9bf93");
    // expect($.ajax.calls.mostRecent().args[0]['data']['q']).toEqual("London");
    console.log($("#weatherapidata"));
    expect($("#weatherapidata").text()).toHaveText("15.61");
    jasmine.Ajax.uninstall();
  });
});