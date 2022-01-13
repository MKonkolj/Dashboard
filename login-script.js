const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", () => {

    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    togglePassword.classList.toggle("hidden-eye");

});