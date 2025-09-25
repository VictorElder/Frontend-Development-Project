let slider = document.querySelector(".slider")
const nextBtn = document.querySelector(".slider_btn")
const prevBtn = document.querySelector(".prev_btn")
let cartEl = document.getElementById("cart-el")
let sidebarEl = document.getElementById("sidebar-el")
let sideContent = document.getElementById("side-content")
const activePage = window.location.pathname


function addToCart() {
    alert("item has been added to cart")
}



cartEl.addEventListener('click', function(e){
    e.preventDefault()
    sidebarEl.style.display = 'flex';
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