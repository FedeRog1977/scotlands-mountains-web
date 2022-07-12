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
            const inpLocation = document.getElementById("inpLocation").value.toLowerCase();
            const locationPre = document.getElementById("locationPre");
            const locationOut = document.getElementById("locationOut");
	    let landmassName = "";
	    let landmassType = "";
	    let landmassSubtype = "";
            let landmassSubsubtype = "";
            let landmassParentLandmass = "";
            let landmassParentPeak = "";
            let landmassRegion = "";
            let landmassSubregion = "";
            let landmassInformalRegion = "";
	    let hillTypeStr = "";
            let hillType = "";
            let hillBuff = "";
            let hillName = "";
	    for (var i in hills.landmass) {
		for (var k in hills.landmass[i].munro) {
        	    if (hills.landmass[i].munro[k].name.toLowerCase().match(inpLocation)) {
			landmassName = hills.landmass[i].name;
			landmassType = hills.landmass[i].type;

                        if (hills.landmass[i].subtype == null) {
                            landmassSubtype = "";
                        } else {
                            landmassSubtype = " (" + hills.landmass[i].subtype + ")";
                        }

                        if (hills.landmass[i].subsubtype == null) {
                            landmassSubsubtype = "";
                        } else {
                            landmassSubsubtype = "<b>Prominent feature</b>: " + hills.landmass[i].subsubtype + "<br>";
                        }

                        landmassParentLandmass = hills.landmass[i].parentlandmass;
                        landmassParentPeak = hills.landmass[i].parentpeak;
                        landmassRegion = hills.landmass[i].region;
                        landmassSubregion = hills.landmass[i].subregion;
                        landmassInformalRegion = hills.landmass[i].informalregion;

                    	hillTypeStr = "Munro";
                    	hillType = hills.landmass[i].munro;
		    	hillBuff = hills.landmass[i].munro[k];
                    	hillName = hills.landmass[i].munro[k].name;
		    }
		}
		for (var k in hills.landmass[i].munrotop) {
                    if (hills.landmass[i].munrotop[k].name.toLowerCase().match(inpLocation)) {
			landmassName = hills.landmass[i].name;
			landmassType = hills.landmass[i].type;

                        if (hills.landmass[i].subtype == null) {
                            landmassSubtype = "";
                        } else {
                            landmassSubtype = " (" + hills.landmass[i].subtype + ")";
                        }

                        if (hills.landmass[i].subsubtype == null) {
                            landmassSubsubtype = "";
                        } else {
                            landmassSubsubtype = "<b>Prominent feature</b>: " + hills.landmass[i].subsubtype + "<br>";
                        }

                        landmassParentLandmass = hills.landmass[i].parentlandmass;
                        landmassParentPeak = hills.landmass[i].parentpeak;
                        landmassRegion = hills.landmass[i].region;
                        landmassSubregion = hills.landmass[i].subregion;
                        landmassInformalRegion = hills.landmass[i].informalregion;

                    	hillTypeStr = "Munro Top";
                    	hillType = hills.landmass[i].munrotop;
		    	hillBuff = hills.landmass[i].munrotop[k];
                    	hillName = hills.landmass[i].munrotop[k].name;
		    }
		}
		for (var k in hills.landmass[i].corbett) {
                    if (hills.landmass[i].corbett[k].name.toLowerCase().match(inpLocation)) {
			landmassName = hills.landmass[i].name;
			landmassType = hills.landmass[i].type;

                        if (hills.landmass[i].subtype == null) {
                            landmassSubtype = "";
                        } else {
                            landmassSubtype = " (" + hills.landmass[i].subtype + ")";
                        }

                        if (hills.landmass[i].subsubtype == null) {
                            landmassSubsubtype = "";
                        } else {
                            landmassSubsubtype = "<b>Prominent feature</b>: " + hills.landmass[i].subsubtype + "<br>";
                        }

                        landmassParentLandmass = hills.landmass[i].parentlandmass;
                        landmassParentPeak = hills.landmass[i].parentpeak;
                        landmassRegion = hills.landmass[i].region;
                        landmassSubregion = hills.landmass[i].subregion;
                        landmassInformalRegion = hills.landmass[i].informalregion;

                    	hillTypeStr = "Corbett";
                    	hillType = hills.landmass[i].corbett;
		    	hillBuff = hills.landmass[i].corbett[k];
                    	hillName = hills.landmass[i].corbett[k].name;
		    }
		}
		for (var k in hills.landmass[i].corbetttop) {
                    if (hills.landmass[i].corbetttop[k].name.toLowerCase().match(inpLocation)) {
			landmassName = hills.landmass[i].name;
			landmassType = hills.landmass[i].type;

                        if (hills.landmass[i].subtype == null) {
                            landmassSubtype = "";
                        } else {
                            landmassSubtype = " (" + hills.landmass[i].subtype + ")";
                        }

                        if (hills.landmass[i].subsubtype == null) {
                            landmassSubsubtype = "";
                        } else {
                            landmassSubsubtype = "<b>Prominent feature</b>: " + hills.landmass[i].subsubtype + "<br>";
                        }

                        landmassParentLandmass = hills.landmass[i].parentlandmass;
                        landmassParentPeak = hills.landmass[i].parentpeak;
                        landmassRegion = hills.landmass[i].region;
                        landmassSubregion = hills.landmass[i].subregion;
                        landmassInformalRegion = hills.landmass[i].informalregion;

                    	hillTypeStr = "Corbett Top";
                    	hillType = hills.landmass[i].corbetttop;
	            	hillBuff = hills.landmass[i].corbetttop[k];
                    	hillName = hills.landmass[i].corbetttop[k].name;
		    }
		}
                for (var k in hillType) {
                    if (hillName.toLowerCase().match(inpLocation)) {
                        let hillElev = hillBuff.elevation.toLocaleString("en-US");

                        let hillLat = Math.abs(hillBuff.lat);
                        let hillLatDir = "";
                        if (hillBuff.lat < 0) {
                            hillLatDir = "S";
                        } else if (hillBuff.lat > 0) {
                            hillLatDir = "N";
                        }

                        let hillLon = Math.abs(hillBuff.lon);
                        let hillLonDir = "";
                        if (hillBuff.lon < 0) {
                            hillLonDir = "W";
                        } else if (hillBuff.lon > 0) {
                            hillLonDir = "E";
                        }

                        let hillProm = hillBuff.prominence.toLocaleString("en-US");
                        let hillIso = hillBuff.isolation;
                        let hillSum = hillBuff.summit;
                        let hillImg = hillBuff.image;

                        locationOut.innerHTML =
                            "<h1>" + hillName + "</h1>"
                            + hillName + " is a <b>" + hillTypeStr + "</b> on the <b>" + landmassName + "</b> " + landmassType + landmassSubtype
			    + "<div class='overview-separate'><p style='text-align:center;'>"
                            + landmassSubsubtype
                            + "<b>Parent Landmass</b>: " + landmassParentLandmass + "<br>"
                            + "<b>Parent Peak</b>: " + landmassParentPeak + "<br>"
                            + "<b>Region</b>: " + landmassRegion + "<br>"
                            + "<b>Sub-Region</b>: " + landmassSubregion + "<br>"
                            + "<b>Informal Region</b>: " + landmassInformalRegion
			    + "</p></div>"
			    + "<div class='overview-separate'><p style='text-align:center;'>"
                            + "<b>Elevation</b>: " + hillElev + "ft<br>"
                            + "<b>Prominance</b>: " + hillProm + "ft<br>"
                            + "<b>Isolation</b>: " + hillIso + "mi<br>"
                            + "<b>Located at</b>: "
                            + hillLat + "&deg;" + hillLatDir + ", "
                            + hillLon + "&deg;" + hillLonDir + "<br>"
                            + "<b>Summit Feature</b>: " + hillSum
			    + "</p></div>"
                            + "<div><p style='text-align:center;'>"
			    + "<img src='./Photos/" + hillImg + "' class='imghill'></img>"
			    + "</p></div>";

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
    const convConstMi = 1.609;

    // `Number of tops achieved per vertical meter gained per horizontal meter'
    var multiplier = nTops / ((convConstFt * elev) / ((convConstMi * dist) * 1000));

    // Subjective survey-based statistics
    const typeWeight = 0.5;
    const stageWeight = 0.1;
    const terrTypeWeight = 0.2;
    const terrDiffWeight = 0.2;

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

    if (type.includes("walk")) {
        typeValues = [0.25];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("hillwalk")) {
        typeValues = [0.5];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("ridgewalk")) {
        typeValues = [0.75];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("scramble")) {
        typeValues = [1.5];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("climb")) {
        typeValues = [2];
        typeScore = typeElementWeight * typeValues[0];
    } else if (type.includes("hillwalk")
        && type.includes("ridgewalk")) {
        typeValues = [0.5, 0.75];
        typeScore = (typeElementWeight * typeValues[0])
            + (typeElementWeight * typeValues[1]);
    } else if (type.includes("hillwalk")
        && type.includes("scramble")) {
        typeValues = [0.5, 1.5];
        typeScore = (typeElementWeight * typeValues[0])
            + (typeElementWeight * typeValues[1]);
    } else if (type.includes("hillwalk")
        && type.includes("scramble")
        && type.includes("climb")) {
        typeValues = [0.5, 1.5, 2];
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
 * Describe a Route's Difficulty
 */
function describeRoute(score) {
    let diff = "";

    if (score >= 0 && score <= 33.3334) {
        diff = "Playground (Amateur)";
    } else if (score > 33.3333 && score <= 66.6667) {
	diff = "Normie (Easy)";
    } else if (score > 66.6667 && score <= 100) {
        diff = "Trad (Moderate)";
    } else if (score > 100) {
        diff = "GigaChad (Challenging)";
    }

    return diff;
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

                        let routeDiff = describeRoute(routeScore);

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
			    + "<div class='overview-separate'><p style='text-align:center;'>"
                            + "<b>Distance</b>: " + routeDist + "mi<br>" + "<b>Elevation Gain:</b> " + routeElev + "ft<br>"
                            + "<b>Estimated Duration</b>: " + routeTime + "hrs (average user)"
			    + "</p></div>"
			    + "<div class='overview-separate'><p style='text-align:center;'>"
                            + "<b>Relative Route Score:</b> " + routeScore + "<br>"
                            + "<b>Route Difficulty:</b> " + routeDiff + "<br>"
                            + "<b>Movement Dynamic(s)</b>: " + routeType + "<br>"
                            + "<b>Route Stage(s)</b>: " + routeStage + "<br>"
                            + "<b>Terrain Type(s)</b>: " + routeTerrainType + "<br>"
                            + "<b>Terrain Surface(s)</b>: " + routeTerrainDiff + "<br>"
                            + routeGear
			    + "</p></div>"
			    + "<div class='overview-separate'><p style='text-align:center;'>"
                            + routeMunros
                            + routeMunroTops
                            + routeCorbetts
                            + routeCorbettTops
			    + "</p></div>"
                            + "<a href='./GPX/" + routeGPX + "'>Download GPX</a>";

                    statsPre.classList.add("hidden");
                    }
                }
            }
        })
}
