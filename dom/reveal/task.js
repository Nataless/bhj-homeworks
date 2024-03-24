const rev = document.querySelectorAll(".reveal")

function isScrolling(el) {
    const { top, bottom } = el.getBoundingClientRect()

    if (bottom < 0) { return false }

    if (top > window.innerHeight) { return false }

    return true

}

window.addEventListener('scroll', function(){
    rev.forEach((el) => {
        if (isScrolling(el)) {
            el.classList.add("reveal_active")
        }
        else {
            el.classList.remove("reveal_active")
        }
    })

})