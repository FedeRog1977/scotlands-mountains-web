const selectMunroList = document.getElementById("weatherSelectMunro");
const selectCorbettList = document.getElementById("weatherSelectCorbett");
const selectCountyList = document.getElementById("weatherSelectCounty");

const selectMunroListCont = `
    <option>Beinn a Chochuill</option>
    <option>Beinn Eunaich</option>
    <option>Beinn Fhionnlaidh</option>
    <option>Beinn nan Aighenan</option>
    <option>Beinn Sgulaird</option>
    <option>Ben Cruachan</option>
    <option>Ben Starav</option>
    <option>Bidean nam Bian</option>
    <option>Glas Bheinn Mhor</option>
    <option>Meall a Bhuiridh</option>
    <option>Meall Dearg (Aonach Eagach)</option>
    <option>Meall nan Eun</option>
    <option>Sgor na h-Ulaidh</option>
    <option>Sgorr Dhearg (Beinn a Bheithir)</option>
    <option>Sgorr Dhonuill (Beinn a Bheithir)</option>
    <option>Sgorr nam Fiannaidh (Aonach Eagach)</option>
    <option>Stob a Choire Odhair</option>
    <option>Stob Coir an Albannaich</option>
    <option>Stob Coire Raineach (Buachaille Etive Beag)</option>
    <option>Stob Coire Sgreamhach</option>
    <option>Stob Daimh</option>
    <option>Stob Dearg (Buachaille Etive Mor)</option>
    <option>Stob Dubh (Buachaille Etive Beag)</option>
    <option>Stob Ghabhar</option>
    <option>Stob na Broige (Buachaille Etive Mor)</option>
`;

const selectCorbettListCont = `
    <option>Beinn a Bhuiridh</option>
    <option>Beinn Bhreac-liath</option>
    <option>Beinn Maol Chaluim</option>
    <option>Beinn Mhic Chasgaig</option>
    <option>Beinn Mhic-Mhonaidh</option>
    <option>Beinn Trilleachan</option>
    <option>Beinn Udlaidh</option>
    <option>Creach Bheinn (Loch Creran)</option>
    <option>Fraochaidh</option>
    <option>Meall Lighiche</option>
    <option>Stob Dubh</option>
`;

const selectCountyListCont = `
    <option>Aberdeen City</option>
    <option>Aberdeenshire</option>
    <option>Angus</option>
    <option>Argyll and Bute</option>
    <option>Clackmannanshire</option>
    <option>Dumfries and Galloway</option>
    <option>Dundee</option>
    <option>East Ayrshire</option>
    <option>East Dunbartonshire</option>
    <option>East Lothian</option>
    <option>East Renfrewshire</option>
    <option>Edinburgh</option>
    <option>Falkirk</option>
    <option>Fife</option>
    <option>Glasgow</option>
    <option>Highland</option>
    <option>Inverclyde</option>
    <option>Midlothian</option>
    <option>Moray</option>
    <option>Na h-Eileanan an Iar</option>
    <option>North Ayrshire</option>
    <option>North Lanarkshire</option>
    <option>Orkney Islands</option>
    <option>Perth and Kinross</option>
    <option>Renfrewshire</option>
    <option>Scottish Borders</option>
    <option>Shetland Islands</option>
    <option>South Ayrshire</option>
    <option>South Lanarkshire</option>
    <option>Stirlingshire</option>
    <option>West Dunbartonshire</option>
    <option>West Lothian</option>
`;

selectMunroList.innerHTML = selectMunroListCont;
selectCorbettList.innerHTML = selectCorbettListCont;
selectCountyList.innerHTML = selectCountyListCont;
