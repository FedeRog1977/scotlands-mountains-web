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
		if (attributeType = attributes.summitfeats) {
		    let abilityName = attributeBuff.name.charAt(0).toUpperCase() + attributeBuff.name.slice(1);
		    let abilityImg = attributeBuff.image;

		    abilityOut.innerHTML =
		        "<h3>" + abilityName + "</h3>"
		        + "<img src='" + abilityImg + "' style='width:250px;'></img>";
		} else {
		    let abilityName = attributeBuff.name.charAt(0).toUpperCase() + attributeBuff.name.slice(1);
		    let abilityDesc = desc; 
		    let abilityImg = attributeBuff.image;

		    abilityOut.innerHTML =
		        "<h3>" + abilityName + "</h3>"
		        + abilityDesc + "<br>"
		        + "<img src='" + abilityImg + "' style='width:250px;'></img>";
		}

		abilityPre.classList.add("hidden");
	    }
	})
}
