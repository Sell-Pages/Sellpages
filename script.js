function animateTransition(link) {
    document.body.style.transition = "transform 0.5s ease-in-out, scale 0.5s ease-in-out";
    document.body.style.transform = "translateX(100%) scale(0.8)";
    setTimeout(function() {
        window.location.href = link;
    }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.transition = "transform 0.5s ease-in-out, scale 0.5s ease-in-out";
    document.body.style.transform = "translateX(0) scale(1)";

    const offerBtn = document.getElementById("offerBtn");
    const contactBtn = document.getElementById("contactBtn");
    const faqBtn = document.getElementById("faqBtn");
    const mainBtn = document.getElementById("mainBtn");

    if (offerBtn) {
        offerBtn.addEventListener("click", function (e) {
            e.preventDefault();
            animateTransition("oferta.html");
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener("click", function (e) {
            e.preventDefault();
            animateTransition("kontakt.html");
        });
    }

    if (mainBtn) {
        mainBtn.addEventListener("click", function (e) {
            e.preventDefault();
            animateTransition("index.html");
        });
    }
    
    if (faqBtn) {
        faqBtn.addEventListener("click", function (e) {
            e.preventDefault();
            animateTransition("faq.html");
        });
    }
});
