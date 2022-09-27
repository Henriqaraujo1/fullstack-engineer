var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

//hotel.name = 'novo'; new property value use  dot notation
//hotel['name'] = 'bagunça'; new property use square brackets
//delete hotel.name; delete the property
//hotel.name = ''; clear the value of a property;;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();