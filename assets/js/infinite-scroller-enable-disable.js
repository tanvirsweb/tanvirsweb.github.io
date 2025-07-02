

const scrollToggleBtn = document.getElementById("scroll-toggle-btn");
const scrollerIds = ["scroller-1", "scroller-2", "scroller-3"];
let isScrolling = true;

const scrollers = scrollerIds
    .map(id => document.getElementById(id))
    .filter(el => el !== null);

function cleanupDuplicatedItems(scrollerInner) {
    const children = Array.from(scrollerInner.children);
    children.forEach(child => {
        if (child.hasAttribute("aria-hidden")) {
            child.remove();
        }
    });
}

function addAnimation() {
    scrollers.forEach(scroller => {
        // Prevent re-adding if already animated
        if (scroller.getAttribute("data-animated") === "true") return;

        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        // Remove previous duplicated items if any (just in case)
        cleanupDuplicatedItems(scrollerInner);

        const originalItems = Array.from(scrollerInner.children).filter(
            child => !child.hasAttribute("aria-hidden")
        );

        originalItems.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

function removeAnimation() {
    scrollers.forEach(scroller => {
        scroller.removeAttribute("data-animated");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        cleanupDuplicatedItems(scrollerInner);
    });
}

// Initially add animation if user doesn't prefer reduced motion
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

scrollToggleBtn.addEventListener("click", () => {
    if (isScrolling) {
        // Stop scrolling
        scrollers.forEach(scroller => {
            scroller.classList.remove("scroller");
        });
        removeAnimation();
        scrollToggleBtn.textContent = "Enable Scroll";
    } else {
        // Start scrolling
        scrollers.forEach(scroller => {
            scroller.classList.add("scroller");
        });
        addAnimation();
        scrollToggleBtn.textContent = "Disable Scroll";
    }
    isScrolling = !isScrolling;
});

