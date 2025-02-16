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


/*
 * Select an Equipment Component
 */
function selectEquipment(component) {
    fetch(attributes)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const attributes = data;
            const selectEquipment = document.getElementById("selectEquipment" + component).value.toLowerCase();
            const equipmentPre = document.getElementById("equipmentPre");
            const equipmentOut = document.getElementById("equipmentOut");
            equipmentOut.innerHTML = "";
	    let equipmentName = "";
	    let equipmentDesc = "";
	    let equipmentImg = "";
	    let equipmentComp = "";
	    let equipmentFeat = "";
	    let equipmentAdv = "";
	    let equipmentDang = "";
            for (var i in attributes.packs) {
		if (attributes.packs[i].name.toLowerCase() === selectEquipment) {
		    equipmentName = attributes.packs[i].name;
		    equipmentDesc = attributes.packs[i].desc;
		    equipmentImg = attributes.packs[i].image;
	    	    equipmentComp = "";
	    	    equipmentFeat = "";
		}
	    }
            for (var i in attributes.technical) {
		if (attributes.technical[i].name.toLowerCase() === selectEquipment) {
		    equipmentName = attributes.technical[i].name;
		    equipmentDesc = attributes.technical[i].desc;
		    equipmentImg = attributes.technical[i].image;
	    	    equipmentComp = "";
	    	    equipmentFeat = "";
		}
	    }
            for (var i in attributes.shoes) {
		if (attributes.shoes[i].name.toLowerCase() === selectEquipment) {
		    equipmentName = attributes.shoes[i].name;
		    equipmentDesc = attributes.shoes[i].desc;

		    if (attributes.shoes[i].comp === null) {
			equipmentComp = "";
		    } else {
		        equipmentComp = "<br><b>Compatability</b>:<br>" + attributes.shoes[i].comp.join("<br>");
		    }

		    if (attributes.shoes[i].feat === null) {
			equipmentFeat = "";
		    } else {
		        equipmentFeat = "<br><b>Features</b>:<br>" + attributes.shoes[i].feat.join("<br>");
		    }

		    if (attributes.shoes[i].adv === null) {
			equipmentAdv = "";
		    } else {
		        equipmentAdv = "<br><b>Advantages</b>:<br>" + attributes.shoes[i].adv.join("<br>");
		    }

		    if (attributes.shoes[i].dangers === null) {
			equipmentDang = "";
		    } else {
		        equipmentDang = "<br><b>Dangers</b>:<br>" + attributes.shoes[i].dangers.join("<br>");
		    }

		    equipmentImg = attributes.shoes[i].image;
		}
	    }
            for (var i in attributes.clothing) {
		if (attributes.clothing[i].name.toLowerCase() === selectEquipment) {
		    equipmentName = attributes.clothing[i].name;
		    equipmentDesc = attributes.clothing[i].desc;
		    equipmentImg = attributes.clothing[i].image;
	    	    equipmentComp = "";
	    	    equipmentFeat = "";
		}
	    }

	    equipmentOut.innerHTML =
	        "<h3>" + equipmentName + "</h3>"
		+ equipmentDesc + "<br>"
		+ equipmentComp + "<br>"
		+ equipmentFeat + "<br>"
		+ "<img src='" + equipmentImg + "' style='width:250px;'></img>";

	    equipmentPre.classList.add("hidden");
	})
}
