let locations = 'https://raw.githubusercontent.com/FedeRog1977/Burning/master/System/JSON/Hills.json';

function () {
    fetch(locations)
	.then((resp) => {
	    return resp.json();
	})
	.then((data) => {
	    const hills = data;
	})
}
