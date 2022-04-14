const styleStoggle = document.querySelector(".style-switecher-toggler");
styleStoggle.addEventListener("click",()=>{
    document.querySelector(".style-switecher").classList.toggle("open");
});

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switecher").classList.contains("open")){
        document.querySelector(".style-switecher").classList.remove("open");
    }
})


const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
