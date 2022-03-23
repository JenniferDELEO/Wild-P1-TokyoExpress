const messageAfterSubmit ="Merci pour votre message 😜 L'équipe de Tokyo Express vous répondra dès que possible !";

document
  .getElementById("contactFormAboutus").addEventListener("submit", function(event) {
    event.preventDefault();
    alert(messageAfterSubmit);
  });

 // window.open('mailto:test@example.com?subject=subject&body=body');