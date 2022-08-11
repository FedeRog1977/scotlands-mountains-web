document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelector("#pagesDropCont");

    document.querySelector("#pagesDrop").addEventListener("click", e => {
        e.preventDefault();
        if (pages.classList.contains("hidden")) {
            pages.classList.remove("hidden");
        } else {
	    pages.classList.add("hidden");
	}
    });
});
