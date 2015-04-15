describe("an ajax call", function() {
  it("sends a post request upon temp change", function() {
    jasmine.Ajax.install();
    $("#up").click();
    expect(jasmine.Ajax.requests.mostRecent().url).toBe('/temperature_change');
    jasmine.Ajax.uninstall();
  });
});