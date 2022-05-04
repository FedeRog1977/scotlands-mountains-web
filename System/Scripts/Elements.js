document.addEventListener("DOMContentLoaded", () => {
    const overview = document.querySelector("#userOverview");
    const conditioning = document.querySelector("#userConditioning");
    const weather = document.querySelector("#userWeather");
    const weatherKey = document.querySelector("#userWeatherKey");
    const weatherSugClouds = document.querySelector("#userWeatherSugClouds");
    const weatherSugBearings = document.querySelector("#userWeatherSugBearings");
    const conditioningAbility = document.querySelector("#userAbility");
    const conditioningEquipment = document.querySelector("#userEquipment");

    document.querySelector("#userOverviewOpt").addEventListener("click", e => {
        e.preventDefault();
        if (overview.classList.contains("hidden")) {
            overview.classList.remove("hidden");
        }
	conditioning.classList.add("hidden");
	weather.classList.add("hidden");
    });

    document.querySelector("#userConditioningOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioning.classList.contains("hidden")) {
            conditioning.classList.remove("hidden");
        }
	overview.classList.add("hidden");
	weather.classList.add("hidden");
    });

    document.querySelector("#userWeatherOpt").addEventListener("click", e => {
        e.preventDefault();
        if (weather.classList.contains("hidden")) {
            weather.classList.remove("hidden");
        }
	overview.classList.add("hidden");
	conditioning.classList.add("hidden");
    });

    document.querySelector("#userWeatherKeyOpt").addEventListener("click", e => {
        e.preventDefault();
        if (weatherKey.classList.contains("hidden")) {
            weatherKey.classList.remove("hidden");
        } else {
            weatherKey.classList.add("hidden");
	}
    });

    document.querySelector("#userWeatherSugCloudsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (weatherSugClouds.classList.contains("hidden")) {
            weatherSugClouds.classList.remove("hidden");
        } else {
            weatherSugClouds.classList.add("hidden");
	}
    });

    document.querySelector("#userWeatherSugBearingsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (weatherSugBearings.classList.contains("hidden")) {
            weatherSugBearings.classList.remove("hidden");
        } else {
            weatherSugBearings.classList.add("hidden");
	}
    });

    document.querySelector("#userAbilityOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioningAbility.classList.contains("hidden")) {
            conditioningAbility.classList.remove("hidden");
        } else {
            conditioningAbility.classList.add("hidden");
	}
    });

    document.querySelector("#userEquipmentOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioningEquipment.classList.contains("hidden")) {
            conditioningEquipment.classList.remove("hidden");
        } else {
            conditioningEquipment.classList.add("hidden");
	}
    });

});
