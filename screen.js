let slides = Array.from(document.querySelectorAll('.container'))
let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID,
    currentIndex = 0
slides.forEach((slide, index) => {
    // touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    // mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
})


// prevent menu popup on long press
window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// use a HOF so we have index in a closure
function touchStart(index) {
    return function (event) {
        currentIndex = index
        startPos = getPositionX(event)
    }
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function touchEnd(event) {
    let end = getPositionX(event)
    const movedBy = end - startPos

    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100) data1()

    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100) data2()

}
