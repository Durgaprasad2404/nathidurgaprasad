const scriptURL =
  "https://script.google.com/macros/s/AKfycbxTZY9A3clfEhKXejrfmwV0AOkz1iA3R85_3VotuLBiee4yv65pomSwVEVU_hwfrSTM/exec";

const form = document.forms["contactForm"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
