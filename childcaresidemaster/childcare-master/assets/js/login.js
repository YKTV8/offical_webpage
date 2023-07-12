function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classlist.remove("form__message--success", "form__message--error");
    messageElement.classlist.add('form__message--${type}');
}

setFormMessage(loginForm, "success", "you're logged in!");

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form-hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form-hidden");
});
loginForm.addEventListener('submit', e =>{
    e.preventDefault();

    //Perform your ajax/fetch login

    setFormMessage(loginForm, "error", "Invalid Entry, try again")
})
});