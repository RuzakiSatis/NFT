const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const currentItem = animItems[index];
            const animItemsHeight = currentItem.offsetHeight;
            const animItemsOffset = offset(currentItem).top;
            const animStart = 4;

            let animItemsPoint = window.innerHeight - animItemsHeight / animStart;

            if (animItemsHeight > window.innerHeight) {
                animItemsPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemsOffset - animItemsPoint) && pageYOffset < (animItemsOffset + animItemsHeight)) {
                currentItem.classList.add("_active");
            } else {
                currentItem.classList.remove("_active");
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    animOnScroll();
}

