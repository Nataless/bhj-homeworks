function rotator(int_of_wheel) {
    clearInterval(int_of_wheel)
    const activElem = document.querySelector(".rotator__case_active"),
        nextElem = activElem.nextElementSibling !== null ? activElem.nextElementSibling : document.querySelector(".rotator__case");
        let time = activElem.dataset.speed;

    activElem.style.color = activElem.dataset.color

    interval(activElem, nextElem, time)

}

function interval(activElem, nextElem, time) {

    int_of_wheel = setInterval(() => {
        activElem.classList.remove("rotator__case_active")
        nextElem.classList.add("rotator__case_active")
        rotator(int_of_wheel)
    }, 1000)

}
rotator()