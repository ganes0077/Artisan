// script.js

// 1. Initialize Lenis (Smooth Scrolling)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// 3. Hero Animation (Load)
const heroTitle = document.querySelectorAll('.hero h1 span');
if(heroTitle.length > 0) {
    gsap.to(heroTitle, {
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        delay: 0.5
    });
}

// 4. General Fade Up Animation for Sections
const fadeElements = document.querySelectorAll('[data-anim="fade-up"]');
fadeElements.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });
});

// 5. Image Parallax Effect
const images = document.querySelectorAll('.card-img');
images.forEach(img => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: -20, // Subtle parallax
        ease: "none"
    });
});