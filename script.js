// script.js

document.addEventListener("DOMContentLoaded", () => {
    function updateDateTime() {
        const dateTimeElement = document.getElementById("date-time");
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        dateTimeElement.textContent = now.toLocaleDateString("pt-BR", options);
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});
