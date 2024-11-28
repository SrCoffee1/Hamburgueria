document.addEventListener("DOMContentLoaded", () => {
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const recoverPasswordButton = document.getElementById("recover-password-button");
    const registerButton = document.querySelector(".outline");

    const emailErrors = document.querySelectorAll(".email-error");
    const passwordErrors = document.querySelectorAll(".password-error");

    // Validação de email
    function validateEmail() {
        const emailValue = emailField.value.trim();

        if (!emailValue) {
            emailErrors[0].classList.add("active"); // Preencha o campo de email!
            emailErrors[1].classList.remove("active");
            return false;
        } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
            emailErrors[0].classList.remove("active");
            emailErrors[1].classList.add("active"); // Email inválido!
            return false;
        } else {
            emailErrors[0].classList.remove("active");
            emailErrors[1].classList.remove("active");
            return true;
        }
    }

    // Validação de senha
    function validatePassword() {
        const passwordValue = passwordField.value.trim();

        if (!passwordValue) {
            passwordErrors[0].classList.add("active"); // Preencha o campo de senha!
            passwordErrors[1].classList.remove("active");
            return false;
        } else if (passwordValue.length < 6) {
            passwordErrors[0].classList.remove("active");
            passwordErrors[1].classList.add("active"); // Senha inválida!
            return false;
        } else {
            passwordErrors[0].classList.remove("active");
            passwordErrors[1].classList.remove("active");
            return true;
        }
    }

    // Habilitar/desabilitar botões
    function toggleButtons() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            loginButton.disabled = false;
            recoverPasswordButton.disabled = false;
            registerButton.disabled = false;
        } else {
            loginButton.disabled = true;
            recoverPasswordButton.disabled = true;
            registerButton.disabled = true;
        }
    }

    // Eventos de validação nos campos
    emailField.addEventListener("input", toggleButtons);
    passwordField.addEventListener("input", toggleButtons);

    // Simulação de ação nos botões
    loginButton.addEventListener("click", () => {
        alert("Login realizado com sucesso!");
    });

    recoverPasswordButton.addEventListener("click", () => {
        alert("Instruções para recuperar a senha foram enviadas ao email.");
    });

    registerButton.addEventListener("click", () => {
        alert("Redirecionando para a página de registro...");
    });
});
