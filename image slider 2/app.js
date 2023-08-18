const scrollGallery = document.querySelector(".container");
const bButton = document.getElementById("backbtn");
const nButton = document.getElementById("nextbtn");

scrollGallery.addEventListener("wheel", (e)=>{
    scrollGallery.scrollLeft += e.deltaY;
    scrollGallery.style.scrollBehavior = "auto";

})
nButton.addEventListener('click',()=>{
    scrollGallery.style.scrollBehavior = "smooth";
    scrollGallery.scrollLeft += 900;
})
bButton.addEventListener('click',()=>{
    scrollGallery.style.scrollBehavior = "smooth";
    scrollGallery.scrollLeft -= 900;
})