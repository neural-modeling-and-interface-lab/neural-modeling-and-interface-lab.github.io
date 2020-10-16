function menuToggle() {
    var x = document.getElementById("links");
    console.log('toggled')
    if (x.style.top === "275px") {
        x.style.top = "-225px";
    } else {
        x.style.top = "275px";
    }
}
