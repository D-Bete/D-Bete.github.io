document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }

    );

revealElements.forEach((element) => {

    revealObserver.observe(element);

});

const animatedGroups = [
    ".social-grid .reveal",
    ".projects-grid .reveal"
];

animatedGroups.forEach((selector) => {

    document
        .querySelectorAll(selector)
        .forEach((element, index) => {

            element.style.transitionDelay =
                `${index * 80}ms`;

        });

});
