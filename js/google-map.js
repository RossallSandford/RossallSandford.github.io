
var google;

function initMap() {
    // The location of Uluru
    var hopkinsField = { lat: 51.029119, lng: -3.042820 };
    // The map, centered at HF
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 8, center: hopkinsField });
    // The marker, positioned at HF
    var marker = new google.maps.Marker({ position: hopkinsField, map: map });
}

google.maps.event.addDomListener(window, 'load', initMap);