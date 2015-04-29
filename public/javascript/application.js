thermostat = new Thermostat();

var TestResponses = {
  search: {
    success: {
      status: 200,
      responseText: '{"main": {"temp": 12.09}}'
    }
  }
};



// Problem: To test that clicking on the "London" button displays
//          the current temp in London, by requesting data from a
//          third party api using an ajax call, but not having the
//          call be made during when testing.







function loaddata(data) {
$("#weatherapidata").text(data.main.temp);
};



$(document).ready(function(){

  $('#London').click(function(){
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      data: {
        q:"London",
        units:"metric",
        APPID:"d511992ca81fc06e08f2dfeff6e9bf93"
      },
      success: function(data){
        console.log(data)
        loaddata(data);
      }
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