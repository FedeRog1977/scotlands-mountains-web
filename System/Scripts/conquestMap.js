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
 */

/*
var route = {
"type": "FeatureCollection",
"name": "routes",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "name": "Creise and Meall a'Bhùiridh from the Ski centre" }, "geometry": { "type": "LineString", "coordinates": [ [ -4.827835779, 56.632151771 ], [ -4.82851839, 56.631815368 ], [ -4.828972589, 56.631477865 ], [ -4.829538498, 56.630955357 ], [ -4.829318313, 56.630759029 ], [ -4.830715117, 56.629594724 ], [ -4.831573247, 56.627945615 ], [ -4.832411333, 56.627096014 ], [ -4.833796133, 56.625774648 ], [ -4.83471945, 56.625149593 ], [ -4.835414043, 56.625127467 ], [ -4.835956039, 56.624592889 ], [ -4.836847781, 56.624308294 ], [ -4.838117257, 56.624342248 ], [ -4.838912756, 56.624751934 ], [ -4.839299692, 56.624736809 ], [ -4.840181646, 56.625081596 ], [ -4.840899433, 56.625216205 ], [ -4.842251764, 56.62468196 ], [ -4.842269885, 56.624467624 ], [ -4.842728126, 56.624186602 ], [ -4.843280767, 56.624098466 ], [ -4.8437327, 56.624188802 ], [ -4.844209835, 56.624159015 ], [ -4.844593358, 56.624401916 ], [ -4.845535721, 56.624487319 ], [ -4.845843364, 56.624480279 ], [ -4.847009943, 56.624057193 ], [ -4.84734037, 56.624049628 ], [ -4.847909126, 56.624024021 ], [ -4.848498365, 56.623664475 ], [ -4.848882122, 56.622850329 ], [ -4.849044238, 56.621670041 ], [ -4.849101264, 56.621366726 ], [ -4.849361916, 56.621190875 ], [ -4.849372448, 56.620725037 ], [ -4.849739529, 56.619993064 ], [ -4.850053843, 56.619620934 ], [ -4.849354298, 56.618819025 ], [ -4.849516217, 56.618544766 ], [ -4.849896115, 56.617680369 ], [ -4.850542247, 56.617017499 ], [ -4.850389466, 56.616656074 ], [ -4.850202961, 56.616452719 ], [ -4.850382437, 56.616108845 ], [ -4.850893685, 56.61577624 ], [ -4.850856715, 56.615437328 ], [ -4.850724377, 56.614892972 ], [ -4.850842576, 56.614795884 ], [ -4.850735816, 56.614590701 ], [ -4.850875873, 56.614329524 ], [ -4.851237567, 56.614132475 ], [ -4.851266595, 56.613609586 ], [ -4.851422794, 56.613259952 ], [ -4.851929296, 56.612562524 ], [ -4.851890406, 56.612349493 ], [ -4.852397292, 56.612262364 ], [ -4.854032796, 56.611859906 ], [ -4.854359795, 56.611808357 ], [ -4.854834402, 56.611596121 ], [ -4.855916476, 56.611420267 ], [ -4.856783552, 56.611117214 ], [ -4.85817977, 56.610720198 ], [ -4.860056692, 56.610192564 ], [ -4.860917085, 56.610103559 ], [ -4.861099779, 56.609954642 ], [ -4.861932156, 56.609797064 ], [ -4.862943904, 56.609597598 ], [ -4.863441715, 56.609542091 ], [ -4.864135999, 56.609519808 ], [ -4.865028155, 56.609398583 ], [ -4.866908843, 56.609374107 ], [ -4.867621657, 56.609445755 ], [ -4.868224821, 56.60942555 ], [ -4.868367643, 56.609353045 ], [ -4.868908187, 56.609409784 ], [ -4.869217083, 56.609270526 ], [ -4.869822098, 56.609124433 ], [ -4.870379699, 56.609105269 ], [ -4.870931997, 56.608866009 ], [ -4.871476831, 56.608979265 ], [ -4.871849874, 56.609083903 ], [ -4.872558584, 56.609552007 ], [ -4.873087941, 56.610062004 ], [ -4.873479948, 56.611166611 ], [ -4.87315808, 56.612036039 ], [ -4.87285863, 56.613200668 ], [ -4.872520443, 56.613705541 ], [ -4.872092137, 56.614376084 ], [ -4.871926999, 56.614455401 ], [ -4.872092137, 56.614376084 ], [ -4.872520443, 56.613705541 ], [ -4.87285863, 56.613200668 ], [ -4.87315808, 56.612036039 ], [ -4.873479948, 56.611166611 ], [ -4.873087941, 56.610062004 ], [ -4.872558584, 56.609552007 ], [ -4.871849874, 56.609083903 ], [ -4.871476831, 56.608979265 ], [ -4.870931997, 56.608866009 ], [ -4.870379699, 56.609105269 ], [ -4.869822098, 56.609124433 ], [ -4.869217083, 56.609270526 ], [ -4.868908187, 56.609409784 ], [ -4.868367643, 56.609353045 ], [ -4.868224821, 56.60942555 ], [ -4.867621657, 56.609445755 ], [ -4.866908843, 56.609374107 ], [ -4.865028155, 56.609398583 ], [ -4.864135999, 56.609519808 ], [ -4.863441715, 56.609542091 ], [ -4.862943904, 56.609597598 ], [ -4.861932156, 56.609797064 ], [ -4.861099779, 56.609954642 ], [ -4.860917085, 56.610103559 ], [ -4.860056692, 56.610192564 ], [ -4.85817977, 56.610720198 ], [ -4.856783552, 56.611117214 ], [ -4.855916476, 56.611420267 ], [ -4.854834402, 56.611596121 ], [ -4.854359795, 56.611808357 ], [ -4.854032796, 56.611859906 ], [ -4.852397292, 56.612262364 ], [ -4.851890406, 56.612349493 ], [ -4.851929296, 56.612562524 ], [ -4.851422794, 56.613259952 ], [ -4.851266595, 56.613609586 ], [ -4.851237567, 56.614132475 ], [ -4.850875873, 56.614329524 ], [ -4.850735816, 56.614590701 ], [ -4.850842576, 56.614795884 ], [ -4.850724377, 56.614892972 ], [ -4.850856715, 56.615437328 ], [ -4.850893685, 56.61577624 ], [ -4.850382437, 56.616108845 ], [ -4.850202961, 56.616452719 ], [ -4.850389466, 56.616656074 ], [ -4.850542247, 56.617017499 ], [ -4.849896115, 56.617680369 ], [ -4.849516217, 56.618544766 ], [ -4.849354298, 56.618819025 ], [ -4.850053843, 56.619620934 ], [ -4.849739529, 56.619993064 ], [ -4.849372448, 56.620725037 ], [ -4.849361916, 56.621190875 ], [ -4.849101264, 56.621366726 ], [ -4.849044238, 56.621670041 ], [ -4.848882122, 56.622850329 ], [ -4.848498365, 56.623664475 ], [ -4.847909126, 56.624024021 ], [ -4.84734037, 56.624049628 ], [ -4.847009943, 56.624057193 ], [ -4.845843364, 56.624480279 ], [ -4.845535721, 56.624487319 ], [ -4.844593358, 56.624401916 ], [ -4.844209835, 56.624159015 ], [ -4.8437327, 56.624188802 ], [ -4.843280767, 56.624098466 ], [ -4.842728126, 56.624186602 ], [ -4.842269885, 56.624467624 ], [ -4.842251764, 56.62468196 ], [ -4.840899433, 56.625216205 ], [ -4.840181646, 56.625081596 ], [ -4.839299692, 56.624736809 ], [ -4.838912756, 56.624751934 ], [ -4.838117257, 56.624342248 ], [ -4.836847781, 56.624308294 ], [ -4.835956039, 56.624592889 ], [ -4.835414043, 56.625127467 ], [ -4.83471945, 56.625149593 ], [ -4.833796133, 56.625774648 ], [ -4.832411333, 56.627096014 ], [ -4.831573247, 56.627945615 ], [ -4.830715117, 56.629594724 ], [ -4.829318313, 56.630759029 ], [ -4.829538498, 56.630955357 ], [ -4.828972589, 56.631477865 ], [ -4.82851839, 56.631815368 ], [ -4.827835779, 56.632151771 ] ] } }
]
}

L.geoJSON(route, {color:'red',opacity:0.5}).addTo(map);
*/

/*
var routeCoords = [
    [56.65, -5.17],
    [56.65, -5.9]
];

var polyline = L.polyline(routeCoords,{color:'red',opacity: 0.5}).addTo(map);
*/

/*
map.on('load', function() {
    fetch('../GPX/creise.gpx')
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, "text/xml"))
        .then(doc => {
	    data = toGeoJSON.gpx(doc);
	    L.geoJSON(data).addTo(map);
            var points = [];
            const nodes = [...doc.getElementByTagName('rtept')];
            nodes.forEach(node => {
                var lat = node.getAttribute("lat");
                var lon = node.getAttribute("lon");
                var point = new L.LatLng(lat, lon);
                points.push(point);
            })
            var poly = new L.polyline(points).addTo(map);
        })
});
*/

/*
function showRoute() {
    fetch('../GPX/creise/routes.geojson')
        .then((resp) => {
	    return resp.json();
	})
	.then((geojson) => {
	    const route = geojson;
	    L.geoJSON(route).addTo(map);
	});
}
*/

fetch('../GPX/creise/routes.geojson')
    .then(
        res => res.json())
    .then(
        data => L.geoJSON(data).addTo(map))
