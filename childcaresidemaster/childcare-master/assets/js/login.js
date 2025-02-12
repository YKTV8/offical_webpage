function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", ".form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
// input error message in field
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
 function clearInputError(inputElement){
    inputElement.classList.remove("firm__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textCintent = "";
 }

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
loginForm.addEventListener("submit", e =>{
    e.preventDefault();

    //Perform your ajax/fetch login
    setFormMessage(loginForm, "error", "Invalid Entry, try again")
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "User name must be 10 characters");
            }
            });

            inputElement.addEventListener("input", e =>{
                clearInputError(inputElement);
            })
        });
    });
    