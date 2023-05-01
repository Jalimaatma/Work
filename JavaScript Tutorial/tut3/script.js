var Comment = () => {

    var a = document.getElementById("Fav-food").value;
    switch (a) {
        case ("Roti"):
            document.getElementById("head").innerText = ("you are a good boy.");
            break;
        case ("Pizza"):
            document.getElementById("head").innerText = ("you are a dumb boy.");
            break;
        case ("Fruites"):
            document.getElementById("head").innerText = ("you are a intelligent and smart boy.");
            break;

        default:
            document.getElementById("head").innerText = ("Hey buddy")
            break;
    }
}