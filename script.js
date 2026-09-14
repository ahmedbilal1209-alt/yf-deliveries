function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "923218410208";

    const text =
        "New Customer Message - Y&F Deliveries%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Message: " + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + text;

    window.open(whatsappURL, "_blank");
}