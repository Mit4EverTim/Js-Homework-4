var myfavouriteperson = {
    name: "Figarland Shanks",
    relationship: "Fictional Character",
    favouriteActivity: "Pirate Life",
    City: "Grand Line",
}

var Hisname = document.getElementById ("name");
var Hisrelationship = document.getElementById ("relationship");
var favouriteActivity = document.getElementById ("activity");
var city = document.getElementById ("city");

Hisname.textContent = myfavouriteperson.name;
Hisrelationship.textContent = myfavouriteperson.relationship;
favouriteActivity.textContent = myfavouriteperson.favouriteActivity;
city.textContent = myfavouriteperson.City;

