document.addEventListener("DOMContentLoaded", function () {

    // ================= MOBILE MENU =================

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });


    // ================= SCROLL ANIMATION =================

    const animatedSections =
        document.querySelectorAll(".scroll-animation");


    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedSections.forEach(function (section) {

        observer.observe(section);

    });


    // ================= ANIMATED STATISTICS =================

    const counters =
        document.querySelectorAll(".counter");


    counters.forEach(function (counter) {

        const target =
            Number(counter.getAttribute("data-target"));

        const suffix =
            counter.getAttribute("data-suffix") || "";

        let current = 0;

        const duration = 1500;

        const increment =
            target / (duration / 20);


        function updateCounter() {

            current += increment;

            if (current >= target) {

                current = target;

                counter.textContent =
                    Math.floor(current) + suffix;

                return;
            }

            counter.textContent =
                Math.floor(current) + suffix;

            setTimeout(updateCounter, 20);
        }


        updateCounter();

    });

});
// ================= CONTACT FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    // Name validation
    if (name.length < 2) {
        alert("Please enter your name.");
        return;
    }


    // Email validation
    const emailPattern =
     /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    // Phone validation
    if (phone !== "") {

        const phonePattern =
            /^[0-9+\-\s]{10,15}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

    }


    // Service validation
    if (service === "") {
        alert("Please select a service.");
        return;
    }


    // Message validation
    if (message.length < 10) {
        alert("Please tell us a little more about your business.");
        return;
    }


    // Success
    const formData = new FormData(contactForm);

      fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
      })
     .then(function (response) {
     return response.json();
     })
     .then(function (data) {
     if (data.success) {
        alert("Thank you, " + name + "! Your enquiry has been sent successfully.");
        contactForm.reset();
     } else {
        alert("Something went wrong. Please try again.");
     }
     })
     .catch(function () {
      alert("Unable to send your enquiry. Please try again.");
    });


});

// ================= ACTIVE NAVIGATION =================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Remove active class from all links
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        // Add active class to clicked link
        link.classList.add("active");

        // Close mobile menu
        navMenu.classList.remove("active");

    });

});
// ================= PAGE LOADER =================

window.addEventListener("load", function () {

    const pageLoader =
        document.getElementById("pageLoader");

    pageLoader.classList.add("hide");

});