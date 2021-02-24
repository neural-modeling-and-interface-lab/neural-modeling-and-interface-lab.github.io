function menuToggle() {
    var x = document.getElementById("links");
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (vw <= 600) {
        if (x.style.top === "0px"){
            x.style.top = "-330px";
        } else {
            x.style.top = "0px";
        }
    } else {
        if (x.style.top === "0px"){
            x.style.top = "-475px";
        } else {
            x.style.top = "0px";
        }
    }
}

function replaceWithCurrent(){
    document.getElementById("people").innerHTML = `<current-people></current-people>`
}

function replaceWithAlumni(){
    document.getElementById("people").innerHTML = `<alumni></alumni>`
}
