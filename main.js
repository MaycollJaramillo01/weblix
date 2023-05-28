const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const checkpoints = document.querySelectorAll(".scroll-checkpoint");
const links = document.querySelectorAll(".menu ul a");

menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("menu-open");
});

window.addEventListener("scroll", () => {
    if(pageYOffset > 50){
navbar.classList.add("navbar-active");
    } else {
        navbar.classList.remove("navbar-active");
    }
    for(let i=0; i<checkpoints.length; i++){
        if(pageYOffset > checkpoints[i].offsetTop - 50){
           links.forEach(link => link.classList.remove("active"));

           links[i].classList.add("active");
        }
    }
})

const images = document.querySelectorAll("#portfolio > img");
const modal = document.querySelector(".modal");
const modaling = document.querySelector(".modal img");


images.forEach(img => {
    img.addEventListener("click", e => {
        modaling.src = e.target.src;

        modal.style.display = "flex";

        setTimeout(()=>{
            modal.style.opacity = "1";
        }, 10);
    });
});

modal.addEventListener("click", ()=>{
    modal.style.opacity = "0";

    setTimeout(()=>{
        modal.style.display = "none";
    }, 500);
});