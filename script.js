function data1() {
    let fb = document.getElementsByClassName("fb");
    fb[1].classList.remove("cur");
    fb[0].classList.add("cur")
    document.getElementById("1").classList.remove("hide")
    document.getElementById("2").classList.add("hide")
} function data2() {
    let fb = document.getElementsByClassName("fb");
    fb[0].classList.remove("cur");
    fb[1].classList.add("cur")
    document.getElementById("2").classList.remove("hide")
    document.getElementById("1").classList.add("hide")
}

// prevent menu popup on long press
window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}



// // add our event listeners
// const slides = Array.from(document.querySelectorAll('.container'))
// slides.forEach((slide, index) => {
//     // touch events
//     slide.addEventListener('touchstart', touchStart(index))
//     slide.addEventListener('touchend', touchEnd)
//     // mouse events
//     slide.addEventListener('mousedown', touchStart(index))
//     slide.addEventListener('mouseup', touchEnd)
//     slide.addEventListener('mouseleave', touchEnd)
// })

// function getPositionX(event) {
//     return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
// }

// let startpos = 0, endpos = 0
// // use a HOF so we have index in a closure
// function touchStart(index) {
//     return function (event) {
//         startPos = getPositionX(event)
//     }
// }
// function touchEnd(event) {
//     return function (event) {
//         endpos = getPositionX(event)
//         const movedBy = endpos - startpos
//         console.log(movedBy)
//         // if moved enough negative then snap to next slide if there is one
//         if (movedBy < -100) data2()

//         // if moved enough positive then snap to previous slide if there is one
//         if (movedBy > 100) data1()
//     }

// }