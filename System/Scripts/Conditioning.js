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
	    let abilityName = "";
	    let abilityDesc = "";
	    let abilityImg = "";
            for (var i in attributes.elementshill) {
		if (attributes.elementshill[i].name.toLowerCase() === selectAbility) {
		    //abilityName = attributeBuff.name.charAt(0).toUpperCase() + attributeBuff.name.slice(1);
		    abilityName = attributes.elementshill[i].name;
		    abilityDesc = attributes.elementshill[i].desc;
		    abilityImg = "";
		}
	    }
            for (var i in attributes.elementsroute) {
		if (attributes.elementsroute[i].name.toLowerCase() === selectAbility) {
		    abilityName = attributes.elementsroute[i].name;
		    abilityDesc = attributes.elementsroute[i].desc;
		    abilityImg = "";
		}
	    }
            for (var i in attributes.summitfeats) {
		if (attributes.summitfeats[i].name.toLowerCase() === selectAbility) {
		    abilityName = attributes.summitfeats[i].name;
		    abilityDesc = "";
		    abilityImg = attributes.summitfeats[i].image;
		}
	    }
            for (var i in attributes.type) {
		if (attributes.type[i].name.toLowerCase() === selectAbility) {
		    abilityName = attributes.type[i].name;
		    abilityDesc = attributes.type[i].desc;
		    abilityImg = attributes.type[i].image;
		}
	    }
            for (var i in attributes.stage) {
		if (attributes.stage[i].name.toLowerCase() === selectAbility) {
		    abilityName = attributes.stage[i].name;
		    abilityDesc = attributes.stage[i].desc;
		    abilityImg = attributes.stage[i].image;
		}
	    }
            for (var i in attributes.terraintype) {
		if (attributes.terraintype[i].name.toLowerCase() === selectAbility) {
		    abilityName = attributes.terraintype[i].name;
		    abilityDesc = attributes.terraintype[i].desc;
		    abilityImg = attributes.terraintype[i].image;
		}
	    }
            for (var i in attributes.terraindiff) {
		if (attributes.terraindiff[i].name.toLowerCase() === selectAbility) {
		    abilityName = attributes.terraindiff[i].name;
		    abilityDesc = "";
		    abilityImg = attributes.terraindiff[i].image;
		}
	    }

	    abilityOut.innerHTML =
	        "<h3>" + abilityName + "</h3>"
		+ abilityDesc + "<br>"
		+ "<img src='" + abilityImg + "' style='width:250px;'></img>";

	    abilityPre.classList.add("hidden");
	})
}

	    let equipmentName = "";
	    let equipmentDesc = "";
	    let equipmentImg = "";
	    let equipmentComp = "";
	    let equipmentFeat = "";
