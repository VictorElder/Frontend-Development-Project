let slider = document.querySelector(".slider")
const nextBtn = document.querySelector(".slider_btn")
const prevBtn = document.querySelector(".prev_btn")
let cartEl = document.getElementById("cart-el")
let sidebarEl = document.getElementById("sidebar-el")
let sideContent = document.getElementById("side-content")
let addToCart = document.querySelectorAll(".add-to-cart")
let notificationAlert = document.getElementById("notification")
let notificationText = document.getElementById("notification-text")
const activePage = window.location.pathname

let count = 0


for(i = 0; i<addToCart.length; i++){
    
    addToCart[i].addEventListener('click', function(){
        
        notificationAlert.style.display = "block" ;
        notificationText.style.display = "block";
        
        setTimeout(function(){
            notificationText.style.display = "none"
        }, 1000);
        
        increment()
        
    })}
    
    function increment(){
       count += 1
        
        notificationAlert.textContent = count
}


cartEl.addEventListener('click', function(e){
    e.preventDefault()
    sidebarEl.style.display = 'flex';
    count = 0 ;
    notificationAlert.textContent = count ;
    
    notificationAlert.style.display = ("none")
})

window.addEventListener('wheel', function(e){
    
    eventHandler(e)
})

window.addEventListener('click', function(e){
    
    eventHandler(e)
})

function eventHandler(e) {
    if(e.target === sidebarEl){
        sidebarEl.style.display = 'none'
    }
}




console.log(activePage)
//let currentIndex = 0


// sliderBtn.addEventListener('click', ()=>{
//     slider[currentIndex].classList.remove('active')
//     currentIndex = (currentIndex + 1)% slider.length
//     slider[currentIndex].classList.add('active')
//     console.log("button clicked")
// })


slider.addEventListener("wheel", (e)=> {
    e.preventDefault()
    slider.scrollLeft += e.deltaY
})


nextBtn.addEventListener("click", ()=> {
    slider.style.scrollBehaviour = "smooth"
    slider.scrollLeft += 300;
})


 prevBtn.addEventListener("click", ()=> {
     slider.scrollLeft -= 250;
 })