describe("thermostat.html", function() {
  it("displays the temperature", function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
    expect("#temperature").toContain("20");
  });
});