describe("an ajax call", function() {

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
  });

      var configuration = {
        url : "Car",
        remainingCallTime : 30000
    };

  it("sends a post request upon temp change", function() {

    jasmine.Ajax.install();
      spyOn($, 'ajax');
      $("#up").click();
      // console.log($.ajax.calls.mostRecent())
      expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual("temperature_change");
    jasmine.Ajax.uninstall();



    // jasmine.Ajax.install();
    // var spyEvent = jasmine.createSpy("success")
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function(args) {
    //   if (this.readyState == this.DONE) {
    //     spyEvent(this.responseText);
    //   }
    // };

    // xhr.open("POST","/temperature_change");
    // xhr.send();

    // expect(jasmine.Ajax.requests.mostRecent().url).toBe('/temperature_change');
    // expect(spyEvent).not.toHaveBeenCalled();

    // jasmine.Ajax.stubRequest('/temperature_change').andReturn({
    //   "responseText": 'some response text'
    // })

    // xhr.open("POST","/temperature_change");
    // xhr.send();

    // expect(spyEvent).toHaveBeenCalledWith('some response text');
    // jasmine.Ajax.uninstall();

  });


});