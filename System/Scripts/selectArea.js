const selectMunroList = document.getElementById('userWeatherSelectMunro');
const selectCorbettList = document.getElementById('userWeatherSelectCorbett');
const selectCountyList = document.getElementById('userWeatherSelectCounty');

const selectMunroListCont = `
    <option>A&rsquo; Bhuidheanach Bheag</option>
    <option>A&rsquo; Chailleach (Fannichs)</option>
    <option>A&rsquo; Chailleach (Monadhliath)</option>
    <option>A&rsquo; Chralaig</option>
    <option>A&rsquo; Ghlas-bheinn</option>
    <option>A&rsquo; Mhaighdean</option>
    <option>A&rsquo; Mharconaich</option>
    <option>Am Basteir</option>
    <option>Am Bodach</option>
    <option>Am Faochagach</option>
    <option>An Caisteal</option>
    <option>An Coileachan</option>
    <option>An Gearanach</option>
    <option>An Riabhachan</option>
    <option>An Sgarsoch</option>
    <option>An Socach (Affric)</option>
    <option>An Socach (Braemar)</option>
    <option>An Socach (Mullardoch)</option>
    <option>An St&ugrave;c</option>
    <option>Aonach Air Chrith</option>
    <option>Aonach Beag (Alder)</option>
    <option>Aonach Beag (Nevis Range)</option>
    <option>Aonach Meadhoin</option>
    <option>Aonach M&ograve;r</option>
    <option>Beinn a&rsquo; Bh&ugrave;ird</option>
    <option>Beinn a&rsquo; Chaorainn (Cairngorms)</option>
    <option>Beinn a&rsquo; Chaorainn (Glen Spean)</option>
    <option>Beinn a&rsquo; Chlachair</option>
    <option>Beinn a&rsquo; Chl&egrave;ibh</option>
    <option>Beinn a&rsquo; Chochuill</option>
    <option>Beinn a&rsquo; Chreachain</option>
    <option>Beinn a&rsquo; Chr&ograve;in</option>
    <option>Beinn Achaladair</option>
    <option>Beinn an D&ograve;thaidh</option>
    <option>Beinn Bheoil</option>
    <option>Beinn Bhreac</option>
    <option>Beinn Bhrotain</option>
    <option>Beinn Bhuidhe</option>
    <option>Beinn Chabhair</option>
    <option>Beinn Dearg (Blair Atholl)</option>
    <option>Beinn Dearg (Ullapool)</option>
    <option>Beinn D&ograve;rain</option>
    <option>Beinn Dubhchraig</option>
    <option>Beinn &Egrave;ibhinn</option>
    <option>Beinn Eunaich</option>
    <option>Beinn Fhada</option>
    <option>Beinn Fhionnlaidh</option>
    <option>Beinn Fhionnlaidh (C&agrave;rn Eige)</option>
    <option>Beinn Ghlas</option>
    <option>Beinn Heasgarnich</option>
    <option>Beinn &Igrave;me</option>
    <option>Beinn Iutharn Mh&ograve;r</option>
    <option>Beinn Liath Mh&ograve;r</option>
    <option>Beinn Liath Mh&ograve;r Fannaich</option>
    <option>Beinn Mhanach</option>
    <option>Beinn Mheadhoin</option>
    <option>Beinn na Lap</option>
    <option>Beinn nan Aighenan</option>
    <option>Beinn Narnain</option>
    <option>Beinn Sgritheall</option>
    <option>Beinn Sgulaird</option>
    <option>Beinn Tarsuinn</option>
    <option>Beinn Teallach</option>
    <option>Beinn Tulaichean</option>
    <option>Beinn Udlamain</option>
    <option>Ben Alder</option>
    <option>Ben Avon</option>
    <option>Ben Challum</option>
    <option>Ben Chonzie</option>
    <option>Ben Cruachan</option>
    <option>Ben Hope</option>
    <option>Ben Klibreck</option>
    <option>Ben Lawers</option>
    <option>Ben Lomond</option>
    <option>Ben Lui</option>
    <option>Ben Macdui</option>
    <option>Ben More</option>
    <option>Ben More (Mull)</option>
    <option>Ben More Assynt</option>
    <option>Ben Nevis</option>
    <option>Ben Oss</option>
    <option>Ben Starav</option>
    <option>Ben Vane</option>
    <option>Ben Vorlich (Loch Earn)</option>
    <option>Ben Vorlich (Loch Lomond)</option>
    <option>Ben Wyvis</option>
    <option>Bidean nam Bian</option>
    <option>Bidein a&rsquo; Choire Sheasgaich</option>
    <option>Bidein a&rsquo; Ghlas Thuill (An Teallach)</option>
    <option>Binnein Beag</option>
    <option>Binnein M&ograve;r</option>
    <option>Bl&agrave; Bheinn</option>
    <option>Braeriach</option>
    <option>Br&agrave;igh Coire Chruinn-bhalgain</option>
    <option>Broad Cairn</option>
    <option>Bruach na Fr&igrave;the</option>
    <option>Bynack More</option>
    <option>Cairn Bannoch</option>
    <option>Cairn Gorm</option>
    <option>Cairn of Claise</option>
    <option>Cairn Toul</option>
    <option>C&agrave;rn a&rsquo; Chlamain</option>
    <option>C&agrave;rn a&rsquo; Choire Bh&ograve;idheach</option>
    <option>C&agrave;rn a&rsquo; Gh&egrave;oidh</option>
    <option>C&agrave;rn a&rsquo; Mh&agrave;im</option>
    <option>C&agrave;rn an Fh&igrave;dhleir (C&agrave;rn Ealar)</option>
    <option>C&agrave;rn an R&igrave;gh</option>
    <option>C&agrave;rn an t-Sagairt M&ograve;r</option>
    <option>C&agrave;rn an Tuirc</option>
    <option>C&agrave;rn Aosda</option>
    <option>C&agrave;rn Bhac</option>
    <option>C&agrave;rn Dearg (Corrour)</option>
    <option>C&agrave;rn Dearg (Loch Pattack)</option>
    <option>C&agrave;rn Dearg (Monadhliath)</option>
    <option>C&agrave;rn Eige</option>
    <option>C&agrave;rn Ghluasaid</option>
    <option>C&agrave;rn Gorm</option>
    <option>C&agrave;rn Liath (Beinn a&rquo; Ghlò)</option>
    <option>C&agrave;rn Liath (Creag Meagaidh)</option>
    <option>C&agrave;rn Mairg</option>
    <option>C&agrave;rn M&ograve;r Dearg</option>
    <option>C&agrave;rn na Caim</option>
    <option>C&agrave;rn nan Gabhar</option>
    <option>C&agrave;rn nan Gobhar (Loch Mullardoch)</option>
    <option>C&agrave;rn nan Gobhar (Strathfarrar)</option>
    <option>C&agrave;rn Sgulain</option>
    <option>Chno Dearg</option>
    <option>Ciste Dhubh</option>
    <option>Cona&rsquo; Mheall</option>
    <option>Conival</option>
    <option>Creag a&rsquo; Mh&agrave;im</option>
    <option>Creag Leacach</option>
    <option>Creag Meagaidh</option>
    <option>Creag Mh&ograve;r (Glen Lochay)</option>
    <option>Creag Mh&ograve;r (Meall na Aighean)</option>
    <option>Creag nan D&agrave;mh</option>
    <option>Creag Pitridh</option>
    <option>Cruach &Agrave;rdrain</option>
    <option>Derry Cairngorm</option>
    <option>Driesh</option>
    <option>Druim Shionnach</option>
    <option>Eididh nan Clach Geala</option>
    <option>Fionn Bheinn</option>
    <option>Gairich</option>
    <option>Garbh Chioch Mh&ograve;r</option>
    <option>Geal Ch&agrave;rn (Laggan)</option>
    <option>Geal Ch&agrave;rn (Monadhliath)</option>
    <option>Geal-ch&agrave;rn (Alder)</option>
    <option>Geal-ch&agrave;rn (Drumochter)</option>
    <option>Glas Bheinn Mh&ograve;r</option>
    <option>Glas Maol</option>
    <option>Glas Tulaichean</option>
    <option>Gleouraich</option>
    <option>Gulvain</option>
    <option>Inaccessible Pinnacle</option>
    <option>Ladhar Bheinn</option>
    <option>Lochnagar</option>
    <option>Luinne Bheinn</option>
    <option>Lurg Mh&ograve;r</option>
    <option>M&agrave;m Sodhail</option>
    <option>Maoile Lunndaidh</option>
    <option>Maol Chean-dearg</option>
    <option>Maol chinn-dearg</option>
    <option>Mayar</option>
    <option>Meall a&rsquo; Bh&ugrave;iridh</option>
    <option>Meall a&rsquo; Choire L&egrave;ith</option>
    <option>Meall a&rsquo; Chrasgaidh</option>
    <option>Meall Buidhe (Glen Lyon)</option>
    <option>Meall Buidhe (Knoydart)</option>
    <option>Meall Chuaich</option>
    <option>Meall Corranaich</option>
    <option>Meall Dearg (Aonach Eagach)</option>
    <option>Meall Garbh (Ben Lawers)</option>
    <option>Meall Garbh (C&agrave;rn Mairg)</option>
    <option>Meall Ghaordaidh</option>
    <option>Meall Glas</option>
    <option>Meall Gorm</option>
    <option>Meall Greigh</option>
    <option>Meall na Teanga</option>
    <option>Meall nan Ceapraichean</option>
    <option>Meall nan Eun</option>
    <option>Meall nan Tarmachan</option>
    <option>Monadh M&ograve;r</option>
    <option>Moruisg</option>
    <option>Mount Keen</option>
    <option>Mullach an Rathain (Liathach)</option>
    <option>Mullach Clach a&rsquo; Bhl&agrave;ir</option>
    <option>Mullach Coire Mhic Fhearchair</option>
    <option>Mullach Fraoch-choire</option>
    <option>Mullach na Dheiragain</option>
    <option>Mullach nan Coirean</option>
    <option>Na Gruagaichean</option>
    <option>Ruadh Stac M&ograve;r</option>
    <option>Ruadh-stac M&ograve;r (Beinn Eighe)</option>
    <option>S&agrave;il Chaorainn</option>
    <option>S&agrave;ileag</option>
    <option>Schiehallion</option>
    <option>Seana Bhr&agrave;igh</option>
    <option>Sg&agrave;irneach Mh&ograve;r</option>
    <option>Sgiath Ch&ugrave;il</option>
    <option>Sg&ograve;r an Lochain Uaine</option>
    <option>Sg&ograve;r Gaibhre</option>
    <option>Sg&ograve;r Gaoith</option>
    <option>Sg&ograve;r na h-Ulaidh</option>
    <option>Sg&ograve;rr Dhearg (Beinn a&rsquo; Bheithir)</option>
    <option>Sg&ograve;rr Dh&ograve;nuill (Beinn a&rsquo; Bheithir)</option>
    <option>Sg&ograve;rr nam Fiannaidh (Aonach Eagach)</option>
    <option>Sg&ograve;rr Ruadh</option>
    <option>Sg&ugrave;rr a&rsquo; Bhealaich Dheirg</option>
    <option>Sg&ugrave;rr a&rsquo; Chaorachain</option>
    <option>Sg&ugrave;rr a&rsquo; Choire Ghlais</option>
    <option>Sg&ugrave;rr a&rsquo; Ghreadaidh</option>
    <option>Sg&ugrave;rr a&rsquo; Mhadaidh</option>
    <option>Sg&ugrave;rr a&rsquo; Mh&agrave;im</option>
    <option>Sg&ugrave;rr a&rsquo; Mhaoraich</option>
    <option>Sg&ugrave;rr Alasdair</option>
    <option>Sg&ugrave;rr an Doire Leathain</option>
    <option>Sg&ugrave;rr an Lochain</option>
    <option>Sg&ugrave;rr B&agrave;n</option>
    <option>Sg&ugrave;rr Breac</option>
    <option>Sg&ugrave;rr Ch&ograve;innich</option>
    <option>Sg&ugrave;rr Ch&ograve;innich M&ograve;r</option>
    <option>Sg&ugrave;rr Dubh M&ograve;r</option>
    <option>Sg&ugrave;rr &Egrave;ilde M&ograve;r</option>
    <option>Sg&ugrave;rr Fhuar-thuill</option>
    <option>Sg&ugrave;rr Fhuaran</option>
    <option>Sg&ugrave;rr Fiona (An Teallach)</option>
    <option>Sg&ugrave;rr Mhic Ch&ograve;innich</option>
    <option>Sg&ugrave;rr M&orgave;r</option>
    <option>Sg&ugrave;rr M&ograve;r (Beinn Alligin)</option>
    <option>Sg&ugrave;rr M&ograve;r (Loch Quoich)</option>
    <option>Sg&ugrave;rr na Banachdich</option>
    <option>Sg&ugrave;rr na C&agrave;rnach</option>
    <option>Sg&ugrave;rr na C&igrave;che</option>
    <option>Sg&ugrave;rr na Ciste Duibhe</option>
    <option>Sg&ugrave;rr na Lapaich</option>
    <option>Sg&ugrave;rr na Ruaidhe</option>
    <option>Sg&ugrave;rr na Sg&igrave;ne</option>
    <option>Sg&ugrave;rr nan Ceathreamhnan</option>
    <option>Sg&ugrave;rr nan Clach Geala</option>
    <option>Sg&ugrave;rr nan Coireachan (Glen Dessary)</option>
    <option>Sg&ugrave;rr nan Coireachan (Glenfinnan)</option>
    <option>Sg&ugrave;rr nan Conbhairean</option>
    <option>Sg&ugrave;rr nan Each</option>
    <option>Sg&ugrave;rr nan Eag</option>
    <option>Sg&ugrave;rr nan Gillean</option>
    <option>Sg&ugrave;rr Thuilm</option>
    <option>Slioch</option>
    <option>Spidean a&rsquo; Choire L&egrave;ith (Liathach)</option>
    <option>Spidean Coire nan Clach (Beinn Eighe)</option>
    <option>Spidean Mialach</option>
    <option>Sr&ograve;n a&rsquo; Choire Ghairbh</option>
    <option>Stob a&rsquo; Choire Mheadhoin</option>
    <option>Stob a&rsquo; Choire Odhair</option>
    <option>Stob B&agrave;n (Grey Corries)</option>
    <option>Stob B&agrave;n (Mamores)</option>
    <option>Stob Binnein</option>
    <option>Stob Choire Claurigh</option>
    <option>Stob Coir an Albannaich</option>
    <option>Stob Coire a&rsquo; Ch&agrave;irn</option>
    <option>Stob Coire an Laoigh</option>
    <option>Stob Coire Easain</option>
    <option>Stob Coire Raineach (Buachaille Etive Beag)</option>
    <option>Stob Coire Sgreamhach</option>
    <option>Stob Coire Sgriodain</option>
    <option>Stob Daimh</option>
    <option>Stob Dearg (Buachaille Etive M&ograve;r)</option>
    <option>Stob Dubh (Buachaille Etive Beag)</option>
    <option>Stob Ghabhar</option>
    <option>Stob na Br&ograve;ige (Buachaille Etive M&ograve;r)</option>
    <option>Stob Poite Coire &Agrave;rdair</option>
    <option>St&ugrave;c a&rsquo; Chr&ograve;in</option>
    <option>St&ugrave;cd an Lochain</option>
    <option>The Cairnwell</option>
    <option>The Devil&rsquo;s Point</option>
    <option>The Saddle</option>
    <option>Toll Creagach</option>
    <option>Tolmount</option>
    <option>Tom a&rsquo; Ch&ograve;inich</option>
    <option>Tom Buidhe</option>
    <option>Tom na Gruagaich (Beinn Alligin)</option>
`;

const selectCorbettListCont = `
    <option>Ainshval</option>
    <option>Am Bathach</option>
    <option>An D&ugrave;n</option>
    <option>An Ruadh-stac</option>
    <option>An S&igrave;dhean</option>
    <option>An Stac</option>
    <option>Aonach Buidhe</option>
    <option>Aonach Shasuinn</option>
    <option>Arkle</option>
    <option>Askival</option>
    <option>Auchnafree Hill</option>
    <option>Bac an Eich</option>
    <option>Baosbheinn</option>
    <option>Beinn a&rsquo; Bha&rsquo;ach Ard</option>
    <option>Beinn a&rsquo; Bhuiridh</option>
    <option>Beinn a&rsquo; Chaisgein M&ograve;r</option>
    <option>Beinn a&rsquo; Chaisteil (Auch)</option>
    <option>Beinn a&rsquo; Chaisteil (Strath Vaich)</option>
    <option>Beinn a&rsquo; Chlaidheimh</option>
    <option>Beinn a&rsquo; Choin</option>
    <option>Beinn a&rsquo; Chr&ugrave;laiste</option>
    <option>Beinn a&rsquo; Chuallaich</option>
    <option>Beinn Airigh Charr</option>
    <option>Beinn an Eoin</option>
    <option>Beinn an Lochain</option>
    <option>Beinn an &Ograve;ir</option>
    <option>Beinn Bhan</option>
    <option>Beinn Bhan (Great Glen)</option>
    <option>Beinn Bheula</option>
    <option>Beinn Bhreac</option>
    <option>Beinn Bhreac-liath</option>
    <option>Beinn Bhuidhe</option>
    <option>Beinn Chaorach</option>
    <option>Beinn Chuirn</option>
    <option>Beinn Damh</option>
    <option>Beinn Dearg (Glen Lyon)</option>
    <option>Beinn Dearg (Torridon)</option>
    <option>Beinn Dearg Bheag</option>
    <option>Beinn Dearg M&ograve;r</option>
    <option>Beinn Dronaig</option>
    <option>Beinn Each</option>
    <option>Beinn Enaiglair</option>
    <option>Beinn Iaruinn</option>
    <option>Beinn Lair</option>
    <option>Beinn Leo&igrave;d</option>
    <option>Beinn Liath Mh&ograve;r a&rsquo; Ghiubhais Li</option>
    <option>Beinn Loinne</option>
    <option>Beinn Luibhean</option>
    <option>Beinn Maol Chaluim</option>
    <option>Beinn Mheadhonach</option>
    <option>Beinn Mhic Cedidh</option>
    <option>Beinn Mhic Chasgaig</option>
    <option>Beinn Mhic-Mhonaidh</option>
    <option>Beinn Mholach</option>
    <option>Beinn na Caillich</option>
    <option>Beinn na h-Eaglaise</option>
    <option>Beinn na h-Uamha</option>
    <option>Beinn nam Fuaran</option>
    <option>Beinn nan Caorach</option>
    <option>Beinn nan Imirean</option>
    <option>Beinn nan Oighreag</option>
    <option>Beinn Odhar</option>
    <option>Beinn Odhar Bheag</option>
    <option>Beinn Pharlagain</option>
    <option>Beinn Resipol</option>
    <option>Beinn Spionnaidh</option>
    <option>Beinn Stacath</option>
    <option>Beinn Tarsuinn</option>
    <option>Beinn Tharsuinn</option>
    <option>Beinn Trilleachan</option>
    <option>Beinn Udlaidh</option>
    <option>Ben Aden</option>
    <option>Ben Donich</option>
    <option>Ben Gulabin</option>
    <option>Ben Hee</option>
    <option>Ben Ledi</option>
    <option>Ben Loyal</option>
    <option>Ben Rinnes</option>
    <option>Ben Tee</option>
    <option>Ben Tirran</option>
    <option>Ben Vrackie</option>
    <option>Ben Vuirich</option>
    <option>Benvane</option>
    <option>Bidein a&rsquo; Chabair</option>
    <option>Binnein an Fh&igrave;dhleir (or Stob Coire Creagach)</option>
    <option>Braigh nan Uamhachan</option>
    <option>Breabag</option>
    <option>Broad Law</option>
    <option>Brown Cow Hill</option>
    <option>Buidhe Bheinn</option>
    <option>Cairnsmore of Carsphairn</option>
    <option>Caisteal Abhail</option>
    <option>Cam Chreag (Auch)</option>
    <option>Cam Chreag (Glen Lyon)</option>
    <option>Canisp</option>
    <option>C&agrave;rn a&rsquo; Choire Ghairbh</option>
    <option>C&agrave;rn a&rsquo; Chuilinn</option>
    <option>C&agrave;rn an Fhreiceadain</option>
    <option>C&agrave;rn B&agrave;n</option>
    <option>C&agrave;rn Chuinneag</option>
    <option>C&agrave;rn Dearg (North of Gleann Eachach)</option>
    <option>C&agrave;rn Dearg (South of Gleann Eachach)</option>
    <option>C&agrave;rn Dearg - Glen Roy</option>
    <option>C&agrave;rn Dearg M&ograve;r</option>
    <option>C&agrave;rn Ealasaid</option>
    <option>C&agrave;rn M&ograve;r (Glen Dessarry)</option>
    <option>C&agrave;rn M&ograve;r (Ladder Hills)</option>
    <option>C&agrave;rn na Drochaide</option>
    <option>C&agrave;rn na Nathrach</option>
    <option>C&agrave;rn na Saobhaidhe</option>
    <option>C&igrave;r M&ograve;r</option>
    <option>Clisham</option>
    <option>Cnoc Coinnich</option>
    <option>Conachcraig</option>
    <option>Corryhabbie Hill</option>
    <option>Corserine</option>
    <option>Cranstackie</option>
    <option>Creach Bheinn (Loch Creran)</option>
    <option>Creach Bheinn (Morvern)</option>
    <option>Creag an Dail Bheag</option>
    <option>Creag Mac Ranaich</option>
    <option>Creag Mh&ograve;r</option>
    <option>Creag nan Gabhar</option>
    <option>Creag Rainich</option>
    <option>Creag Uchdag</option>
    <option>Creagan na Beinne</option>
    <option>Cruach Innse</option>
    <option>C&ugrave;l Beag</option>
    <option>C&ugrave;l M&ograve;r</option>
    <option>Culardoch</option>
    <option>Druim Tarsuinn</option>
    <option>D&ugrave;n da Ghaoithe</option>
    <option>Faochaig</option>
    <option>Farragon Hill</option>
    <option>Foinaven</option>
    <option>Fraoch Bheinn</option>
    <option>Fraochaidh</option>
    <option>Fuar Bheinn</option>
    <option>Fuar Tholl</option>
    <option>Gairbeinn</option>
    <option>Garbh Bheinn (Ardgour)</option>
    <option>Garbh Bheinn (Loch Leven)</option>
    <option>Garbh-bheinn (Skye)</option>
    <option>Geal Charn (Arkaig)</option>
    <option>Geal Charn (Dorback)</option>
    <option>Geal-charn M&ograve;r</option>
    <option>Glamaig</option>
    <option>Glas Bheinn (Assynt)</option>
    <option>Glas Bheinn (Kinlochleven)</option>
    <option>Goat Fell</option>
    <option>Hart Fell</option>
    <option>Leathad an Taobhain</option>
    <option>Leum Uilleim</option>
    <option>Little Wyvis</option>
    <option>Mam na Gualainn</option>
    <option>Maol Creag an Loch (A&rsquo; Chaoirnich)</option>
    <option>Meall a&rsquo; Bhuachaille</option>
    <option>Meall a&rsquo; Ghiubhais</option>
    <option>Meall a&rsquo; Ph&ugrave;buill</option>
    <option>Meall an Fhudair</option>
    <option>Meall an t-Seallaidh</option>
    <option>Meall Buidhe</option>
    <option>Meall Dubh</option>
    <option>Meall Horn</option>
    <option>Meall Lighiche</option>
    <option>Meall na Fearna</option>
    <option>Meall na h-Aisre</option>
    <option>Meall na h-Eilde</option>
    <option>Meall na Leitreach</option>
    <option>Meall nam Maigheach</option>
    <option>Meall nan Subh</option>
    <option>Meall Tairneachan</option>
    <option>Meallach Mh&ograve;r</option>
    <option>Meallan Liath Coire Mhic Dhughaill</option>
    <option>Meallan nan Uan</option>
    <option>Merrick</option>
    <option>Monamenach</option>
    <option>Morrone</option>
    <option>Morven</option>
    <option>Mount Battock</option>
    <option>Quinag - Sail Gharbh</option>
    <option>Quinag - Sail Gorm</option>
    <option>Quinag - Spidean Coinich</option>
    <option>Rois-Bheinn</option>
    <option>Ruadh-stac Beag</option>
    <option>Sail Mh&ograve;r</option>
    <option>Sg&ograve;r M&ograve;r</option>
    <option>Sg&ograve;rr Craobh a&rsquo; Chaorainn</option>
    <option>Sg&ograve;rr na Diollaid</option>
    <option>Sg&ograve;rr nan Lochan Uaine</option>
    <option>Sguman Coinntich</option>
    <option>Sg&ugrave;rr a&rsquo; Chaorachain</option>
    <option>Sg&ugrave;rr a&rsquo; Choire-bheithe</option>
    <option>Sg&ugrave;rr a&rsquo; Mhuilinn</option>
    <option>Sg&ugrave;rr an Airgid</option>
    <option>Sg&ugrave;rr an Fhuarain</option>
    <option>Sg&ugrave;rr an Utha</option>
    <option>Sg&ugrave;rr Coire Choinnichean</option>
    <option>Sg&ugrave;rr Cos na Breachd-laoidh</option>
    <option>Sg&ugrave;rr Dhomhnuill</option>
    <option>Sg&ugrave;rr Dubh</option>
    <option>Sg&ugrave;rr Gaorsaic</option>
    <option>Sg&ugrave;rr Ghiubhsachain</option>
    <option>Sg&ugrave;rr Innse</option>
    <option>Sg&ugrave;rr Mhic Bharraich</option>
    <option>Sg&ugrave;rr Mhurlagain</option>
    <option>Sg&ugrave;rr na Ba Glaise</option>
    <option>Sg&ugrave;rr na Feartaig</option>
    <option>Sg&ugrave;rr nan Ceannaichean</option>
    <option>Sg&ugrave;rr nan Eugallt</option>
    <option>Shalloch on Minnoch</option>
    <option>Sron a&rsquo; Choire Chnapanich</option>
    <option>Stob a&rsquo; Choin</option>
    <option>Stob an Aonaich Mh&ograve;ir</option>
    <option>Stob Coire a&rsquo; Chearcaill</option>
    <option>Stob Dubh</option>
    <option>Streap</option>
    <option>The Brack</option>
    <option>The Cobbler</option>
    <option>The Fara</option>
    <option>The Sow of Atholl</option>
    <option>White Coomb</option>
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
    <option>East Dumbartonshire</option>
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
    <option>West Dumbartonshire</option>
    <option>West Lothian</option>
`;

selectMunroList.innerHTML = selectMunroListCont;
selectCorbettList.innerHTML = selectCorbettListCont;
selectCountyList.innerHTML = selectCountyListCont;
