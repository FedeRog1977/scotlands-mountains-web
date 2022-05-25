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
			    landmassSubsubtype = "<b>Prominent feature</b>: " + hills.landmass[i].subsubtype + "<br>";
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

function scoreRoute(elev,dist,n_tops,type,stage,terrType,terrDiff) {
    const conv_const_ft = 0.3048;
    const conv_const_mi = 1.60934;

    // `Number of tops achieved per vertical meter gained per horizontal meter'
    var multiplier = n_tops / ((conv_const_ft * elev) / ((conv_const_mi * dist) * 1000));

    // Subjective survey-based statistics
    const typeWeight = 0.2;
    const stageWeight = 0.2;
    const terrTypeWeight = 0.25;
    const terrDiffWeight = 0.35;

    var typeElementWeight = 1 / type.length;
    var stageElementWeight = 1 / stage.length;
    var terrTypeElementWeight = 1 / terrType.length;
    var terrDiffElementWeight = 1 / terrDiff.length;

    var typeValues = [];
    var stageValues = [];
    var terrTypeValues = [];
    //var terrDiffValues = [];

    var typeScore = 0;
    var stageScore = 0;
    var terrTypeScore = terrTypeElementWeight * terrType.length;
    var terrDiffScore = terrDiffElementWeight * terrDiff.length;

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
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1]);
    } else if (terrType.includes("road")
        && terrType.includes("farm path")
        && terrType.includes("footpath erosion")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1])
	    + (terrTypeElementWeight * terrTypeValues[2]);
    } else if (terrType.includes("road")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1])
	    + (terrTypeElementWeight * terrTypeValues[2]);
    } else if (terrType.includes("road")
        && terrType.includes("forestry commission road")
        && terrType.includes("off-road")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1])
	    + (terrTypeElementWeight * terrTypeValues[2])
	    + (terrTypeElementWeight * terrTypeValues[3])
	    + (terrTypeElementWeight * terrTypeValues[4]);
    } else if (terrType.includes("road")
        && terrType.includes("off-road")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1])
	    + (terrTypeElementWeight * terrTypeValues[2])
	    + (terrTypeElementWeight * terrTypeValues[3]);
    } else if (terrType.includes("road")
        && terrType.includes("farm path")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1])
	    + (terrTypeElementWeight * terrTypeValues[2])
	    + (terrTypeElementWeight * terrTypeValues[3]);
    } else if (terrType.includes("path")
        && terrType.includes("footpath erosion")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1]);
    } else if (terrType.includes("path")
        && terrType.includes("footpath erosion")
        && terrType.includes("off-path")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1])
	    + (terrTypeElementWeight * terrTypeValues[2]);
    } else if (terrType.includes("forestry commission road")
        && terrType.includes("path")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1]);
    } else if (terrType.includes("farm path")
        && terrType.includes("path")
        && terrType.includes("footpath erosion")) {
	terrTypeValues = [];
	terrTypeScore = (terrTypeElementWeight * terrTypeValues[0])
	    + (terrTypeElementWeight * terrTypeValues[1])
	    + (terrTypeElementWeight * terrTypeValues[2]);
    }

    [road, path], 2
    [road, farm path, footpath erosion], 3
    [road, path, footpath erosion], 3
    [road, forestry commission road, off-road, path, footpath erosion], 5
    [road, off-road, path, footpath erosion], 4
    [road, farm path, path, footpath erosion], 4
    [path, footpath erosion], 2
    [path, footpath erosion, off-path], 3
    [forestry commission road, path], 2
    [farm path, path, footpath erosion], 3

    [concrete, stone staircase, broken rock, rocky talus, crag, smooth slab],
    [concrete, broken rock, grass, grass with scattered rock],
    [grass, grass with scattered rock],
    [grass, broken rock, grass with scattered rock],
    [concrete, grass, broken rock, grass with scattered rock, crag, rocky talus, talus (coarse scree)],
    [concrete, grass, broken rock, grass with scattered rock],
    [concrete, grass, broken rock, grass with scattered rock, rocky talus, talus (coarse scree)],
    [concrete, grass, grass with scattered rock, rocky talus, talus (coarse scree)],
    [concrete, grass, grass with scattered rock],
    [concrete, grass, grass with scattered rock, rocky talus],
    [concrete, grass, grass with scattered rock, rocky talus, talus (coarse scree)],
    [concrete, grass, broken rock, talus (coarse scree)],
    [concrete, grass, broken rock, rocky talus, talus (coarse scree), crag, notched slab]
    [concrete, grass, broken rock, talus (coarse scree), crag (grade 1 (easy)), notched slab (grade 1 (easy))]
    [grass, grass with scattered rock]
    [grass, broken rock, rocky talus],
    [grass, broken rock, crag],
    [grass, broken rock, grass with scattered rock, crag],
    [grass, broken rock, crag, notched slab],
    [grass, stone staircase, notched slab],
    [grass, broken rock, rocky talus, notched slab],
    [grass, broken rock, rocky talus, scree (fine scree), crag (grade 2 (moderate)), notched slab (grade 2 (moderate))],
    [grass, broken rock, grass with scattered rock, scree (fine scree), crag (grade 2 (moderate)), notched slab (grade 2 (moderate))],
    [grass, broken rock, grass with scattered rock, rocky talus]

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
			    + "<b>Relative Route Score:</b> "
			    + scoreRoute(
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
			    )
			    + "<br>"
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
