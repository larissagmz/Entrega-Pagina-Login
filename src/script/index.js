const recoverPasswordButton = document.querySelector(".button-password");
const closeModalButton = document.querySelector(".button-exit");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};
[recoverPasswordButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});
