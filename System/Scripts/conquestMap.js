/*
 * Initialize API
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
    //cursor: true,
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
    iconUrl: "./Photos/Map/mountain.png",
    iconSize: [30, 36],
});

var markers = [];

function createMarker(hill,type,elev,lat,latDir,lon,lonDir,img,iconType) {
    var popup = "<h3 style='margin:0 0 0.25em 0;'>" + hill + "</h3>" 
        + type + elev + "ft<br>" 
	+ lat + "&deg;" + latDir + ", " + lon + "&deg;" + lonDir + "<br>" 
	+ "<img src='Photos/" + img + "' style='width:150px;'></img>";
    var hillMarker = new L.marker([lat,lon],{icon:iconType}).addTo(map).bindPopup(popup);
    markers.push(hillMarker);
}

function hideMarkers() {
    for (var i = 0; i < markers.length; i++) {
        map.removeLayer(markers[i]);
    }
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
		    let latDir = "";
		    if (hills.landmass[i].munro[k].lat < 0) {
			latDir = "S";
		    } else if (hills.landmass[i].munro[k].lat > 0) {
			latDir = "N";
		    }
		    let lonDir = "";
		    if (hills.landmass[i].munro[k].lon < 0) {
			lonDir = "W";
		    } else if (hills.landmass[i].munro[k].lon > 0) {
			lonDir = "E";
		    }
                    createMarker(
		        hills.landmass[i].munro[k].name,
			"Munro at ",
		        hills.landmass[i].munro[k].elevation,
		        hills.landmass[i].munro[k].lat,
			latDir,
		        hills.landmass[i].munro[k].lon,
			lonDir,
			hills.landmass[i].munro[k].image,
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
		    let latDir = "";
		    if (hills.landmass[i].munrotop[k].lat < 0) {
			latDir = "S";
		    } else if (hills.landmass[i].munrotop[k].lat > 0) {
			latDir = "N";
		    }
		    let lonDir = "";
		    if (hills.landmass[i].munrotop[k].lon < 0) {
			lonDir = "W";
		    } else if (hills.landmass[i].munrotop[k].lon > 0) {
			lonDir = "E";
		    }
                    createMarker(
		        hills.landmass[i].munrotop[k].name,
			"Munro Top at ",
		        hills.landmass[i].munrotop[k].elevation,
		        hills.landmass[i].munrotop[k].lat,
			latDir,
		        hills.landmass[i].munrotop[k].lon,
			lonDir,
			hills.landmass[i].munrotop[k].image,
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
		    let latDir = "";
		    if (hills.landmass[i].corbett[k].lat < 0) {
			latDir = "S";
		    } else if (hills.landmass[i].corbett[k].lat > 0) {
			latDir = "N";
		    }
		    let lonDir = "";
		    if (hills.landmass[i].corbett[k].lon < 0) {
			lonDir = "W";
		    } else if (hills.landmass[i].corbett[k].lon > 0) {
			lonDir = "E";
		    }
                    createMarker(
		        hills.landmass[i].corbett[k].name,
			"Corbett at ",
		        hills.landmass[i].corbett[k].elevation,
		        hills.landmass[i].corbett[k].lat,
			latDir,
		        hills.landmass[i].corbett[k].lon,
			lonDir,
			hills.landmass[i].corbett[k].image,
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
		    let latDir = "";
		    if (hills.landmass[i].corbetttop[k].lat < 0) {
			latDir = "S";
		    } else if (hills.landmass[i].corbetttop[k].lat > 0) {
			latDir = "N";
		    }
		    let lonDir = "";
		    if (hills.landmass[i].corbetttop[k].lon < 0) {
			lonDir = "W";
		    } else if (hills.landmass[i].corbetttop[k].lon > 0) {
			lonDir = "E";
		    }
                    createMarker(
		        hills.landmass[i].corbetttop[k].name,
			"Corbett Top at ",
		        hills.landmass[i].corbetttop[k].elevation,
		        hills.landmass[i].corbetttop[k].lat,
			latDir,
		        hills.landmass[i].corbetttop[k].lon,
			lonDir,
			hills.landmass[i].corbetttop[k].image,
		        mountainIcon
		    );
                }
            }
        })
}

/*
 * Crosshair Icon
 */
var crosshairIcon = L.icon({
    iconUrl: "./Photos/Map/crosshair.png",
    iconSize:     [20, 20],
    iconAnchor:   [10, 10]
});

crosshair = new L.marker(map.getCenter(), {icon: crosshairIcon, clickable:false});
crosshair.addTo(map);

map.on("move", function(e) {
    crosshair.setLatLng(map.getCenter());
});








L.CursorHandler = L.Handler.extend({

    addHooks: function () {
        this._popup = new L.Popup();
        this._map.on('mouseover', this._open, this);
        this._map.on('mousemove', this._update, this);
        this._map.on('mouseout', this._close, this);
    },

    removeHooks: function () {
        this._map.off('mouseover', this._open, this);
        this._map.off('mousemove', this._update, this);
        this._map.off('mouseout', this._close, this);
    },
    
    _open: function (e) {
        this._update(e);
        this._popup.openOn(this._map);
    },

    _close: function () {
        this._map.closePopup(this._popup);
    },

    _update: function (e) {
        this._popup.setLatLng(e.latlng)
            .setContent(e.latlng.toString());
    }

    
});

L.Map.addInitHook('addHandler', 'cursor', L.CursorHandler);









// Testing Transform Coords

const test = document.getElementById('scope');
var testText = transformCoords([205685,755842]);
test.innerHTML = testText.toString();

/*
 * Option Menu
 */
function openOptions() {
    document.getElementById('options').style.width = "500px";
}

function closeOptions() {
    document.getElementById('options').style.width = "0";
}

/*
 * Add Routes
 * Using GPX to GeoJSON Method
 */

function showRoute(landmass) {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
	    const selectRoute = document.getElementById("selectRoute" + landmass).value.toLowerCase();
            let loadRoutePrefix = "https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/GPX/";
            let loadRouteSuffix = "";
	    let loadRoute = "";
	    for (var i in hills.landmass) {
		for (var k in hills.landmass[i].route) {
		    if (hills.landmass[i].route[k].name.toLowerCase() === selectRoute) {
		        loadRouteSuffix = hills.landmass[i].route[k].GPX;
			loadRoute = loadRoutePrefix + loadRouteSuffix;
		    }
		}
	    }
	})
    fetch(loadRoute)
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, "text/xml"))
        .then(doc => {
	    let data = toGeoJSON.gpx(doc);
	    const route = data;
	    L.geoJSON(route,{color:'#A80606'}).addTo(map);
        })
}

//showRoute();

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
