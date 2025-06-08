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

// Animação ao rolar (sem libs externas)
document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll("[data-animar]");

  const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    animatedItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        const animType = item.dataset.animar;
        item.classList.add(animType);
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // inicializa
});

// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const animarItens = document.querySelectorAll("[data-animar]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animar);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  animarItens.forEach(el => observer.observe(el));
});

// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Animações com data-animar
  const animarItens = document.querySelectorAll("[data-animar]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animar);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animarItens.forEach(el => observer.observe(el));

  // Interatividade do FAQ
  const perguntas = document.querySelectorAll(".faq-pergunta");
  perguntas.forEach(botao => {
    botao.addEventListener("click", () => {
      const resposta = botao.nextElementSibling;
      resposta.classList.toggle("ativa");
    });
  });
});
