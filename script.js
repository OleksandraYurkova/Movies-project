document.addEventListener("DOMContentLoaded", function () {
  const filmsBtn = document.getElementById("filmsBtn");
  const filmsDropdown = document.getElementById("filmsDropdown");

  filmsBtn.addEventListener("click", function (event) {
    event.preventDefault();
    filmsDropdown.style.display =
      filmsDropdown.style.display === "grid" ? "none" : "grid";
  });

  document.addEventListener("click", function (event) {
    if (
      !filmsBtn.contains(event.target) &&
      !filmsDropdown.contains(event.target)
    ) {
      filmsDropdown.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const serialsBtn = document.getElementById("serialsBtn");
    const serialsDropdown = document.getElementById("serialsDropdown");
  
    serialsBtn.addEventListener("click", function (event) {
      event.preventDefault();
      serialsDropdown.style.display =
      serialsDropdown.style.display === "grid" ? "none" : "grid";
    });
  
    document.addEventListener("click", function (event) {
      if (
        !serialsBtn.contains(event.target) &&
        !serialsDropdown.contains(event.target)
      ) {
        serialsDropdown.style.display = "none";
      }
    });
  });
  

  const showLoginButton = document.getElementById('show-login');
  const loginFormContainer = document.getElementById('login-form-container');
  const closeLoginButton = document.getElementById('close-login');
  const mainContent = document.getElementById('main-content');
  const overlay = document.createElement('div'); // Створюємо затемнення
  overlay.classList.add('overlay');
  document.body.appendChild(overlay); // Додаємо затемнення в body
  
  // Показати форму входу
  showLoginButton.addEventListener('click', function(event) {
      event.preventDefault();
      loginFormContainer.style.display = 'flex';
      mainContent.classList.add('blur-background'); // Блюримо контент
      overlay.style.display = 'block'; // Показуємо затемнення
  });
  
  // Закрити форму входу
  closeLoginButton.addEventListener('click', function() {
      loginFormContainer.style.display = 'none';
      mainContent.classList.remove('blur-background');
      overlay.style.display = 'none'; // Ховаємо затемнення
  });
  
  