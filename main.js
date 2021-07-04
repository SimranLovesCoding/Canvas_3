canvas = document.getElementById("mycanvas3")
ctx = canvas.getContext("2d")
color = "red"
width = 3
mouseevent = ""

canvas.addEventListener("mouseup",mu)
function mu(e) {
    mouseevent = "mouseup"
    console.log("mouse_is_up")
}

canvas.addEventListener("mouseenter",me)
function me(e) {
    mouseevent = "mouseenter"
    console.log("mouse_entered_canvas")
}

canvas.addEventListener("mouseleave",ml)
function ml(e) {
    mouseevent = "mouseleave"
    console.log("mouse_left_the_canvas")
}

canvas.addEventListener("mousedown",mod)
function mod(e) {
    mouseevent = "mousedown"
    console.log("mouse_is_down")
    color = document.getElementById("colori").value
    width = document.getElementById("widthi").value
}

canvas.addEventListener("mousemove",mm)
function mm(e) {
    currentx = e.clientX - canvas.offsetLeft
    currenty = e.clientY - canvas.offsetTop
    if (mouseevent=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(currentx,currenty)
        ctx.stroke()
    }
    lastx = currentx
    lasty = currenty
}



