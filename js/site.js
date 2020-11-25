function menuToggle() {
    var x = document.getElementById("links");
    console.log('toggled')
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (x.style.top === "200px") {
        x.style.top = "-205px";
    } else if (x.style.top === "100px") {
        x.style.top = "-140px";
    }
    else if (vw <= 600){
        x.style.top = "100px";
    } else if (vw > 600){
        x.style.top = "200px";
    }
}

function replaceWithCurrent(){
    document.getElementById("people").innerHTML = `<current-people></current-people>`
}

function replaceWithAlumni(){
    document.getElementById("people").innerHTML = `<alumni></alumni>`
}
