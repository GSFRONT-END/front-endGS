document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modo-escuro-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  const form = document.getElementById("form-contato");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso!");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modo-escuro-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌗";
  });
});
