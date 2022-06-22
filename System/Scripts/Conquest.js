/*
 * Initialize API
 */
var apiKey = 'VfSaBhJrLbr7vR7GLkAAGH02AZM6lzkP';
var serviceUrl = 'https://api.os.uk/maps/raster/v1/zxy';


/*
 * Define Coordinate System
 */
var crs = new L.Proj.CRS('EPSG:27700',
    `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717
    +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,
    -125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs`, 
    {
        resolutions: [896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75],
	// Origin pre-location-granting
        origin: [-238375,1376256]
    });


/*
 * Transform Coordinate Systems
 */
var transformCoords = function(arr) {
    return proj4('EPSG:27700', 'EPSG:4326', arr).reverse();
};


/*
 * Define Map Options
 */
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


/*
 * Create Map
 */
var map = L.map('map', mapOptions);
var basemap = L.tileLayer(serviceUrl + '/Leisure_27700/{z}/{x}/{y}.png?key=' + apiKey).addTo(map);


/*
 * Display Options Menu
 */
function openOptions() {
    document.getElementById('options').style.width = "525px";
}

function closeOptions() {
    document.getElementById('options').style.width = "0";
}


/*
 * Center to location
 * INCOMPLETE
 */
function showLocation() {
    map.locate({setView: true, maxZoom: 16});
}


/*
 * Marker Icons
 */
var crosshairIcon = L.icon({
    iconUrl: "./Photos/Map/crosshair.png",
    iconSize:     [20, 20],
    iconAnchor:   [10, 10]
});

var locationIcon = L.icon({
    iconUrl: "./Photos/Map/mountain.png",
    iconSize:     [30, 30],
    iconAnchor:   [10, 10]
});

var mountainIcon = new L.Icon({
    iconUrl: "./Photos/Map/mountain.png",
    iconSize: [30, 36],
});


/*
 * Display Center Crosshair 
 */
crosshair = new L.marker(map.getCenter(), {icon: crosshairIcon, clickable:false});
crosshair.addTo(map);

map.on("move", function(e) {
    crosshair.setLatLng(map.getCenter());
});


/*
 * Display Pan Coordinates
 * INCOMPLETE
 */
const panCoordsCont = document.getElementById('scope');

//map.on("move", function(e) {
    //panCoords = map.getCenter();
//});

//var panCoords = getMousePosition();
//panCoordsCont.innerHTML = panCoords.toString();

//L.control.mousePosition().addTo(map);


/*
 * Display Pan Coordinates
 * INCOMPLETE
 */
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


/*
 * Display Distance from a Location
 * INCOMPLETE
 */
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng, {icon: locationIcon}).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();

   //L.circle(e.latlng, radius).addTo(map);
}
//
//map.on('locationfound', onLocationFound);


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
 * Define JSON for All Locations
 */
let locations = 'https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/JSON/Hills.json';


/*
 * Create Mountain Icon
 */
var markers = [];

function createMarker(hill,type,elev,lat,latDir,lon,lonDir,img,iconType) {
    var popup = "<h3 style='margin:0 0 0.25em 0;'>" + hill + "</h3>" 
        + type + elev + "ft<br>" 
	+ lat + "&deg;" + latDir + ", " + lon + "&deg;" + lonDir + "<br>" 
	+ "<img src='Photos/" + img + "' style='width:150px;'></img>";
    var hillMarker = new L.marker([lat,lon],{icon:iconType}).addTo(map).bindPopup(popup);
    markers.push(hillMarker);
}


/*
 * Show Munro Icons
 */
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


/*
 * Show Munro Top Icons
 */
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


/*
 * Show Corbett Icons
 */
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


/*
 * Show Corbett Top Icons
 */
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
 * Hide All Icons
 */
function hideMarkers() {
    for (var i = 0; i < markers.length; i++) {
        map.removeLayer(markers[i]);
    }
}


/*
 * Search Landmasses
 */
function searchLocation() {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
            const inpHill = document.getElementById("inpLocation").value.toLowerCase();
            const locationPre = document.getElementById("locationPre");
            const locationOut = document.getElementById("locationOut");
            let hillType = "";
            let hillName = "";
            for (var i in hills.landmass) {
                for (var k in hills.landmass[i].munro) {
                    if (hills.landmass[i].munro[k].name.toLowerCase().match(inpHill)) {
                        hillType = "hills.landmass[i].munro";
                        //hillName = "hills.landmass[i].munro[k].name";
                    }
                }
                for (var k in hills.landmass[i].munrotop) {
                    if (hills.landmass[i].munrotop[k].name.toLowerCase().match(inpHill)) {
                        hillType = "hills.landmass[i].munrotop";
                        //hillName = "hills.landmass[i].munrotop[k].name";
                    }
                }
                for (var k in hills.landmass[i].corbett) {
                    if (hills.landmass[i].corbett[k].name.toLowerCase().match(inpHill)) {
                        hillType = "hills.landmass[i].corbett";
                        //hillName = "hills.landmass[i].corbett[k].name";
                    }
                }
                for (var k in hills.landmass[i].corbetttop) {
                    if (hills.landmass[i].corbetttop[k].name.toLowerCase().match(inpHill)) {
                        hillType = "hills.landmass[i].corbetttop";
                        //hillName = "hills.landmass[i].corbetttop[k].name";
                    }
                }
                for (var k in hillType) {
                    if (hills.landmass[i].munro[k].name.toLowerCase().match(inpHill)) {
                        let hillName = hills.landmass[i].munro[k].name;
                        let landmassName = hills.landmass[i].name;
                        let landmassType = hills.landmass[i].type;
                        let landmassParentLandmass = hills.landmass[i].parentlandmass;
                        let landmassParentPeak = hills.landmass[i].parentpeak;
                        let landmassRegion = hills.landmass[i].region;
                        let landmassSubregion = hills.landmass[i].subregion;
                        let landmassInformalRegion = hills.landmass[i].informalregion;

                        let landmassSubtype = "";
                        if (hills.landmass[i].subtype == null) {
                            landmassSubtype = "";
                        } else {
                            landmassSubtype = " (" + hills.landmass[i].subtype + ")";
                        }

                        let landmassSubsubtype = "";
                        if (hills.landmass[i].subsubtype == null) {
                            landmassSubsubtype = "";
                        } else {
                            landmassSubsubtype = "<b>Prominent feature</b>: " + hills.landmass[i].subsubtype + "<br>";
                        }

                        let hillElev = hills.landmass[i].munro[k].elevation.toLocaleString("en-US");

                        let hillLat = Math.abs(hills.landmass[i].munro[k].lat);
                        let hillLatDir = "";
                        if (hills.landmass[i].munro[k].lat < 0) {
                            hillLatDir = "S";
                        } else if (hills.landmass[i].munro[k].lat > 0) {
                            hillLatDir = "N";
                        }

                        let hillLon = Math.abs(hills.landmass[i].munro[k].lon);
                        let hillLonDir = "";
                        if (hills.landmass[i].munro[k].lon < 0) {
                            hillLonDir = "W";
                        } else if (hills.landmass[i].munro[k].lon > 0) {
                            hillLonDir = "E";
                        }

                        let hillProm = hills.landmass[i].munro[k].prominence.toLocaleString("en-US");
                        let hillIso = hills.landmass[i].munro[k].isolation;
                        let hillSum = hills.landmass[i].munro[k].summit;
                        let hillImg = hills.landmass[i].munro[k].image;

                        locationOut.innerHTML =
                            "<h1>" + hillName + "</h1>"
                            + hillName + " is a <b>Munro</b> on the <b>" + landmassName + "</b> " + landmassType + landmassSubtype + "<br><hr>"
                            + landmassSubsubtype
                            + "<b>Parent Landmass</b>: " + landmassParentLandmass + "<br>"
                            + "<b>Parent Peak</b>: " + landmassParentPeak + "<br>"
                            + "<b>Region</b>: " + landmassRegion + "<br>"
                            + "<b>Sub-Region</b>: " + landmassSubregion + "<br>"
                            + "<b>Informal Region</b>: " + landmassInformalRegion + "<br><hr>"
                            + "<b>Elevation</b>: " + hillElev + "ft<br>"
                            + "<b>Prominance</b>: " + hillProm + "ft<br>"
                            + "<b>Isolation</b>: " + hillIso + "mi<br>"
                            + "<b>Located at</b>: "
                            + hillLat + "&deg;" + hillLatDir + ", "
                            + hillLon + "&deg;" + hillLonDir + "<br>"
                            + "<b>Summit Feature</b>: " + hillSum + "<br><hr>"
                            + "<div style='text-align:center;'><img src='./Photos/" + hillImg + "' style='width:400px;height:275px;'></img></div>";

                        locationPre.classList.add("hidden");
                    }
                }
            }
        })
}


/*
 * Calculate a Route's Difficulty
 */
function scoreRoute(elev,dist,nTops,type,stage,terrType,terrDiff) {
    const convConstFt = 0.3048;
    const convConstMi = 1.60934;

    // `Number of tops achieved per vertical meter gained per horizontal meter'
    var multiplier = nTops / ((convConstFt * elev) / ((convConstMi * dist) * 1000));

    // Subjective survey-based statistics
    const typeWeight = 0.4;
    const stageWeight = 0.1;
    const terrTypeWeight = 0.2;
    const terrDiffWeight = 0.3;

    var typeElementWeight = 1 / type.length;
    var stageElementWeight = 1 / stage.length;
    var terrTypeElementWeight = 1 / terrType.length;
    var terrDiffElementWeight = 1 / terrDiff.length;

    var typeValues = [];
    var stageValues = [];
    var terrTypeValues = [];
    var terrDiffValues = [];

    var typeScore = 0;
    var stageScore = 0;
    var terrTypeScore = 0;
    var terrDiffScore = 0;

    // Type weightings if exhausted:
        // [0.7, 1, 1.05, 1.1, 1.15] = 5
    // Stage weightings if exhausted:
        // [1, 1, 1, 1] = 4
    // Terrain type weightings if exhausted:
        // [0.75, 0.8, 0.85, 0.9, 0.95, 1, 1.05, 1.1, 1.15, 1.2, 1.25] = 11
    // Terrain difficulty weightings if exhausted:
        // [0.25, 0.25, 1, 1.05, 1.05, 1.1, 1.15, 1.15, 1, 1.05, 1.1, 1.15, 1, 1.05, 1.1, 1.15, 1, 1.075, 1.125, 1.2] = 20

    if (type.includes("walk")) {
        typeValues = [0.7];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("hillwalk")) {
        typeValues = [1];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("ridgewalk")) {
        typeValues = [1.05];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("scramble")) {
        typeValues = [1.1];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("climb")) {
        typeValues = [1.15];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("hillwalk")
        && type.includes("ridgewalk")) {
        typeValues = [1, 1.025];
        typeScore = (typeElementWeight * typeValues[0])
            + (typeElementWeight * typeValues[1]);
    } else if (type.includes("hillwalk")
        && type.includes("scramble")) {
        typeValues = [1, 1.1];
        typeScore = (typeElementWeight * typeValues[0])
            + (typeElementWeight * typeValues[1]);
    } else if (type.includes("hillwalk")
        && type.includes("scramble")
        && type.includes("climb")) {
        typeValues = [1, 1.1, 1.15];
        typeScore = (typeElementWeight * typeValues[0])
            + (typeElementWeight * typeValues[1])
            + (typeElementWeight * typeValues[2]);
    }

    if (stage.includes("walk-in")) {
        stageValues = [1];
        stageScore = stageElementWeight * stageValues[0];
    } else if (stage.includes("apporach")) {
        stageValues = [1];
        stageScore = stageElementWeight * stageValues[0];
    } else if (stage.includes("on-hill")) {
        stageValues = [1];
        stageScore = stageElementWeight * stageValues[0];
    } else if (stage.includes("walk-out")) {
        stageValues = [1];
        stageScore = stageElementWeight * stageValues[0];
    } else if (stage.includes("walk-in")
        && stage.includes("on-hill")
        && stage.includes("walk-out")) {
        stageValues = [1, 1, 1];
        stageScore = (stageElementWeight * stageValues[0])
            + (stageElementWeight * stageValues[1])
            + (stageElementWeight * stageValues[2]);
    } else if (stage.includes("walk-in")
        && stage.includes("approach")
        && stage.includes("on-hill")
        && stage.includes("walk-out")) {
        stageValues = [1, 1, 1, 1];
        stageScore = (stageElementWeight * stageValues[0])
            + (stageElementWeight * stageValues[1])
            + (stageElementWeight * stageValues[2])
            + (stageElementWeight * stageValues[3]);
    } else if (stage.includes("approach")
        && stage.includes("on-hill")) {
        stageValues = [1, 1];
        stageScore = (stageElementWeight * stageValues[0])
            + (stageElementWeight * stageValues[1]);
    } else if (stage.includes("approach")
        && stage.includes("on-hill")
        && stage.includes("walk-out")) {
        stageValues = [1, 1, 1];
        stageScore = (stageElementWeight * stageValues[0])
            + (stageElementWeight * stageValues[1])
            + (stageElementWeight * stageValues[2]);
    }

    if (terrType.includes("road")
        && terrType.includes("path")) {
        terrTypeValues = [0.75, 1];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1]);
    } else if (terrType.includes("road")
        && terrType.includes("farm path")
        && terrType.includes("footpath erosion")) {
        terrTypeValues = [0.75, 0.9, 1.05];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1])
            + (terrTypeElementWeight * terrTypeValues[2]);
    } else if (terrType.includes("road")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
        terrTypeValues = [0.75, 1, 1.05];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1])
            + (terrTypeElementWeight * terrTypeValues[2]);
    } else if (terrType.includes("road")
        && terrType.includes("forestry commission road")
        && terrType.includes("off-road")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
        terrTypeValues = [0.75, 0.8, 0.85, 1, 1.05];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1])
            + (terrTypeElementWeight * terrTypeValues[2])
            + (terrTypeElementWeight * terrTypeValues[3])
            + (terrTypeElementWeight * terrTypeValues[4]);
    } else if (terrType.includes("road")
        && terrType.includes("off-road")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
        terrTypeValues = [0.75, 0.85, 1, 1.05];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1])
            + (terrTypeElementWeight * terrTypeValues[2])
            + (terrTypeElementWeight * terrTypeValues[3]);
    } else if (terrType.includes("road")
        && terrType.includes("farm path")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
        terrTypeValues = [0.75, 0.9, 1, 1.05];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1])
            + (terrTypeElementWeight * terrTypeValues[2])
            + (terrTypeElementWeight * terrTypeValues[3]);
    } else if (terrType.includes("path")
        && terrType.includes("footpath erosion")) {
        terrTypeValues = [0.75, 1.05];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1]);
    } else if (terrType.includes("path")
        && terrType.includes("footpath erosion")
        && terrType.includes("off-path")) {
        terrTypeValues = [0.75, 1.05, 1.25];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1])
            + (terrTypeElementWeight * terrTypeValues[2]);
    } else if (terrType.includes("forestry commission road")
        && terrType.includes("path")) {
        terrTypeValues = [0.8, 1];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1]);
    } else if (terrType.includes("farm path")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
        terrTypeValues = [0.9, 1, 1.05];
        terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
            + (terrTypeElementWeight * terrTypeValues[1])
            + (terrTypeElementWeight * terrTypeValues[2]);
    }

    if (terrDiff.includes("concrete")
        && terrDiff.includes("stone staircase")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("rocky talus")
        && terrDiff.includes("crag")
        && terrDiff.includes("smooth slab")) {
        terrDiffValues = [0.25, 1, 1.05, 1.1, 1, 1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4])
            + (terrDiffElementWeight * terrDiffValues[5]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("grass with scattered rock")
        && terrDiff.includes("crag")
        && terrDiff.includes("rocky talus")
        && terrDiff.includes("talus (coarse scree)")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.05, 1, 1.1, 1.15];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4])
            + (terrDiffElementWeight * terrDiffValues[5])
            + (terrDiffElementWeight * terrDiffValues[6]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("grass with scattered rock")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.05];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("grass with scattered rock")
        && terrDiff.includes("rocky talus")
        && terrDiff.includes("talus (coarse scree)")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.05, 1.1, 1.15];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4])
            + (terrDiffElementWeight * terrDiffValues[5]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("grass with scattered rock")
        && terrDiff.includes("rocky talus")
        && terrDiff.includes("talus (coarse scree)")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.1, 1.15];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("grass with scattered rock")) {
        terrDiffValues = [0.25, 0.25, 1.05];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("grass with scattered rock")
        && terrDiff.includes("rocky talus")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("grass with scattered rock")
        && terrDiff.includes("rocky talus")
        && terrDiff.includes("talus (coarse scree)")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.1, 1.15];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("talus (coarse scree)")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.15];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("rocky talus")
        && terrDiff.includes("talus (coarse scree)")
        && terrDiff.includes("crag")
        && terrDiff.includes("notched slab")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.1, 1.15, 1, 1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4])
            + (terrDiffElementWeight * terrDiffValues[5])
            + (terrDiffElementWeight * terrDiffValues[6]);
    } else if (terrDiff.includes("concrete")
        && terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("talus (coarse scree)")
        && terrDiff.includes("crag (grade 1 (easy))")
        && terrDiff.includes("notched slab (grade 1 (easy))")) {
        terrDiffValues = [0.25, 0.25, 1.05, 1.15, 1.05, 1.05];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4])
            + (terrDiffElementWeight * terrDiffValues[5]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("grass with scattered rock")) {
        terrDiffValues = [0.25, 1.05];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("grass with scattered rock")) {
        terrDiffValues = [0.25, 1.05, 1.05];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("grass with scattered rock")) {
        terrDiffValues = [0.25, 1.05];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("rocky talus")) {
        terrDiffValues = [0.25, 1.05, 1.1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("crag")) {
        terrDiffValues = [0.25, 1.05, 1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("grass with scattered rock")
        && terrDiff.includes("crag")) {
        terrDiffValues = [0.25, 1.05, 1.05, 1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("crag")
        && terrDiff.includes("notched slab")) {
        terrDiffValues = [0.25, 1.05, 1, 1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("stone staircase")
        && terrDiff.includes("notched slab")) {
        terrDiffValues = [0.25, 1, 1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("rocky talus")
        && terrDiff.includes("notched slab")) {
        terrDiffValues = [0.25, 1.05, 1.1, 1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("rocky talus")
        && terrDiff.includes("scree (fine scree)")
        && terrDiff.includes("crag (grade 2 (moderate))")
        && terrDiff.includes("notched slab (grade 2 (moderate))")) {
        terrDiffValues = [0.25, 1.05, 1.1, 1.15, 1.1, 1.1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4])
            + (terrDiffElementWeight * terrDiffValues[5]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("grass with scattered rock")
        && terrDiff.includes("scree (fine scree)")
        && terrDiff.includes("crag (grade 2 (moderate))")
        && terrDiff.includes("notched slab (grade 2 (moderate))")) {
        terrDiffValues = [0.25, 1.05, 1.05, 1.15, 1.1, 1.1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3])
            + (terrDiffElementWeight * terrDiffValues[4])
            + (terrDiffElementWeight * terrDiffValues[5]);
    } else if (terrDiff.includes("grass")
        && terrDiff.includes("broken rock")
        && terrDiff.includes("grass with scattered rock")
        && terrDiff.includes("rocky talus")) {
        terrDiffValues = [0.25, 1.05, 1.05, 1.1];
        terrDiffScore = (terrDiffElementWeight * terrDiffValues[0])
            + (terrDiffElementWeight * terrDiffValues[1])
            + (terrDiffElementWeight * terrDiffValues[2])
            + (terrDiffElementWeight * terrDiffValues[3]);
    }

    // `Number of tops achieved per vertical meter gained per horizontal meter,
    // scaled by type, stages, terrain, and terrain difficulty elements of the route'
    var score = multiplier * (
            (typeWeight * typeScore)
            + (stageWeight * stageScore)
            + (terrTypeWeight * terrTypeScore)
            + (terrDiffWeight * terrDiffScore)
        );

    return score.toFixed(4);
}


/*
 * Search for a Route
 */
function searchRoute(landmass) {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
            const selectRoute = document.getElementById("selectRoute" + landmass).value.toLowerCase();
            const statsPre = document.getElementById("statsPre");
            const statsOut = document.getElementById("statsOut");
            statsOut.innerHTML = "";
            for (var i in hills.landmass) {
                for (var k in hills.landmass[i].route) {
                    if (hills.landmass[i].route[k].name.toLowerCase() === selectRoute) {
                        let routeName = hills.landmass[i].route[k].name;
                        let routeDist = hills.landmass[i].route[k].distance;
                        let routeElev = hills.landmass[i].route[k].elevationgain.toLocaleString("en-US");
                        let routeTime = hills.landmass[i].route[k].stdtime;

                        let routeScore = scoreRoute(
                            hills.landmass[i].route[k].elevationgain,
                            hills.landmass[i].route[k].distance,
                            (
                                hills.landmass[i].route[k].munro.length
                                + hills.landmass[i].route[k].munrotop.length
                                + hills.landmass[i].route[k].corbett.length
                                + hills.landmass[i].route[k].corbetttop.length
                            ),
                            hills.landmass[i].route[k].type,
                            hills.landmass[i].route[k].stage,
                            hills.landmass[i].route[k].terraintype,
                            hills.landmass[i].route[k].terraindiff
                        );

                        let routeDiff = "";
                        if (routeScore >= 0 && routeScore <= 33.3334) {
                            routeDiff = "Amateur";
                        } else if (routeScore > 33.3333 && routeScore <= 66.6667) {
                            routeDiff = "Easy";
                        } else if (routeScore > 66.6667 && routeScore <= 100) {
                            routeDiff = "Moderate";
                        } else if (routeScore > 100) {
                            routeDiff = "Challenging";
                        }

                        let routeType = hills.landmass[i].route[k].type.join(", ");
                        let routeStage = hills.landmass[i].route[k].stage.join(", ");
                        let routeTerrainType = hills.landmass[i].route[k].terraintype.join(", ");
                        let routeTerrainDiff = hills.landmass[i].route[k].terraindiff.join(", ");

                        let routeGear = "";
                        if (hills.landmass[i].route[k].gear.length === 0) {
                            routeGear = "";
                        } else {
                            routeGear = "<b>Gear:</b> " + hills.landmass[i].route[k].gear.join(", ") + "<br>";
                        }

                        let routeMunros = "";
                        if (hills.landmass[i].route[k].munro.length === 0) {
                            routeMunros = "";
                        } else if (hills.landmass[i].route[k].munro.length === 1) {
                            routeMunros = "<b>Munro:</b> " + hills.landmass[i].route[k].munro + "<br>";
                        } else {
                            routeMunros = "<b>Munros:</b><br>" + hills.landmass[i].route[k].munro.join("<br>") + "<br>";
                        }

                        let routeMunroTops = "";
                        if (hills.landmass[i].route[k].munrotop.length === 0) {
                            routeMunroTops = "";
                        } else if (hills.landmass[i].route[k].munrotop.length === 1) {
                            routeMunroTops = "<b>Munro Top:</b> " + hills.landmass[i].route[k].munrotop + "<br>";
                        } else {
                            routeMunroTops = "<b>Munro Tops:</b><br>" + hills.landmass[i].route[k].munrotop.join("<br>") + "<br>";
                        }

                        let routeCorbetts = "";
                        if (hills.landmass[i].route[k].corbett.length === 0) {
                            routeCorbetts = "";
                        } else if (hills.landmass[i].route[k].corbett.length === 1) {
                            routeCorbetts = "<b>Corbett:</b> " + hills.landmass[i].route[k].corbett + "<br>";
                        } else {
                            routeCorbetts = "<b>Corbetts:</b><br>" + hills.landmass[i].route[k].corbett.join("<br>") + "<br>";
                        }

                        let routeCorbettTops = "";
                        if (hills.landmass[i].route[k].corbetttop.length === 0) {
                            routeCorbettTops = "";
                        } else if (hills.landmass[i].route[k].corbetttop.length === 1) {
                            routeCorbettTops = "<b>Corbett Top:</b> " + hills.landmass[i].route[k].corbetttop + "<br>";
                        } else {
                            routeCorbettTops = "<b>Corbett Tops:</b><br>" + hills.landmass[i].route[k].corbetttop.join("<br>") + "<br>";
                        }

                        let routeGPX = hills.landmass[i].route[k].GPX;

                        statsOut.innerHTML =
                            "<h1>" + routeName + "</h1>"
                            + "<b>Distance</b>: " + routeDist + "mi<br>" + "<b>Elevation Gain:</b> " + routeElev + "ft<br>"
                            + "<b>Estimated Duration</b>: " + routeTime + "hrs (average user)<br><hr>"
                            + "<b>Relative Route Score:</b> " + routeScore + "<br>"
                            + "<b>Route Difficulty:</b> " + routeDiff + "<br>"
                            + "<b>Movement Dynamic(s)</b>: " + routeType + "<br>"
                            + "<b>Route Stage(s)</b>: " + routeStage + "<br>"
                            + "<b>Terrain Type(s)</b>: " + routeTerrainType + "<br>"
                            + "<b>Terrain Surface(s)</b>: " + routeTerrainDiff + "<br>"
                            + routeGear + "<hr>"
                            + routeMunros
                            + routeMunroTops
                            + routeCorbetts
                            + routeCorbettTops + "<hr>"
                            + "<a href='./GPX/" + routeGPX + "'>Download GPX</a>";

                    statsPre.classList.add("hidden");
                    }
                }
            }
        })
}


/*
 * Show a Route's GPX 
 * Using GPX to GeoJSON Method
 */
var routes = [];

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
            fetch(loadRoute)
                .then(response => response.text())
                .then(str => new DOMParser().parseFromString(str, "text/xml"))
                .then(doc => {
	            let data = toGeoJSON.gpx(doc);
	            const route = data;
	            var routeTrack = new L.geoJSON(route,{color:'#A80606'}).addTo(map);
		    routes.push(routeTrack);
                })
	})
}


/*
 * Hide All GPX
 */
function hideRoute() {
    for (var i = 0; i < routes.length; i++) {
        map.removeLayer(routes[i]);
    }
}
