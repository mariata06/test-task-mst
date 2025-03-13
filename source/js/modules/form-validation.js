export function initFormValidation() {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const checkbox = document.getElementById("personal-policy");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    clearErrors();

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required");
      isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Enter a valid email");
      isValid = false;
    }

    if (!checkbox.checked) {
      showError(checkbox, "You must accept the Privacy Policy");
      isValid = false;
    }

    if (isValid) {
      submitForm();
    }
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "form-error";
    error.textContent = message;
    input.parentNode.appendChild(error);
  }

  function clearErrors() {
    document.querySelectorAll(".form-error").forEach((el) => el.remove());
  }

  function submitForm() {
    // обработка отправки формы, заглушка
  }
}
