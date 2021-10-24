interface UniverseEventCard {
    region: string,
    soundbase: string
}

/* Get Cards content */
const CARDS: UniverseEventCard[] = Array.from(document.querySelectorAll(".region-card"))
.map((card: any) => {
    return {
        region: card.childNodes[1].textContent,
        soundbase: "-"
    }
});

/* Apply event redirect */
document.querySelectorAll(".region-card").forEach((card, index) => {
    card.addEventListener("click", () => {
        let pageInfo: string = CARDS[index].region.toLowerCase().replace(" ", "-");
	if (pageInfo === "runeterra"){
	    pageInfo = "unaffiliated";
	}
	window.location.href = `https://generalbloodsword.com/universe/regions/${pageInfo}`;
    })
});
