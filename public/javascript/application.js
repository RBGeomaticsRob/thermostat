thermostat = new Thermostat();

$(document).ready(function(){

        $('#London').click(function(){
          var weatherAjax = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {
              q:"London",
              units:"metric",
              APPID:"d511992ca81fc06e08f2dfeff6e9bf93"
            }
            // success: function(data){
            //   $('#weatherapidata').text(data.main.temp)
            // }
          });
          weatherAjax.done(function(data){
            $('#weatherapidata').text(data.main.temp)
          });
        });

        $('#temperature').text(thermostat.temp);

        $('#up').click(function(){
          thermostat.up();
          changeTemp();
        });

        $('#down').click(function(){
          thermostat.down();
          changeTemp();
        });

        $('#power_saving_mode').change(function() {
          if($('#power_saving_mode').is(":checked") && $('#temperature').text() > 23) {
            thermostat.powerSavingOn();
             changeTemp();
            } else if ($('#power_saving_mode').is(":checked") && $('#temperature').text() < 24 ) {
              thermostat.powerSavingOn();
            } else {
            thermostat.powerSavingOff();
          };
        });

        $('#reset').click(function(){
          thermostat.reset();
          changeTemp();
        });

        var changeColor = function() {
          if ($('#temperature').text() < 18) {
            $('#temperature').css('color', 'yellow');
          } else if ($('#temperature').text() > 25 ) {
            $('#temperature').css('color', 'red');
          } else {
            $('#temperature').css('color', 'green');
          };
        };

        var changeTemp = function() {
          $('#temperature').text(thermostat.temp);
          changeColor();
          $.ajax({url: "temperature_change", method: "POST", data: thermostat.temp
          });
        };

        changeColor();

      });