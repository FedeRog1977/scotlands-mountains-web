let locations = 'https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/JSON/Hills.json';

function searchLocation() {
    fetch(locations)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const hills = data;
	    const munroInp = document.getElementById("locSearchInp").value.toLowerCase();
            const locationOut = document.getElementById("locSearchOut");
	    for (var i in hills.landmass) {
	        for (var k in hills.landmass[i].munro) {
                    if (hills.landmass[i].munro[k].name.toLowerCase() === munroInp) {
	                let hillName = hills.landmass[i].munro[k].name;
	                let hillElev = hills.landmass[i].munro[k].elevation;
	                let hillLat = Math.abs(hills.landmass[i].munro[k].lat);
			let hillLatDir = "";
			if (hills.landmass[i].munro[k].lat < 0) {
                            hillLatDir = "S";
			} else if (hills.landmass[i].munro[k].lat > 0) {
			    hillLatDir = "N";
			}
	                let hillLon = Math.abs(hills.landmass[i].munro[k].lon);
			let hillLonDir = "";
			if (hills.landmass[i].munro[k].lon < 0) {
                            hillLonDir = "W";
			} else if (hills.landmass[i].munro[k].lon > 0) {
			    hillLonDir = "E";
			}
	                let hillProm = hills.landmass[i].munro[k].prominence;
	                let hillIso = hills.landmass[i].munro[k].isolation;
	                let hillSum = hills.landmass[i].munro[k].summit;
			let hillImg = hills.landmass[i].munro[k].image;
			let hillRoutes = "";
	                locationOut.innerHTML = 
			    "<h1>" + hillName + "</h1>"
			    + hillName + " sits at " + hillElev + "ft<br>" 
			    + "It has a prominance of " + hillProm + "ft and is isolated by " + hillIso + "mi<br>"
			    + "It&rsquo;s located at: " 
			    + hillLat + "&deg;" + hillLatDir + ", " 
			    + hillLon + "&deg;" + hillLonDir + "<br>"
			    + "It has summit feature " + hillSum + "<br>"
			    + "<img src='./Photos/" + hillImg + "' style='width:500px;'></img>" 
			    + hillRoutes;
		    }
	        }
	    }
        })
}

