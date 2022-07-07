/*
 * Select an Ability Attribute
 */
function selectAbility(component) {
    fetch(attributes)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const attributes = data;
            const selectAbility = document.getElementById("selectAbility" + component).value.toLowerCase();
            const abilityPre = document.getElementById("abilityPre");
            const abilityOut = document.getElementById("abilityOut");
            abilityOut.innerHTML = "";
            let attributeType = "";
            let attributeBuff = "";
            for (var i in attributes.elementshill) {
		if (attributes.elementshill[i].name.toLowerCase() === selectAbility) {
		    attributeType = attributes.elementshill;
		    attributeBuff = attributes.elementshill[i];
		}
	    }
            for (var i in attributes.elementsroute) {
		if (attributes.elementsroute[i].name.toLowerCase() === selectAbility) {
		    attributeType = attributes.elementsroute;
		    attributeBuff = attributes.elementsroute[i];
		}
	    }
            for (var i in attributes.summitfeats) {
		if (attributes.summitfeats[i].name.toLowerCase() === selectAbility) {
		    attributeType = attributes.summitfeats;
		    attributeBuff = attributes.summitfeats[i];
		}
	    }
            for (var i in attributes.type) {
		if (attributes.type[i].name.toLowerCase() === selectAbility) {
		    attributeType = attributes.type;
		    attributeBuff = attributes.type[i];
		}
	    }
            for (var i in attributes.stage) {
		if (attributes.stage[i].name.toLowerCase() === selectAbility) {
		    attributeType = attributes.stage;
		    attributeBuff = attributes.stage[i];
		}
	    }
            for (var i in attributes.terraintype) {
		if (attributes.terraintype[i].name.toLowerCase() === selectAbility) {
		    attributeType = attributes.terraintype;
		    attributeBuff = attributes.terraintype[i];
		}
	    }
            for (var i in attributes.terraindiff) {
		if (attributes.terraindiff[i].name.toLowerCase() === selectAbility) {
		    attributeType = attributes.terraindiff;
		    attributeBuff = attributes.terraindiff[i];
		}
	    }

	    for (var i in attributeType) {
		let abilityName = attributeBuff.name.charAt(0).toUpperCase() + attributeBuff.name.slice(1);
		let abilityDesc = attributeBuff.desc;
		let abilityImg = attributeBuff.image;

		abilityOut.innerHTML =
		    "<h3>" + abilityName + "</h3>"
		    + abilityDesc + "<br>"
		    + abilityImg;

		abilityPre.classList.add("hidden");
	    }
	})
}

/*

                for (var k in attributes.type.) {
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
}*/
