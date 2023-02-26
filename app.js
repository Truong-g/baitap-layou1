const themeBtn = document.querySelector(".theme__btn");

themeBtn.onclick = function (_) {
  const body = document.querySelector("body");
  body.className =
    body.className === "theme-light" ? "theme-dark" : "theme-light";
};

window.onscroll = function (_) {
    const header = document.querySelector(".header")
    if(window.scrollY >= 100){
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
}