/*This fuction write the name of hotel,price and discount and use 
local variables*/

(function() {
//Part one: Create hotel Object and write out the offer details

//Create a hotel object using object literal syntax
    var hotel = {
        name : 'Park',
        roomRate : 240, //price in dollar
        discount : 10, //percentage discount
        offerPrice: function() {
            var offerRate = this.roomRate - ((100 - this.discount) /100);
            return offerRate;
        }
    }


var hotelName, roomRate, specialRate

hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
specialRate.textContent = '$' + hotel.offerPrice();

/*Part two: create function to expire details for the offer*/

var expiryMsg,today,elEnds;

function offerExpires(today) {
    //Declare variables whitin the function for local scope
    var weekFromToday,day,date,month, year, dayNames,MonthNames;
    //add 7 days time
    weekFromToday = new Date(today.getTime() +7*24*60*60*1000);
    //create arrays to hold the name of days
    dayNames = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday','Friday','Saturday'];
    MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = MonthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
} 

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

}());