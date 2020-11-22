//Query selector function
const selectElement = (element) => {
    return document.querySelector(element);
};


const menuToggler = selectElement(".menu__toggle");
const body = selectElement("body");


menuToggler.addEventListener("click", () => {
    body.classList.toggle("open")
})