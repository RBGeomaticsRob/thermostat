thermostat = new Thermostat();

$(document).ready(function(){

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