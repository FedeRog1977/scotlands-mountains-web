const selectLandmassList = document.getElementById("selectLandmass");
const selectRouteCruachanList = document.getElementById("selectRouteCruachan");
const selectRouteUdlaidhList = document.getElementById("selectRouteUdlaidh");
const selectRouteMhicList = document.getElementById("selectRouteMhic");
const selectRouteCreachList = document.getElementById("selectRouteCreach");
const selectRouteStaravList = document.getElementById("selectRouteStarav");
const selectRouteTrilleachanList = document.getElementById("selectRouteTrilleachan");
const selectRouteBlackList = document.getElementById("selectRouteBlack");
const selectRouteSgulairdList = document.getElementById("selectRouteSgulaird");
const selectRouteFraochaidhList = document.getElementById("selectRouteFraochaidh");
const selectRouteFhionnlaidhList = document.getElementById("selectRouteFhionnlaidh");
const selectRouteHulaidhList = document.getElementById("selectRouteHulaidh");
const selectRouteDubhList = document.getElementById("selectRouteDubh");
const selectRouteMorList = document.getElementById("selectRouteMor");
const selectRouteBeagList = document.getElementById("selectRouteBeag");
const selectRouteBideanList = document.getElementById("selectRouteBidean");
const selectRouteBheithirList = document.getElementById("selectRouteBheithir");
const selectRouteChrulaisteList = document.getElementById("selectRouteChrulaiste");
const selectRouteEagachList = document.getElementById("selectRouteEagach");

const selectRouteCruachanCont = document.getElementById("selectRouteCruachanCont");
const selectRouteUdlaidhCont = document.getElementById("selectRouteUdlaidhCont");
const selectRouteMhicCont = document.getElementById("selectRouteMhicCont");
const selectRouteCreachCont = document.getElementById("selectRouteCreachCont");
const selectRouteStaravCont = document.getElementById("selectRouteStaravCont");
const selectRouteTrilleachanCont = document.getElementById("selectRouteTrilleachanCont");
const selectRouteBlackCont = document.getElementById("selectRouteBlackCont");
const selectRouteSgulairdCont = document.getElementById("selectRouteSgulairdCont");
const selectRouteFraochaidhCont = document.getElementById("selectRouteFraochaidhCont");
const selectRouteFhionnlaidhCont = document.getElementById("selectRouteFhionnlaidhCont");
const selectRouteHulaidhCont = document.getElementById("selectRouteHulaidhCont");
const selectRouteDubhCont = document.getElementById("selectRouteDubhCont");
const selectRouteMorCont = document.getElementById("selectRouteMorCont");
const selectRouteBeagCont = document.getElementById("selectRouteBeagCont");
const selectRouteBideanCont = document.getElementById("selectRouteBideanCont");
const selectRouteBheithirCont = document.getElementById("selectRouteBheithirCont");
const selectRouteChrulaisteCont = document.getElementById("selectRouteChrulaisteCont");
const selectRouteEagachCont = document.getElementById("selectRouteEagachCont");

const selectLandmassListCont = `
    <option>Cruachan Range</option>
    <option>Beinn Udlaidh and Beinn Bhreac-liath</option>
    <option>Beinn Mhic-Mhonaidh</option>
    <option>Creach Bheinn (Loch Creran)</option>
    <option>Starav Range</option>
    <option>Beinn Trilleachan</option>
    <option>Black Mount Range</option>
    <option>Beinn Sgulaird</option>
    <option>Fraochaidh</option>
    <option>Beinn Fhionnlaidh</option>
    <option>Sgor na h-Ulaidh</option>
    <option>Stob Dubh</option>
    <option>Buachaille Etive Mor</option>
    <option>Buachaille Etive Beag</option>
    <option>Bidean nam Bian</option>
    <option>Beinn a Bheithir</option>
    <option>Beinn a Chrulaiste</option>
    <option>Aonach Eagach</option>
`;

function showRouteListCont() {
    if (selectLandmassList.value === "Cruachan Range") {
	selectRouteCruachanCont.classList.remove("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Beinn Udlaidh and Beinn Bhreac-liath") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.remove("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Beinn Mhic-Mhonaidh") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.remove("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Creach Bheinn (Loch Creran)") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.remove("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Starav Range") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.remove("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Beinn Trilleachan") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.remove("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Black Mount Range") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.remove("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Beinn Sgulaird") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.remove("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Fraochaidh") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.remove("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Beinn Fhionnlaidh") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.remove("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Sgor na h-Ulaidh") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.remove("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Stob Dubh") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.remove("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Buachaille Etive Mor") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.remove("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Buachaille Etive Beag") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.remove("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Bidean nam Bian") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.remove("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Beinn a Bheithir") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.remove("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Beinn a Chrulaiste") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.remove("hidden");
	selectRouteEagachCont.classList.add("hidden");
    } else if (selectLandmassList.value === "Aonach Eagach") {
	selectRouteCruachanCont.classList.add("hidden");
	selectRouteUdlaidhCont.classList.add("hidden");
	selectRouteMhicCont.classList.add("hidden");
	selectRouteCreachCont.classList.add("hidden");
	selectRouteStaravCont.classList.add("hidden");
	selectRouteTrilleachanCont.classList.add("hidden");
	selectRouteBlackCont.classList.add("hidden");
	selectRouteSgulairdCont.classList.add("hidden");
	selectRouteFraochaidhCont.classList.add("hidden");
	selectRouteFhionnlaidhCont.classList.add("hidden");
	selectRouteHulaidhCont.classList.add("hidden");
	selectRouteDubhCont.classList.add("hidden");
	selectRouteMorCont.classList.add("hidden");
	selectRouteBeagCont.classList.add("hidden");
	selectRouteBideanCont.classList.add("hidden");
	selectRouteBheithirCont.classList.add("hidden");
	selectRouteChrulaisteCont.classList.add("hidden");
	selectRouteEagachCont.classList.remove("hidden");
    }
}

const selectRouteCruachanListCont = `
    <option>Cruachan Four</option>
    <option>Ben Cruachan and Stob Daimh</option>
    <option>Ben Cruachan, Stob Daimh and Beinn a Bhuiridh</option>
    <option>Beinn a Chochuill and Beinn Eunaich</option>
    <option>Beinn a Bhuiridh</option>
`;

const selectRouteUdlaidhListCont = `
    <option>Beinn Udlaidh and Beinn Bhreac-liath</option>
`;

const selectRouteMhicListCont = `
    <option>Beinn Mhic-Mhonaidh</option>
`;

const selectRouteCreachListCont = `
    <option>Creach Bheinn</option>
`;

const selectRouteStaravListCont = `
    <option>Starav Eight</option>
    <option>Starav Seven</option>
    <option>Starav Five</option>
    <option>Ben Starav and Glas Bheinn Mhor</option>
    <option>Beinn nan Aighenan and Meall nan Eun</option>
    <option>Beinn nan Aighenan</option>
`;

const selectRouteTrilleachanListCont = `
    <option>Beinn Trilleachan</option>
`;

const selectRouteBlackListCont = `
    <option>Starav Eight</option>
    <option>Starav Seven</option>
    <option>Black Mount Four</option>
    <option>Meall a Bhuiridh and Creise</option>
    <option>Stob Ghabhar and Stob a Choire Odhair</option>
    <option>Beinn Mhic Chasgaig and Stob Dubh</option>
    <option>Beinn Mhic Chasgaig</option>
`;

const selectRouteSgulairdListCont = `
    <option>Beinn Sgulaird, Beinn Fhionnlaidh, Sgor na h-Ulaidh and Beinn Maol Chaluim</option>
    <option>Beinn Sgulaird, Beinn Fhionnlaidh and Sgor na h-Ulaidh from Glen Etive</option>
    <option>Beinn Sgulaird and Beinn Fhionnlaidh from Glen Etive</option>
    <option>Beinn Sgulaird</option>
`;

const selectRouteFraochaidhListCont = `
    <option>Fraochaidh from Ballachulish</option>
`;

const selectRouteFhionnlaidhListCont = `
    <option>Beinn Sgulaird, Beinn Fhionnlaidh, Sgor na h-Ulaidh and Beinn Maol Chaluim</option>
    <option>Beinn Sgulaird, Beinn Fhionnlaidh and Sgor na h-Ulaidh from Glen Etive</option>
    <option>Beinn Sgulaird and Beinn Fhionnlaidh from Glen Etive</option>
    <option>Beinn Fhionnlaidh</option>
`;

const selectRouteHulaidhListCont = `
    <option>Beinn Sgulaird, Beinn Fhionnlaidh, Sgor na h-Ulaidh and Beinn Maol Chaluim</option>
    <option>Beinn Sgulaird, Beinn Fhionnlaidh and Sgor na h-Ulaidh from Glen Etive</option>
    <option>Sgor na h-Ulaidh from Glen Etive</option>
`;

const selectRouteDubhListCont = `
    <option>Beinn Mhic Chasgaig and Stob Dubh</option>
    <option>Stob Dubh</option>
`;

const selectRouteMorListCont = `
    <option>Bidean nam Bian, Buachaille Etive Beag and Buachaille Etive Mor</option>
    <option>Buacaille Etive Mor via Tourist Path</option>
    <option>Buachaille Etive Mor via Curved Ridge</option>
    <option>Agags Groove</option>
`;

const selectRouteBeagListCont = `
    <option>Bidean nam Bian, Buachaille Etive Beag and Buachaille Etive Mor</option>
    <option>Buachaille Etive Beag</option>
`;

const selectRouteBideanListCont = `
    <option>Bidean nam Bian, Buachaille Etive Beag and Buachaille Etive Mor</option>
    <option>Bidean nam Bian and Stob Coire Sgreamhach</option>
    <option>Bidean nam Bian Central Gully</option>
    <option>Stob Coire nan Lochan Central Buttress</option>
    <option>The Lost Valley</option>
    <option>Beinn Sgulaird, Beinn Fhionnlaidh, Sgor na h-Ulaidh and Beinn Maol Chaluim</option>
    <option>Beinn Maol Chaluim</option>
`;

const selectRouteBheithirListCont = `
    <option>Beinn a Bheithir via Schoolhouse Ridge</option>
    <option>Beinn a Bheithir</option>
`;

const selectRouteChrulaisteListCont = `
    <option>Beinn a Chrulaiste</option>
`;

const selectRouteEagachListCont = `
    <option>Aonach Eagach Full Traverse</option>
    <option>Aonach Eagach Traverse (Scree Descent)</option>
    <option>Meall Dearg from Loch Leven</option>
`;

selectLandmassList.innerHTML = selectLandmassListCont;
selectRouteCruachanList.innerHTML = selectRouteCruachanListCont;
selectRouteUdlaidhList.innerHTML = selectRouteUdlaidhListCont;
selectRouteMhicList.innerHTML = selectRouteMhicListCont;
selectRouteCreachList.innerHTML = selectRouteCreachListCont;
selectRouteStaravList.innerHTML = selectRouteStaravListCont;
selectRouteTrilleachanList.innerHTML = selectRouteTrilleachanListCont;
selectRouteBlackList.innerHTML = selectRouteBlackListCont;
selectRouteSgulairdList.innerHTML = selectRouteSgulairdListCont;
selectRouteFraochaidhList.innerHTML = selectRouteFraochaidhListCont;
selectRouteFhionnlaidhList.innerHTML = selectRouteFhionnlaidhListCont;
selectRouteHulaidhList.innerHTML = selectRouteHulaidhListCont;
selectRouteDubhList.innerHTML = selectRouteDubhListCont;
selectRouteMorList.innerHTML = selectRouteMorListCont;
selectRouteBeagList.innerHTML = selectRouteBeagListCont;
selectRouteBideanList.innerHTML = selectRouteBideanListCont;
selectRouteBheithirList.innerHTML = selectRouteBheithirListCont;
selectRouteChrulaisteList.innerHTML = selectRouteChrulaisteListCont;
selectRouteEagachList.innerHTML = selectRouteEagachListCont;
