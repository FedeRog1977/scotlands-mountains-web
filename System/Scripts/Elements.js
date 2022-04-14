document.addEventListener("DOMContentLoaded", () => {
    const overview = document.querySelector("#userOverview");
    const conditioning = document.querySelector("#userConditioning");
    const rewards = document.querySelector("#userRewards");
    const competitions = document.querySelector("#userCompetitions");
    const conditioningAbility = document.querySelector("#userAbility");
    const conditioningEquipment = document.querySelector("#userEquipment");
    const conditioningWeather = document.querySelector("#userWeather");
    const conditioningWeatherKey = document.querySelector("#userWeatherKey");
    const conditioningWeatherSugClouds = document.querySelector("#userWeatherSugClouds");
    const conditioningWeatherSugBearings = document.querySelector("#userWeatherSugBearings");

    document.querySelector("#userOverviewOpt").addEventListener("click", e => {
        e.preventDefault();
        if (overview.classList.contains("hidden")) {
            overview.classList.remove("hidden");
        }
	conditioning.classList.add("hidden");
	rewards.classList.add("hidden");
	competitions.classList.add("hidden");
    });

    document.querySelector("#userConditioningOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioning.classList.contains("hidden")) {
            conditioning.classList.remove("hidden");
        }
	overview.classList.add("hidden");
	rewards.classList.add("hidden");
	competitions.classList.add("hidden");
    });

    document.querySelector("#userRewardsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (rewards.classList.contains("hidden")) {
            rewards.classList.remove("hidden");
        }
	overview.classList.add("hidden");
	conditioning.classList.add("hidden");
	competitions.classList.add("hidden");
    });

    document.querySelector("#userCompetitionsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (competitions.classList.contains("hidden")) {
            competitions.classList.remove("hidden");
        }
	overview.classList.add("hidden");
	conditioning.classList.add("hidden");
	rewards.classList.add("hidden");
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

    document.querySelector("#userWeatherOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioningWeather.classList.contains("hidden")) {
            conditioningWeather.classList.remove("hidden");
        } else {
            conditioningWeather.classList.add("hidden");
	}
    });

    document.querySelector("#userWeatherKeyOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioningWeatherKey.classList.contains("hidden")) {
            conditioningWeatherKey.classList.remove("hidden");
        } else {
            conditioningWeatherKey.classList.add("hidden");
	}
    });

    document.querySelector("#userWeatherSugCloudsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioningWeatherSugClouds.classList.contains("hidden")) {
            conditioningWeatherSugClouds.classList.remove("hidden");
        } else {
            conditioningWeatherSugClouds.classList.add("hidden");
	}
    });

    document.querySelector("#userWeatherSugBearingsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (conditioningWeatherSugBearings.classList.contains("hidden")) {
            conditioningWeatherSugBearings.classList.remove("hidden");
        } else {
            conditioningWeatherSugBearings.classList.add("hidden");
	}
    });

});
