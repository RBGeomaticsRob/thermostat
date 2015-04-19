#Thermostat#
Wk5 Makers Academy Project

The aim of the project is to build a thermostat control unit and be able to show comparison temperatures for locations.

##Setup##

To run through sinatra `gem install sinatra`

There is a config.ru file setup so it should be possible to then run `rackup` in the terminal and browse to localhost:9292/SpecRunner.html for the tests and localhost:9292/thermostat.html for the application.

##Testing##

The application  is being created in a TDD format. A brief outline of the spec files:
thermostatSpec.js - Unit tests for business logic
webFeatureSpec.js - Web Interface Testing
ajaxSpec.js - Spy and mock ajax calls to test.
