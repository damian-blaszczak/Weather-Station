$(document).ready(function() {
  var lat;
  var long;
  $.getJSON("http://ip-api.com/json", function(data2) {
    lat=data2.lat;
    long=data2.lon;
    
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=5e8d1158be4f4149f09d8e96edb529f1'; 
  
  $.getJSON(api, function (data) {
      var fTemp;
  var cTemp;
  var kTemp;
    var tempSwap = true;
  var weatherType= data.weather[0].description;
      kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
   var city = data.name;
    
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp - 273).toFixed(1);
    
    $('#city').html(city);
    $('#weatherType').html(weatherType);
    $("#fTemp").html('<i class="fa fa-thermometer-full"></i>' + ' ' + cTemp + ' &#8451');
    $('#fTemp').click(function() {
      if (tempSwap==false){
        $('#fTemp').html(fTemp + ' &#8457');
        tempSwap=true;
      }
      else {
        $('#fTemp').html(cTemp + ' &#8451');
        tempSwap=false;
      }
    });
    
    $("#windSpeed").html('<i class="fa fa-flag-o"></i>' + ' ' + windSpeed + " m/s");
    if(cTemp>30){
      $('body').css('background-image', 'url("http://2w6kxc22rrr9mabqt1mglgait6.wpengine.netdna-cdn.com/wp-content/uploads/2015/04/sunny-sky.jpg")');
    }
    else if (weatherType.includes('rain')){
      $('body').css('background-image', 'url(https://www.walldevil.com/wallpapers/a39/6046-raindrop-drop-water-glass-window-rain-cloud-sky.jpg)');
    }
    else if (weatherType.includes('thunderstorm')){
      $('body').css('background-image', 'url(http://static2.businessinsider.com/image/51080d5a69bedd920f00000d-1190-625/the-survival-story-of-the-only-known-person-to-parachute-through-a-thunderstorm.jpg)');
    }
    else if (weatherType.includes('snow')) {
      $('body').css('background-image', 'url(https://cdn.shutterstock.com/shutterstock/videos/775585/thumb/1.jpg?i10c=img.resize(height:160))')
    }
    else if(cTemp>20){
      $('body').css('background-image', 'url("http://freebigpictures.com/wp-content/uploads/2009/09/behind-clouds.jpg")');
    }
    else if (cTemp>10) {
      $('body').css('background-image', 'url("http://hires.photospublic.com/PP57132607-Sunshine-on-a-Blue-and-Cloudy-Sky.jpg")');
    }
    else if (cTemp>0) {
      $('body').css('background-image', 'url("http://img14.deviantart.net/ae1d/i/2007/307/d/c/autumn_sky_stock_31_by_tigg_stock.jpg")');
    }
    else if (cTemp<=0) {
      $('body').css('background-image', 'url("https://www.michaelfrye.com/wp-content/uploads//2015/12/0215-17358-585x403.jpg")');
    }
  });
  });

});