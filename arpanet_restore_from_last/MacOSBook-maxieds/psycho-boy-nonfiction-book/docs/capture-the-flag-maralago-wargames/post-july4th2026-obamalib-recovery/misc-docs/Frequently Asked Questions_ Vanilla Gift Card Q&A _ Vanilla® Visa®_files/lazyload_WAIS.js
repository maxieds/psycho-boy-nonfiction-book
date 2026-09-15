document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(
        "img:not([data-lazy-skip]):not([loading='lazy']):not([data-src])"
    );

    const viewportHeight = window.innerHeight;
    const lazyImages = [];

    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        const inViewport = rect.top < viewportHeight && rect.bottom > 0;

        if (inViewport) {
            img.setAttribute("data-lazy-skip", "true");
        } else {
            if (img.hasAttribute("src")) {
                img.setAttribute("data-src", img.getAttribute("src"));
                img.removeAttribute("src");
            }
            lazyImages.push(img);
        }
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute("data-src");
                    }
                    obs.unobserve(img);
                }
            });
        }, {
            rootMargin: "200px 0px",
            threshold: 0.01
        });

        lazyImages.forEach(img => observer.observe(img));
    } else {
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
            }
        });
    }
});
