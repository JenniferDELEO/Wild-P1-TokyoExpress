const contactFormInJS = document.getElementById("contact-form");

function sendMessage(event) {
  event.preventDefault();
  const divToFill = document.querySelector(".dynamicMessageSentSection");
  const name = document.querySelector("#user_name");
  const message = document.querySelector("#message");
  document.querySelector("#contact-form").style.display = "none";
  divToFill.innerHTML = `
    <h3>Message envoyé</h3>
    <p>Merci ${name.value} 😜.<br>L'équipe de Tokyo Express a bien reçu ton message :<br>
    "${message.value}".<br>
    Nous te répondrons dès que possible !</p>`;
  divToFill.classList.remove("display");
}

contactFormInJS.addEventListener("submit", sendMessage);
