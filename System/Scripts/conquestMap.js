/*
 * API
 */
var apiKey = 'VfSaBhJrLbr7vR7GLkAAGH02AZM6lzkP';
var serviceUrl = 'https://api.os.uk/maps/raster/v1/zxy';

var crs = new L.Proj.CRS('EPSG:27700',
    `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717
    +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,
    -125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs`, 
    {
        resolutions: [896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75],
        origin: [-238375,1376256]
    });

var transformCoords = function(arr) {
    return proj4('EPSG:27700', 'EPSG:4326', arr).reverse();
};

var mapOptions = {
    crs: crs,
    minZoom: 0,
    maxZoom: 9,
    center: [56.6539,-5.1715], // OS National Grid: 205685, 755842
    zoom: 6,
    maxBounds: [
        transformCoords([-238375,0]),
        transformCoords([900000,1376256])
    ],
    attributionControl: false
};

var map = L.map('map', mapOptions);
var basemap = L.tileLayer(serviceUrl + '/Leisure_27700/{z}/{x}/{y}.png?key=' + apiKey).addTo(map);

/*
 * Change Map Layer
 */
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}

function switchLayer() {
    var isLeisure = document.getElementById('leisure').checked;
    var isRoad = document.getElementById('road').checked;
    var isOutdoor = document.getElementById('outdoor').checked;

    if (isLeisure === true && isRoad === false && isOutdoor === false) {
        var type = '/Leisure_27700/{z}/{x}/{y}.png?key=';
    } else if (isLeisure === false && isRoad === true & isOutdoor === false) {
        var type = '/Road_27700/{z}/{x}/{y}.png?key=';
    } else if (isLeisure === false && isRoad === false & isOutdoor === true) {
        var type = '/Outdoor_27700/{z}/{x}/{y}.png?key=';
    }

    var basemap = L.tileLayer(serviceUrl + type + apiKey).addTo(map);
}

/*
 * Map Icons
 */
var mountainIcon = new L.Icon({
    iconUrl: './Photos/Map/mountain.png',
    iconSize: [30, 36],
});

function createMarker(hill,type,elev,lat,lon,icontype) {
    var popup = '<h3>' + hill + '</h3>' + type + ' at ' + elev + 'ft<br>' + lat + ', ' + lon + '<br><img src="./Photos/lochnagar.jpg" style="width:150px;"></img>';
    marker = L.marker([lat,lon],{icon:icontype}).addTo(map).bindPopup(popup);
    return marker;
}

function removeMarker() {
    map.removeLayer(marker);
}

let locations = 'https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/JSON/Hills.json';

function showMunros() {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
            for (var i = 0; i < hills.landmass.length; i++) {
                for (var k = 0; k < hills.landmass[i].munro.length; k++) {
                    createMarker(
		        hills.landmass[i].munro[k].name,
			'Munro',
		        hills.landmass[i].munro[k].elevation,
		        hills.landmass[i].munro[k].lat,
		        hills.landmass[i].munro[k].lon,
		        mountainIcon
		    );
                }
            }
        })
}

function showMunroTops() {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
            for (var i = 0; i < hills.landmass.length; i++) {
                for (var k = 0; k < hills.landmass[i].munrotop.length; k++) {
                    createMarker(
		        hills.landmass[i].munrotop[k].name,
			'Munro Top',
		        hills.landmass[i].munrotop[k].elevation,
		        hills.landmass[i].munrotop[k].lat,
		        hills.landmass[i].munrotop[k].lon,
		        mountainIcon
		    );
                }
            }
        })
}

function showCorbetts() {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
            for (var i = 0; i < hills.landmass.length; i++) {
                for (var k = 0; k < hills.landmass[i].corbett.length; k++) {
                    createMarker(
		        hills.landmass[i].corbett[k].name,
			'Corbett',
		        hills.landmass[i].corbett[k].elevation,
		        hills.landmass[i].corbett[k].lat,
		        hills.landmass[i].corbett[k].lon,
		        mountainIcon
		    );
                }
            }
        })
}

function showCorbettTops() {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
            for (var i = 0; i < hills.landmass.length; i++) {
                for (var k = 0; k < hills.landmass[i].corbetttop.length; k++) {
                    createMarker(
		        hills.landmass[i].corbetttop[k].name,
			'Corbett Top',
		        hills.landmass[i].corbetttop[k].elevation,
		        hills.landmass[i].corbetttop[k].lat,
		        hills.landmass[i].corbetttop[k].lon,
		        mountainIcon
		    );
                }
            }
        })
}

// Testing Transform Coords

const test = document.getElementById('scope');
var testText = transformCoords([205685,755842]);
test.innerHTML = testText.toString();

/*
 * Option Menu
 */
function openOptions() {
    document.getElementById('options').style.width = "300px";
}

function closeOptions() {
    document.getElementById('options').style.width = "0";
}

/*
 * Add Routes
 * Using GPX to GeoJSON Method
 */

let loadRoutePrefix = "https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/GPX/";
let loadRoute = "https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/GPX/bheithir/shoolhouse.gpx";

/*
fetch(locations)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        const hills = data;
        for (var i in hills.landmass) {
	    for (var k in hills.landmass[i].munro) {
		if (hills.landmass[i].munro[k].name === loadRoute) {
		    showRoute(loadRoute);
		}
	    }
	}
*/

function showRoute() {
    fetch(loadRoute)
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, "text/xml"))
        .then(doc => {
	    let data = toGeoJSON.gpx(doc);
	    const route = data;
	    L.geoJSON(route,{color:'#A80606'}).addTo(map);
        })
}

showRoute();
