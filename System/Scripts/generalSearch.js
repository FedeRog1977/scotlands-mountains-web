let locations = 'https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/JSON/Hills.json';

function searchLocation() {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
	    const inpMunro = document.getElementById("inpLocation").value.toLowerCase();
	    const locationPre = document.getElementById("locationPre");
            const locationOut = document.getElementById("locationOut");
	    for (var i in hills.landmass) {
	        for (var k in hills.landmass[i].munro) {
                    if (hills.landmass[i].munro[k].name.toLowerCase().match(inpMunro)) {
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
			    landmassSubsubtype = "Prominent feature: " + hills.landmass[i].subsubtype + "<br>";
			}

	                let hillElev = hills.landmass[i].munro[k].elevation;

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

	                let hillProm = hills.landmass[i].munro[k].prominence;
	                let hillIso = hills.landmass[i].munro[k].isolation;
	                let hillSum = hills.landmass[i].munro[k].summit;
			let hillImg = hills.landmass[i].munro[k].image;

	                locationOut.innerHTML = 
			    "<h1>" + hillName + "</h1>"
			    + hillName + " is a Munro on the <b>" + landmassName + "</b> " + landmassType + landmassSubtype + "<br>"
			    + landmassSubsubtype 
			    + "Parent Landmass: " + landmassParentLandmass + "<br>"
			    + "Parent Peak: " + landmassParentPeak + "<br>"
			    + "Region: " + landmassRegion + "<br>"
			    + "Sub-Region: " + landmassSubregion + "<br>"
			    + "Informal Region: " + landmassInformalRegion + "<br><hr>"
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
			let routeElev = hills.landmass[i].route[k].elevationgain;
			let routeTime = hills.landmass[i].route[k].stdtime;
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
			    routeMunroTops = "<b>Munro Top:</b>" + hills.landmass[i].route[k].munrotop + "<br>";
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
