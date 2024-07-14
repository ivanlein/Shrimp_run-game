const shrimp = document.getElementById("shrimp");
const omar = document.getElementById("omar");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (shrimp.lassList != "jump") {
        shrimp.classList.add("jump");
    }
    setTimeout(function() {
        shrimp.classList.remove("jump");
    }, 400)
}