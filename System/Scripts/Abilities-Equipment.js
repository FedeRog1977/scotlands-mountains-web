const selectAbilityList = document.getElementById("abilitySelectComponent");
const selectEquipmentList = document.getElementById("equipmentSelectComponent");

const selectAbilityListCont = `
    <option>Hill Elevation</option>
    <option>Hill Prominance</option>
    <option>Hill Terrain</option>
    <option>Route Distance</option>
    <option>Route Total Elevation Gain</option>
`;

const selectEquipmentListCont = `
    <option>...</option>
`;

selectAbilityList.innerHTML = selectAbilityListCont;
selectEquipmentList.innerHTML = selectEquipmentListCont;
