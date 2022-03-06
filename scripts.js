// Attach click listener for the clan selection buttons
document.querySelector(".great-clans-select").addEventListener("click", function (event) {
    const clickedOn = event.target;
    // Check if clicked-on element is a button
    if (!clickedOn.matches("button")) return;
    
    const pressedButton = clickedOn.textContent;
    handleClanSelection(pressedButton);
})

function handleClanSelection(clanName) {
    switch (clanName) {
        case "Oda Clan":
            document.querySelector("#oda-clan").classList.remove("hidden");
            document.querySelector("#tokugawa-clan").classList.add("hidden");
            document.querySelector("#toyotomi-clan").classList.add("hidden");
            break;
        case "Tokugawa Clan":
            document.querySelector("#oda-clan").classList.add("hidden");
            document.querySelector("#tokugawa-clan").classList.remove("hidden");
            document.querySelector("#toyotomi-clan").classList.add("hidden");
            break;
        case "Toyotomi Clan":
            document.querySelector("#oda-clan").classList.add("hidden");
            document.querySelector("#tokugawa-clan").classList.add("hidden");
            document.querySelector("#toyotomi-clan").classList.remove("hidden");
            break;
        default:
            document.querySelector("#oda-clan").classList.add("hidden");
            document.querySelector("#tokugawa-clan").classList.add("hidden");
            document.querySelector("#toyotomi-clan").classList.add("hidden");
            break;
    }
}