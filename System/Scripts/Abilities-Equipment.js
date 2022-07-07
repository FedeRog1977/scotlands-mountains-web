const selectAbilityList = document.getElementById("selectAbility");
const selectAbilityHillsList = document.getElementById("selectAbilityHills");
const selectAbilityRoutesList = document.getElementById("selectAbilityRoutes");
const selectAbilitySummitList = document.getElementById("selectAbilitySummit");
const selectAbilityRoutesTypeList = document.getElementById("selectAbilityRoutesType");
const selectAbilityRoutesStageList = document.getElementById("selectAbilityRoutesStage");
const selectAbilityTerraintypeList = document.getElementById("selectAbilityTerraintype");
const selectAbilityTerraindiffList = document.getElementById("selectAbilityTerraindiff");
const selectEquipmentList = document.getElementById("selectEquipment");
const selectEquipmentPacksList = document.getElementById("selectEquipmentPacks");
const selectEquipmentTechnicalList = document.getElementById("selectEquipmentTechnical");
const selectEquipmentFootwearList = document.getElementById("selectEquipmentFootwear");
const selectEquipmentClothingList = document.getElementById("selectEquipmentClothing");

const selectAbilityHillsCont = document.getElementById("selectAbilityHillsCont");
const selectAbilityRoutesCont = document.getElementById("selectAbilityRoutesCont");
const selectAbilitySummitCont = document.getElementById("selectAbilitySummitCont");
const selectAbilityRoutesTypeCont = document.getElementById("selectAbilityRoutesTypeCont");
const selectAbilityRoutesStageCont = document.getElementById("selectAbilityRoutesStageCont");
const selectAbilityTerraintypeCont = document.getElementById("selectAbilityTerraintypeCont");
const selectAbilityTerraindiffCont = document.getElementById("selectAbilityTerraindiffCont");
const selectEquipmentPacksCont = document.getElementById("selectEquipmentPacksCont");
const selectEquipmentTechnicalCont = document.getElementById("selectEquipmentTechnicalCont");
const selectEquipmentFootwearCont = document.getElementById("selectEquipmentFootwearCont");
const selectEquipmentClothingCont = document.getElementById("selectEquipmentClothingCont");

const selectAbilityListCont = `
    <option>Hill Elements</option>
    <option>Route Elements</option>
    <option>Summit Features</option>
    <option>Route Types</option>
    <option>Route Stages</option>
    <option>Terrain Types</option>
    <option>Terrain Difficulties</option>
`;

function showAbilityListCont() {
    if (selectAbilityList.value === "Hill Elements") {
        selectAbilityHillsCont.classList.remove("hidden");
	selectAbilityRoutesCont.classList.add("hidden");
	selectAbilitySummitCont.classList.add("hidden");
	selectAbilityRoutesTypeCont.classList.add("hidden");
	selectAbilityRoutesStageCont.classList.add("hidden");
	selectAbilityTerraintypeCont.classList.add("hidden");
	selectAbilityTerraindiffCont.classList.add("hidden");
    } else if (selectAbilityList.value === "Route Elements") {
	selectAbilityHillsCont.classList.add("hidden");
	selectAbilityRoutesCont.classList.remove("hidden");
	selectAbilitySummitCont.classList.add("hidden");
	selectAbilityRoutesTypeCont.classList.add("hidden");
	selectAbilityRoutesStageCont.classList.add("hidden");
	selectAbilityTerraintypeCont.classList.add("hidden");
	selectAbilityTerraindiffCont.classList.add("hidden");
    } else if (selectAbilityList.value === "Summit Features") {
	selectAbilityHillsCont.classList.add("hidden");
	selectAbilityRoutesCont.classList.add("hidden");
	selectAbilitySummitCont.classList.remove("hidden");
	selectAbilityRoutesTypeCont.classList.add("hidden");
	selectAbilityRoutesStageCont.classList.add("hidden");
	selectAbilityTerraintypeCont.classList.add("hidden");
	selectAbilityTerraindiffCont.classList.add("hidden");
    } else if (selectAbilityList.value === "Route Types") {
	selectAbilityHillsCont.classList.add("hidden");
	selectAbilityRoutesCont.classList.add("hidden");
	selectAbilitySummitCont.classList.add("hidden");
	selectAbilityRoutesTypeCont.classList.remove("hidden");
	selectAbilityRoutesStageCont.classList.add("hidden");
	selectAbilityTerraintypeCont.classList.add("hidden");
	selectAbilityTerraindiffCont.classList.add("hidden");
    } else if (selectAbilityList.value === "Route Stages") {
	selectAbilityHillsCont.classList.add("hidden");
	selectAbilityRoutesCont.classList.add("hidden");
	selectAbilitySummitCont.classList.add("hidden");
	selectAbilityRoutesTypeCont.classList.add("hidden");
	selectAbilityRoutesStageCont.classList.remove("hidden");
	selectAbilityTerraintypeCont.classList.add("hidden");
	selectAbilityTerraindiffCont.classList.add("hidden");
    } else if (selectAbilityList.value === "Terrain Types") {
	selectAbilityHillsCont.classList.add("hidden");
	selectAbilityRoutesCont.classList.add("hidden");
	selectAbilitySummitCont.classList.add("hidden");
	selectAbilityRoutesTypeCont.classList.add("hidden");
	selectAbilityRoutesStageCont.classList.add("hidden");
	selectAbilityTerraintypeCont.classList.remove("hidden");
	selectAbilityTerraindiffCont.classList.add("hidden");
    } else if (selectAbilityList.value === "Terrain Difficulties") {
	selectAbilityHillsCont.classList.add("hidden");
	selectAbilityRoutesCont.classList.add("hidden");
	selectAbilitySummitCont.classList.add("hidden");
	selectAbilityRoutesTypeCont.classList.add("hidden");
	selectAbilityRoutesStageCont.classList.add("hidden");
	selectAbilityTerraintypeCont.classList.add("hidden");
	selectAbilityTerraindiffCont.classList.remove("hidden");
    }
}

const selectAbilityHillsListCont = `
    <option>Elevation</option>
    <option>Prominence</option>
    <option>Isolation</option>
    <option>Mountain (Landmass Type)**</option>
    <option>Mountain Range (Landmass Type)**</option>
    <option>Stand-Alone (Landmass Type)**</option>
    <option>Munro**</option>
    <option>Munro Top**</option>
    <option>Corbett**</option>
    <option>Corbett Top**</option>
    <option>Graham**</option>
    <option>Sub2000**</option>
    <option>Sub-Region**</option>
    <option>Informal Region**</option>
    <option>Region**</option>
`;

const selectAbilityRoutesListCont = `
    <option>Total Distance</option>
    <option>Total Elevation Gain</option>
    <option>Time/Duration</option>
    <option>Standard Time/Duration</option>
    <option>Moving Time/Duration</option>
`;

selectAbilitySummitListCont = `
    <option>Triangulation Station [Pillar (Square Hotine)]</option>
    <option>Triangulation Station [Pillar (Round Vanessa)]</option>
    <option>Triangulation Station [Pillar (Stonebuilt)]</option>
    <option>Triangulation Station [Block]</option>
    <option>Triangulation Station [Buried Block]</option>
    <option>Triangulation Station [Concrete Ring]</option>
    <option>Triangulation Station [Surface Block]</option>
    <option>Triangulation Station [Curry Stool]</option>
    <option>Triangulation Station [Bolt]</option>
    <option>Triangulation Station [Covered Bolt]</option>
    <option>Triangulation Station [Platform Bolt]</option>
    <option>Triangulation Station [Brass Plate]</option>
    <option>Triangulation Station [Cannon]</option>
    <option>Triangulation Station [Cut]</option>
    <option>Triangulation Station [Berntsen]</option>
    <option>Triangulation Station [Disc]</option>
    <option>Triangulation Station [Old-Style Rivet]</option>
    <option>Triangulation Station [New-Style Rivet]</option>
    <option>Triangulation Station [Fundamental Benchmark]</option>
    <option>GPS Station</option>
    <option>Weather Station</option>
    <option>Cairn</option>
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

const selectAbilityTerraintypeListCont = `
    <option>Road</option>
    <option>Forestry Commission Road</option>
    <option>Off-Road</option>
    <option>Farm Path</option>
    <option>Tourist Path</option>
    <option>Path</option>
    <option>Footpath Erosion</option>
    <option>Stalkers Path</option>
    <option>Shepherds Path</option>
    <option>Sheep Path</option>
    <option>Off-Path</option>
`;

const selectAbilityTerraindiffListCont = `
    <option>Grass</option>
    <option>Concrete</option>
    <option>Stone Staircase</option>
    <option>Broken Rock</option>
    <option>Grass with Scattered Rock</option>
    <option>Rocky Talus</option>
    <option>Talus (Coarse Scree)</option>
    <option>Scree (Fine Scree)</option>
    <option>Crag</option>
    <option>Crag, Grade 1 (Easy)</option>
    <option>Crag, Grade 2 (Moderate)</option>
    <option>Crag, Grade 3 (Challenging)</option>
    <option>Notched Slab</option>
    <option>Notched Slab, Grade 1 (Easy)</option>
    <option>Notched Slab, Grade 2 (Moderate)</option>
    <option>Notched Slab, Grade 3 (Challenging)</option>
    <option>Smooth Slab</option>
    <option>Smooth Slab, Grade 1 (Easy)</option>
    <option>Smooth Slab, Grade 2 (Moderate)</option>
    <option>Smooth Slab, Grade 3 (Challenging)</option>
`;

const selectEquipmentListCont = `
    <option>Packs and Travel</option>
    <option>Technical Equipment</option>
    <option>Footwear</option>
    <option>Clothing</option>
`;

function showEquipmentListCont() {
    if (selectEquipmentList.value === "Packs and Travel") {
	selectEquipmentPacksCont.classList.remove("hidden");
	selectEquipmentTechnicalCont.classList.add("hidden");
	selectEquipmentFootwearCont.classList.add("hidden");
	selectEquipmentClothingCont.classList.add("hidden");
    } else if (selectEquipmentList.value === "Technical Equipment") {
	selectEquipmentPacksCont.classList.add("hidden");
	selectEquipmentTechnicalCont.classList.remove("hidden");
	selectEquipmentFootwearCont.classList.add("hidden");
	selectEquipmentClothingCont.classList.add("hidden");
    } else if (selectEquipmentList.value === "Footwear") {
	selectEquipmentPacksCont.classList.add("hidden");
	selectEquipmentTechnicalCont.classList.add("hidden");
	selectEquipmentFootwearCont.classList.remove("hidden");
	selectEquipmentClothingCont.classList.add("hidden");
    } else if (selectEquipmentList.value === "Clothing") {
	selectEquipmentPacksCont.classList.add("hidden");
	selectEquipmentTechnicalCont.classList.add("hidden");
	selectEquipmentFootwearCont.classList.add("hidden");
    	selectEquipmentClothingCont.classList.remove("hidden");
    }
}

const selectEquipmentPacksListCont = `
    <option>Small Duffel</option>
    <option>Large Duffel</option>
    <option>Rucksack, Day (Small)</option>
    <option>Rucksack, Travel (Large)</option>
    <option>Daypack</option>
    <option>Tent</option>
    <option>Sleeping Bag</option>
    <option>Sleeping Mat</option>
    <option>Pillow</option>
    <option>Dry Sacks</option>
    <option>Wash Bag</option>
    <option>Towel(s)</option>
    <option>Reservoir</option>
    <option>Insulated Bottle(s)</option>
    <option>Thermal Flask</option>
    <option>Food Containers</option>
    <option>Mini Stove</option>
    <option>Utensils</option>
    <option>Lighter / Flint and Steel</option>
    <option>Tweezers</option>
    <option>Wet Wipes</option>
    <option>Sun Cream (Omit)</option>
    <option>Midge Repellent (Omit)</option>
    <option>Tick Repellent / Permethrin (Omit)</option>
`;

const selectEquipmentTechnicalListCont = `
    <option>GPS Device</option>
    <option>Hiking Poles</option>
    <option>Ice Axe, Safety (Short)</option>
    <option>Ice Axe, Safety (Long)</option>
    <option>Ice Axe(s), Ice Climbing (Notched)</option>
    <option>(This) Compass</option>
    <option>(These) Topographical Maps</option>
    <option>Whistle</option>
    <option>Head Torch</option>
    <option>Helmet</option>
    <option>Harness and Ropes</option>
    <option>Belay Loop and Carabiners</option>
    <option>Cams, Nuts and Belay Fixtures</option>
    <option>Quickdraws and Slings</option>
    <option>Chalk Bag and Chalk</option>
`;

const selectEquipmentFootwearListCont = `
    <option>City/Approcah Shoes</option>
    <option>Trainers / Trail Shoes</option>
    <option>Hiking Boots, Flexible (B1)</option>
    <option>Hiking Boots, Semi-Rigid (B2)</option>
    <option>Hiking/Mountaineering Boots, Rigid (B3)</option>
    <option>Climbing Shoes</option>
    <option>Replacement Laces</option>
    <option>Crampons, Flexible (C1)</option>
    <option>Crampons, Semi-Rigid (C2)</option>
    <option>Crampons, Rigid (C3)</option>
    <option>Shoe Brush</option>
`;

const selectEquipmentClothingListCont = `
    <option>Base Layers</option>
    <option>Mid Layer Fleeces and Hoodies</option>
    <option>Windbreaker</option>
    <option>Jackets, Shoftshell (Drinking Beer)</option>
    <option>Jacket, Hardshell (Waterproof)</option>
    <option>Jacket, Duvet</option>
    <option>Jacket, Down</option>
    <option>Jacket, Down (Waterproof)</option>
    <option>Leggings</option>
    <option>Mountain Pants</option>
    <option>Mountain Shorts</option>
    <option>Approach Socks</option>
    <option>Hiking Socks</option>
    <option>Gaiters</option>
    <option>Cap</option>
    <option>Beanie</option>
    <option>Windbreaker Gloves</option>
    <option>Fleece Gloves</option>
    <option>Waterproof Gloves</option>
    <option>Sunglasses (Omit)</option>
    <option>Ski Goggles</option>
`;

selectAbilityList.innerHTML = selectAbilityListCont;
selectAbilityHillsList.innerHTML = selectAbilityHillsListCont;
selectAbilityRoutesList.innerHTML = selectAbilityRoutesListCont;
selectAbilitySummitList.innerHTML = selectAbilitySummitListCont;
selectAbilityRoutesTypeList.innerHTML = selectAbilityRoutesTypeListCont;
selectAbilityRoutesStageList.innerHTML = selectAbilityRoutesStageListCont;
selectAbilityTerraintypeList.innerHTML = selectAbilityTerraintypeListCont;
selectAbilityTerraindiffList.innerHTML = selectAbilityTerraindiffListCont;
selectEquipmentList.innerHTML = selectEquipmentListCont;
selectEquipmentPacksList.innerHTML = selectEquipmentPacksListCont;
selectEquipmentTechnicalList.innerHTML = selectEquipmentTechnicalListCont;
selectEquipmentFootwearList.innerHTML = selectEquipmentFootwearListCont;
selectEquipmentClothingList.innerHTML = selectEquipmentClothingListCont;
