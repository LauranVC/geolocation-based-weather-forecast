geolocation-based-weather-forecast
==================================


Het project bevat 4 files die ik zelf gemaakt heb.
Verder is er een map dist, dit bevat de files van het framework bootstrap, waarmee ik de app mobile heb gemaakt. Hier heb ik zelf niets in gewijzigd, dus is dit ook niet nodig om dit te bekijken.




index.html
----------

Index.html bevat alle html van de pagina. Er zijn een paar links naar javascript files van bootstrap, alsook de css files van bootstrap.
Vanaf de div container start het weerbericht. Elk weerbericht, per dag, word getoond in een duidelijk panel, met als hoofding de dag.
De temperatuur van die dag word getoont, alsook de luchtvochtigheid en de luchtdruk. Daarbij word een afbeelding getoont van de neerslag van die dag. De afbeelding kan natuurlijk ook een zon zijn.
Er staat vervolgens nog een knop die toelaat om een extra dag weerbericht toe te voegen. Het programma laat toe om vanaf de huidige dag 10 dagen extra op te vragen.



start.js
--------
de start.js is enkel om de javascript te starten als de pagina geladen is.


geolocation.js
--------------
Geolocation.js bevat 2 functies, de ene functie dient om de locatie op te vragen, een volgende was om optioneel een kaart te tonen van de positie.

getLocation laat de browser naar de currentpositie zoeken. Die stuurt dit door naar de functie showPosition. Als de browser de positie niet kan vinden, of er doet zich er een error voor, dan word er een melding gegeven van dit.

showPosition slaat de positie op in de localstorage. Er was nog een mogelijkheid om eem map te tonen met de locatie, maar dit is weggelaten om plaats te besparen in de mobile environment.

Daarna word de functie getWeather aangeroepen van weatherforecast.js



weatherforecast.js
------------------
Weatherforecast.js bevat 4 functies.

getWeather roept 2 andere functies aan, dus dient enkel als doorgeefluik.

parseXmlToDomObject zorgt ervoor dat de xml die word afgehaald, geparsed word naar een DOM object zodat het nadien makkelijker te gebruiken is.
Eerst word er een variabele gemaakt met de link. Die link bevat de coordinaten van de positie die daarstraks is opgevraagd. De mode is XML, de units zijn metrisch en het aantal dagen opgevraagd is 10.
Er word dan een xmlhttprequest aangemaakt, dit is noodzakelijjk om de xml op te halen, de xml word dan opgehaald en in de variabele "hetweer" gestopt, die nu alle xml bevat.

Tussenin worden variabelen aangemaakt die over heel het programma gebruikt kunnen worden, dit zijn variabelen om alle gegevens in te stoppen.

displayWeather begint met een for lus. In deze for lus worden alle gegevens uit "hetweer" gebruikt en in de variabelen gestopt. Dit is voor het gebruiksgemak. Daarna worden de eerste 2 dagen al opgevuld, zodat deze direct kunnen getoont worden.

showNextDay bevat de code om nodes bij te maken om een volgende dag met het weerbericht te tonen. Alle html uit een weathernode is er. Er word een variabele gevuld met alle gegevens, die met behulp van een teller word gevuld, om te weten welke dag het betreft. 

De weernode word vervolgens toegevoegd aan het huidige weer.

Als laatste word er gecontroleerd of teller nog niet aan het maximum zit. Als dit wel zo is dan word er een melding gegeven en word de knop gedisabled zodat er geen gegevens worden getoont met disabled bij.

