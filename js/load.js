const wrapper = document.querySelectorAll("#wrapper")


wrapper.forEach((wrapper) => {
    wrapper.style.opacity = 0

    setTimeout(() => {
        wrapper.style.opacity = 1
    }, 1000)
})