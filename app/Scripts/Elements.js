document.addEventListener("DOMContentLoaded", () => {
    const overview = document.querySelector("#overview");
    const conditioning = document.querySelector("#conditioning");
    const weather = document.querySelector("#weather");
    const weatherKey = document.querySelector("#weatherKey");
    const weatherSugClouds = document.querySelector("#weatherSugClouds");
    const weatherSugBearings = document.querySelector("#weatherSugBearings");

    document.querySelector("#overviewOpt").addEventListener("click", e => {
        e.preventDefault();
        if (overview.classList.contains("hidden")) {
            overview.classList.remove("hidden");
        }
	conditioning.classList.add("hidden");
	weather.classList.add("hidden");
    });

    document.querySelector("#conditioningOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioning.classList.contains("hidden")) {
            conditioning.classList.remove("hidden");
        }
	overview.classList.add("hidden");
	weather.classList.add("hidden");
    });

    document.querySelector("#weatherOpt").addEventListener("click", e => {
        e.preventDefault();
        if (weather.classList.contains("hidden")) {
            weather.classList.remove("hidden");
        }
	overview.classList.add("hidden");
	conditioning.classList.add("hidden");
    });

    document.querySelector("#weatherKeyOpt").addEventListener("click", e => {
        e.preventDefault();
        if (weatherKey.classList.contains("hidden")) {
            weatherKey.classList.remove("hidden");
        } else {
            weatherKey.classList.add("hidden");
	}
    });

    document.querySelector("#weatherSugCloudsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (weatherSugClouds.classList.contains("hidden")) {
            weatherSugClouds.classList.remove("hidden");
        } else {
            weatherSugClouds.classList.add("hidden");
	}
    });

    document.querySelector("#weatherSugBearingsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (weatherSugBearings.classList.contains("hidden")) {
            weatherSugBearings.classList.remove("hidden");
        } else {
            weatherSugBearings.classList.add("hidden");
	}
    });

});
