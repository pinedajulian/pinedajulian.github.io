const darkModeButton = document.getElementById("dark-mode");
const fontButton = document.getElementById("font-change");

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
});

fontButton.addEventListener("click", () => {
    document.body.classList.toggle("unifont");

    localStorage.setItem(
        "unifont",
        document.body.classList.contains("unifont")
    );
});

/* Restore saved settings */

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

if (localStorage.getItem("unifont") === "true") {
    document.body.classList.add("unifont");
}