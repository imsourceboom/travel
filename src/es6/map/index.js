// var container = document.getElementById('map');
// var options = {
//     center: new daum.maps.LatLng(36.3310438, 127.33910279999998),
//     level: 12
// };

// var map = new daum.maps.Map(container, options);

let map;
const initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 36.3310438, lng: 127.33910279999998 },
        zoom: 8,
        disableDefaultUI: true
    });
};

console.log('google map!!!');
