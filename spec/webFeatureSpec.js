describe("thermostat.html", function() {
  it("displays the temperature", function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('thermostat.html');
    expect("#temperature").toContainHtml("20");
  });

  it("can increase the temperature by three and descrease by four", function() {
    $("#up").click();
    $("#up").click();
    $("#up").click();
    expect("#temperature").toContainHtml("23")
    $("#down").click();
    $("#down").click();
    $("#down").click();
    $("#down").click();
    expect("#temperature").toContainHtml("19")
  });

});