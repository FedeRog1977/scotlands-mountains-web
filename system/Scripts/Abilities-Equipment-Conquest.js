const selectAbilityList = document.getElementById("selectAbility");
const selectAbilityRoutesList = document.getElementById("selectAbilityRoutes");
const selectAbilityRoutesTypeList = document.getElementById("selectAbilityRoutesType");
const selectAbilityRoutesStageList = document.getElementById("selectAbilityRoutesStage");
const selectEquipmentList = document.getElementById("selectEquipment");
const selectEquipmentTechnicalList = document.getElementById("selectEquipmentTechnical");
const selectEquipmentFootwearList = document.getElementById("selectEquipmentFootwear");

const selectAbilityRoutesCont = document.getElementById("selectAbilityRoutesCont");
const selectAbilityRoutesTypeCont = document.getElementById("selectAbilityRoutesTypeCont");
const selectAbilityRoutesStageCont = document.getElementById("selectAbilityRoutesStageCont");
const selectEquipmentTechnicalCont = document.getElementById("selectEquipmentTechnicalCont");
const selectEquipmentFootwearCont = document.getElementById("selectEquipmentFootwearCont");

const selectAbilityListCont = `
    <option>Route Elements</option>
    <option>Route Types</option>
    <option>Route Stages</option>
`;

function showAbilityListCont() {
    if (selectAbilityList.value === "Route Elements") {
	selectAbilityRoutesCont.classList.remove("hidden");
	selectAbilityRoutesTypeCont.classList.add("hidden");
	selectAbilityRoutesStageCont.classList.add("hidden");
    } else if (selectAbilityList.value === "Route Types") {
	selectAbilityRoutesCont.classList.add("hidden");
	selectAbilityRoutesTypeCont.classList.remove("hidden");
	selectAbilityRoutesStageCont.classList.add("hidden");
    } else if (selectAbilityList.value === "Route Stages") {
	selectAbilityRoutesCont.classList.add("hidden");
	selectAbilityRoutesTypeCont.classList.add("hidden");
	selectAbilityRoutesStageCont.classList.remove("hidden");
    }
}

const selectAbilityRoutesListCont = `
    <option>Total Distance</option>
    <option>Total Elevation Gain</option>
    <option>Standard Time/Duration</option>
`;

const selectAbilityRoutesTypeListCont = `
    <option>Walk</option>
    <option>Hillwalk</option>
    <option>Ridgewalk</option>
    <option>Scramble</option>
    <option>Climb</option>
`;

const selectAbilityRoutesStageListCont = `
    <option>Walk-In</option>
    <option>Approach</option>
    <option>On-Hill</option>
    <option>Walk-Out</option>
`;

const selectEquipmentListCont = `
    <option>Technical Equipment</option>
    <option>Footwear</option>
`;

function showEquipmentListCont() {
    if (selectEquipmentList.value === "Technical Equipment") {
	selectEquipmentTechnicalCont.classList.remove("hidden");
	selectEquipmentFootwearCont.classList.add("hidden");
    } else if (selectEquipmentList.value === "Footwear") {
	selectEquipmentTechnicalCont.classList.add("hidden");
	selectEquipmentFootwearCont.classList.remove("hidden");
    }
}

const selectEquipmentTechnicalListCont = `
    <option>Ice Axe, Safety (Short)</option>
    <option>Ice Axe, Safety (Long)</option>
    <option>Ice Axe(s), Ice Climbing (Notched)</option>
    <option>Helmet</option>
    <option>Harness and Ropes</option>
    <option>Belay Loop and Carabiners</option>
    <option>Cams, Nuts and Belay Fixtures</option>
    <option>Quickdraws and Slings</option>
    <option>Chalk Bag and Chalk</option>
`;

const selectEquipmentFootwearListCont = `
    <option>Climbing Shoes</option>
    <option>Crampons, Flexible (C1)</option>
    <option>Crampons, Semi-Rigid (C2)</option>
    <option>Crampons, Rigid (C3)</option>
`;

selectAbilityList.innerHTML = selectAbilityListCont;
selectAbilityRoutesList.innerHTML = selectAbilityRoutesListCont;
selectAbilityRoutesTypeList.innerHTML = selectAbilityRoutesTypeListCont;
selectAbilityRoutesStageList.innerHTML = selectAbilityRoutesStageListCont;
selectEquipmentList.innerHTML = selectEquipmentListCont;
selectEquipmentTechnicalList.innerHTML = selectEquipmentTechnicalListCont;
selectEquipmentFootwearList.innerHTML = selectEquipmentFootwearListCont;
