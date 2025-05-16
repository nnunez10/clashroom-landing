document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");
    const projects = document.querySelectorAll(".project");

    const observerOptions = {
        threshold: 0.2
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "0.8s ease-in-out";
            }
        });
    }, observerOptions);

    features.forEach(feature => fadeInObserver.observe(feature));
    projects.forEach(project => fadeInObserver.observe(project));
});
