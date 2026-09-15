define(['domReady!'], function () {
    'use strict';

    function decodeHtmlEntities(str) {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    }

    function cleanJsonString(str) {
        let decoded = decodeHtmlEntities(str);
        decoded = decoded.replace(/\\"/g, '"');
        return decoded;
    }

    function getImageUrlFromData(el) {
        try {
            const raw = el.getAttribute('data-background-images');
            if (!raw || raw.trim() === '{}') return null;

            const clean = cleanJsonString(raw);
            const parsed = JSON.parse(clean);

            const isMobile = window.innerWidth <= 768;

            if (isMobile && parsed.mobile_image) {
                return parsed.mobile_image;
            } else if (!isMobile && parsed.desktop_image) {
                return parsed.desktop_image
            } else {
                return null;
            }

        } catch (e) {
            console.warn('Could not parse background image data', e, el.getAttribute('data-background-images'));
            return null;
        }
    }

    const elements = document.querySelectorAll('[data-background-images][data-background-type="image"]');

    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => {
            const bg = getImageUrlFromData(el);
            if (bg) {
                el.style.backgroundImage = `url("${bg}")`;
            }
        });
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const bg = getImageUrlFromData(el);
                if (bg) {
                    el.style.backgroundImage = `url("${bg}")`;
                    el.classList.add('pb-lazy-bg--loaded');
                }
                obs.unobserve(el);
            }
        });
    }, {
        rootMargin: "200px 0px",
        threshold: 0.01
    });

    elements.forEach(el => {
        if (getImageUrlFromData(el)) {
            observer.observe(el);
        }
    });
});
