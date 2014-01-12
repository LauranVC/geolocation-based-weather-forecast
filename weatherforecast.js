/**
 * Created by Lauran on 9/01/14.
 */

function getWeather(){

    parseXmlToDomObject();
    displayWeather();
}

function parseXmlToDomObject(){

    //link naar weerAPI, met de coordinaten reeds ingegeven(cnt=2 wilt zeggen, voor vandaag en morgen weerbericht)
    var link = "http://api.openweathermap.org/data/2.5/forecast/daily?lat="+ localStorage.latitude + "&lon="+ localStorage.longitude +"&mode=xml&units=metric&cnt=10";


    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",link,false);
    xmlhttp.send();
    hetweer=xmlhttp.responseXML;

}


var day = new Array();
var pressure = new Array();
var humidity = new Array();
var temperature = new Array();
var imagecode = new Array();
function displayWeather(){



    for (i=0;i<9;i++)
    {
        day[i] = hetweer.getElementsByTagName("time")[i].getAttribute("day");
        pressure[i]= hetweer.getElementsByTagName("pressure")[i].getAttribute("value");
        humidity[i]= hetweer.getElementsByTagName("humidity")[i].getAttribute("value");
        temperature[i]= hetweer.getElementsByTagName("temperature")[i].getAttribute("day");
        imagecode[i]= "http://openweathermap.org/img/w/" + hetweer.getElementsByTagName("symbol")[i].getAttribute("var") + ".png";
    }

    txt=   "Temperature = "+ temperature[0] + " C<br/>" + "Humidity = " + humidity[0] +  "%<br/>" + "Pressure = " + pressure[0] + "HPa<br/>";
    document.getElementById("imgvandaag").src= imagecode[0];
    txt2= "Temperature = "+ temperature[1]  + " C<br/>" + "Humidity = " + humidity[1] +  "%<br/>" +  "Pressure = " + pressure[1] + "HPa<br/>";
    document.getElementById("imgmorgen").src= imagecode[1];


    document.getElementById("contentvandaag").innerHTML=txt;
    document.getElementById("contentmorgen").innerHTML=txt2;


}

var teller = 2;
function showNextDay(){

    txt=   "Temperature = "+ temperature[teller] + " C<br/>" + "Humidity = " + humidity[teller] +  "%<br/>" + "Pressure = " + pressure[teller] + "HPa<br/>";



    var currentweatherinfo = document.getElementById("weatherinfo").innerHTML;

    var addweathernode = '<div class="panel-heading">';
    addweathernode += ' <h3 class="panel-title">' + day[teller] + '</h3> ';
    addweathernode += ' </div> ';
    addweathernode += '     <div id="vandaag" class="panel-body">';

    addweathernode += '     <table>';
    addweathernode += '         <tr>';
    addweathernode += '             <td> <div id="content"> ' + txt + '</div></td>';
    addweathernode += '             <td><img id="imgvandaag" src="'+imagecode[teller]+'" alt="weatherimage" class="img-responsive" width="70" height="70" ></td>';
    addweathernode += '             </tr>';
    addweathernode += '         </table>';

    addweathernode += '     </div>';

    document.getElementById("weatherinfo").innerHTML=currentweatherinfo + "<br/>" + addweathernode;

    teller++;
    if(teller == 9){
        alert("Dit waren de laatste gegevens!");
        document.getElementById("nextday").disabled = true;
    }
    document.getElementById("nextday").focus();
}




