document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelector("#pagesDropCont");
    const pagesHiking = document.querySelector("#pagesHiking");
    const pagesCycling = document.querySelector("#pagesCycling");

    document.querySelector("#pagesDrop").addEventListener("click", e => {
        e.preventDefault();
        if (pages.classList.contains("hidden")) {
            pages.classList.remove("hidden");
        } else {
	    pages.classList.add("hidden");
	}
    });

    document.querySelector("#hikingDrop").addEventListener("click", e => {
        e.preventDefault();
        if (pagesHiking.classList.contains("hidden")) {
            pagesHiking.classList.remove("hidden");
        } else {
	    pagesHiking.classList.add("hidden");
	}
    });

    document.querySelector("#cyclingDrop").addEventListener("click", e => {
        e.preventDefault();
        if (pagesCycling.classList.contains("hidden")) {
            pagesCycling.classList.remove("hidden");
        } else {
	    pagesCycling.classList.add("hidden");
	}
    });

});
