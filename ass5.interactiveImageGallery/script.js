
const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const caption = document.getElementById("caption");

const closeButton = document.getElementById("close");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let visibleItems = [...items];
let currentIndex = 0;
let lastFocusedElement = null;

filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
        const category = filter.dataset.category;

        filters.forEach(function (button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        items.forEach(function (item) {
            if (
                category === "all" ||
                item.dataset.category === category
            ) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });

        visibleItems = [...items].filter(function (item) {
            return !item.classList.contains("hidden");
        });
    });
});

function openLightbox(index) {
    currentIndex = index;
    lastFocusedElement = document.activeElement;

    showImage();

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    closeButton.focus();

    document.body.style.overflow = "hidden";
}

function showImage() {
    const item = visibleItems[currentIndex];
    const image = item.querySelector("img");
    const title = item.querySelector("h3");

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    caption.textContent = title.textContent;
}

function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

function showNext() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    showImage();
}

function showPrevious() {
    currentIndex =
        (currentIndex - 1 + visibleItems.length) %
        visibleItems.length;

    showImage();
}

items.forEach(function (item) {
    item.addEventListener("click", function () {
        if (item.classList.contains("hidden")) {
            return;
        }

        const index = visibleItems.indexOf(item);
        openLightbox(index);
    });

    item.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            item.click();
        }
    });

    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
});

closeButton.addEventListener("click", closeLightbox);
nextButton.addEventListener("click", showNext);
previousButton.addEventListener("click", showPrevious);

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("open")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowRight") {
        showNext();
    } else if (event.key === "ArrowLeft") {
        showPrevious();
    }
});
