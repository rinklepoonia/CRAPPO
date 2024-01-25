function openNav() {
    document.querySelector(".menuList").classList.toggle("start-0");
    document.body.classList.toggle("overflow-hidden");
    document.querySelector(".menuIcon").classList.toggle("cross")
}


const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})

topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

})