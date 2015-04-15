beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
  });

describe("an ajax call", function() {
  it("sends a post request upon temp change", function() {
    spyOn($, 'ajax');
    $("#up").click();
    expect($.ajax).toHaveBeenCalled();
  });
});