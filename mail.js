// Талбар цэвэрлэх функц
function clearField(id) {
    document.getElementById(id).value = '';
}

// Form submit хийх үед имэйл илгээх
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // EmailJS ашиглан илгээх
    emailjs.send("service_xxxservice_euq2k7e", "template_m3oiaa5", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Форм цэвэрлэх
    }, function(error) {
        alert("Failed to send message. Try again.");
    });
});
