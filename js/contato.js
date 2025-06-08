// Validação em tempo real e envio
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const fields = form.querySelectorAll(".field");

  // Função para validar um campo
  function validateField(field) {
    const input = field.querySelector("input, select, textarea");
    if (!input.checkValidity()) {
      field.classList.add("invalid");
      return false;
    } else {
      field.classList.remove("invalid");
      return true;
    }
  }

  // Validar campos ao sair do foco
  fields.forEach(field => {
    const input = field.querySelector("input, select, textarea");
    input.addEventListener("blur", () => validateField(field));
  });

  // Ao submeter
  form.addEventListener("submit", e => {
    e.preventDefault();
    let allValid = true;
    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });
    if (allValid) {
      alert("🙏 Obrigado pelo contato! Em breve retornaremos.");
      form.reset();
    } else {
      alert("⚠️ Por favor, corrija os campos em vermelho.");
    }
  });
});
