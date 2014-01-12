/**
 * Created by Lauran on 8/01/14.
 */


function getLocation()
{
      if (navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
      else{
        alert("Geolocation is not available on your browser!!!");
      }
}

function showPosition(position)
{
    localStorage.latitude=position.coords.latitude;
    localStorage.longitude=position.coords.longitude;



    var latlon=localStorage.latitude+","+localStorage.longitude;

    var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
        +latlon+"&zoom=14&size=400x300&sensor=false";

    //document.getElementById("mapholder").innerHTML="<img src='"+img_url+"' class='img-responsive' >";

    getWeather();
}
