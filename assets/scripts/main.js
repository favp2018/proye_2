let elementList = document.querySelectorAll(".fa-star");
let centers=document.querySelectorAll(".center");
let content=document.querySelector(".content"); 

elementList.forEach(function(element){
    element.addEventListener('click',function(){
        alert("estrella clickeada");
        element.classList.remove("far");
        element.classList.add("fas");
    })
});

centers.forEach(function(center){
    center.addEventListener('click',function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInDown");
        content.classList.add("animated");
        content.classList.add("bounceOutDown");
        setTimeout(() => {
            location.href="../index.html"
        }, 1000);  
    });
})



