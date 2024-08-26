let login = document.getElementById("login");
let container = document.getElementById("container");
let registrar = document.getElementById("registrar");

login.addEventListener("click", () => {
    container.classList.add("active");
});
registrar.addEventListener("click", () => {
    container.classList.remove("active");
});
