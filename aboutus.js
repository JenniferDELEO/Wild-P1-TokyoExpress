
const messageAfterSubmit ="Merci pour ton message 😜 L'équipe de Tokyo Express te répondra dès que possible !";


document
  .getElementById("contactFormAboutus").addEventListener("submit", function(event) {
    event.preventDefault();
    alert(messageAfterSubmit);
  });