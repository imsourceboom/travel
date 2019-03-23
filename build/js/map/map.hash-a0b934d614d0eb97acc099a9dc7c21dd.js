{"version":3,"sources":["index.js"],"names":["map","initMap","google","maps","Map","document","getElementById","center","lat","lng","zoom","disableDefaultUI","console","log"],"mappings":";;AAAA;AACA;AACA;AACA;AACA;AAEA;AAEA,IAAIA,GAAJ;;AACA,IAAMC,OAAO,GAAG,SAAVA,OAAU,GAAM;AAClBD,EAAAA,GAAG,GAAG,IAAIE,MAAM,CAACC,IAAP,CAAYC,GAAhB,CAAoBC,QAAQ,CAACC,cAAT,CAAwB,KAAxB,CAApB,EAAoD;AACtDC,IAAAA,MAAM,EAAE;AAAEC,MAAAA,GAAG,EAAE,UAAP;AAAmBC,MAAAA,GAAG,EAAE;AAAxB,KAD8C;AAEtDC,IAAAA,IAAI,EAAE,CAFgD;AAGtDC,IAAAA,gBAAgB,EAAE;AAHoC,GAApD,CAAN;AAKH,CAND;;AAQAC,OAAO,CAACC,GAAR,CAAY,eAAZ","file":"map.js","sourcesContent":["// var container = document.getElementById('map');\n// var options = {\n//     center: new daum.maps.LatLng(36.3310438, 127.33910279999998),\n//     level: 12\n// };\n\n// var map = new daum.maps.Map(container, options);\n\nlet map;\nconst initMap = () => {\n    map = new google.maps.Map(document.getElementById('map'), {\n        center: { lat: 36.3310438, lng: 127.33910279999998 },\n        zoom: 8,\n        disableDefaultUI: true\n    });\n};\n\nconsole.log('google map!!!');\n"]}
"use strict";

// var container = document.getElementById('map');
// var options = {
//     center: new daum.maps.LatLng(36.3310438, 127.33910279999998),
//     level: 12
// };
// var map = new daum.maps.Map(container, options);
var map;

var initMap = function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 36.3310438,
      lng: 127.33910279999998
    },
    zoom: 8,
    disableDefaultUI: true
  });
};

console.log('google map!!!');
//# sourceMappingURL=map.js.map

//# sourceMappingURL=map.hash.js.map
