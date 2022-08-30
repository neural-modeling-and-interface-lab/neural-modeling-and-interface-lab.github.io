function menuToggle() {
    var links = document.getElementById("links");
    links.classList.toggle('open')
}

function replaceWithCurrent(){
    document.getElementById("people").innerHTML = `<current-people></current-people>`
}

function replaceWithAlumni(){
    document.getElementById("people").innerHTML = `<alumni></alumni>`
}
