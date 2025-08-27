document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            if (!name || !email || !message) {
                alert("All fields are required.");
                return;
            }
            alert("Thank you for contacting us, " + name + "! We will reply to " + email + " soon.");
            form.reset();
        });
    }
});