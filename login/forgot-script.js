const newPassword = document.querySelector("#newPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", () => {
    
    // toggle the type attribute
    const type = newPassword.getAttribute("type") === "password" ? "text" : "password";
    newPassword.setAttribute("type", type);
    confirmPassword.setAttribute("type", type);

    // toggle the icon
    togglePassword.classList.toggle("hidden-eye");

});