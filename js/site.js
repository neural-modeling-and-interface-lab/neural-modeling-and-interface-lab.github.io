function menuToggle() {
    var x = document.getElementById("links");
    console.log('toggled')
    if (x.style.top === "200px") {
        x.style.top = "-205px";
    } else {
        x.style.top = "200px";
    }
}
