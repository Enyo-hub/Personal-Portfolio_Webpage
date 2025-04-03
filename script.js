// Smooth Scrolling Functionality
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default jump
        const sectionId = this.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const extraText = document.getElementById("extra-text");

    readMoreBtn.addEventListener("click", function () {
        if (extraText.classList.contains("hidden")) {
            extraText.classList.remove("hidden");
            readMoreBtn.textContent = "Read less"; // Change button text
        } else {
            extraText.classList.add("hidden");
            readMoreBtn.textContent = "Read more"; // Revert button text
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const extraText = this.previousElementSibling; // Get extra text before button
            if (extraText.classList.contains("hidden")) {
                extraText.classList.remove("hidden");
                this.textContent = "Read Less";
            } else {
                extraText.classList.add("hidden");
                this.textContent = "Read More";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let index = 0;

    function showTestimonial(i) {
        testimonials.forEach((t, idx) => {
            t.classList.remove("active");
            if (idx === i) t.classList.add("active");
        });
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial(index);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get input values
        const fullName = form.querySelector("input[placeholder='Full Name']").value.trim();
        const email = form.querySelector("input[placeholder='Email Address']").value.trim();
        const phone = form.querySelector("input[placeholder='Phone Number']").value.trim();
        const subject = form.querySelector("input[placeholder='Email Subject']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        // Email validation regex
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Validate inputs
        if (fullName === "" || email === "" || message === "") {
            alert("Full Name, Email, and Message are required!");
            return;
        }

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address!");
            return;
        }

        // If validation passes
        alert("Form submitted successfully! 🚀");
        form.reset(); // Clear form after submission
    });
});

