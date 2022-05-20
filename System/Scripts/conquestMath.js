let locations = 'https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/JSON/Hills.json';

function getRouteDiff() {
    fetch(locations)
	.then((resp) => {
	    return resp.json();
	})
	.then((data) => {
	    const hills = data;
	    const scoreOut = document.getElementById("scoreOut");
	    const selectRoute = document.getElementById("selectRoute").value.toLowerCase();
	})
}
