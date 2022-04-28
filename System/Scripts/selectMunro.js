const selectMunroList = document.getElementById('userWeatherSelectMunro');

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
    <option>fs i missed one</option>
`;

selectMunroList.innerHTML = selectMunroListCont;
