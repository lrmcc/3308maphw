$(document).ready(function() {    
    var apiKey = "c60c644f99963ca2f165fe5bb0a121e5" // Enter your API Key here        
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url

    
    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    Object.keys(state_info).forEach(function(key, index) {
    var state_obj = state_info[key]
    var state_init = `#${key}`;

    var state_obj_lat = state_obj.lat;
    var state_obj_lng = state_obj.lng;

    var url = `https://api.darksky.net/forecast/${apiKey}/${state_obj_lat},${state_obj_lng}`;

    //var url =`https://api.darksky.net/forecast/-apikey-/-latitude-,-longitude-`;

    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                
                console.log(data)
    
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                // var temperature = 
                var temperature =  data.currently.temperature;
                console.log(temperature)

                //TODO                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10 should be blue
                // Between 11 and 30 should be cyan
                // Between 31 and 50 should be green
                // Between 51 and 80 should be orange
                // Greater than 80 should be red
                //$('#' + states.id).css('fill', "blue");
            
                if (temperature <= 10 ) {
                     $(state_init).css('fill', "blue");
                }
                if (temperature > 10 && temperature <= 30 ) {
                    $(state_init).css('fill', "cyan");
                }
               if (temperature > 30 && temperature <= 50 ) {
                    $(state_init).css('fill', "green");
                }
                if (temperature > 50 && temperature <= 80) {
                    $(state_init).css('fill', "orange");
                 }
                 if (temperature > 80 ) {
                    $(state_init).css('fill', "red");
               }
              
                //$(`#${state_obj}`)
               // $('#CO').css('fill', "blue");   // Example on how to fill colors for your state.    
        });
    });
});
