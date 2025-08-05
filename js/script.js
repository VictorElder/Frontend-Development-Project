const slider = document.querySelector(".slider")
const nextBtn = document.querySelector(".slider_btn")
const prevBtn = document.querySelector(".prev_btn")
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
    slider.scrollLeft += 300
})
 prevBtn.addEventListener("click", ()=> {
     slider.scrollLeft -= 250
 })

function addToCart() {
    alert("item has been added to cart")
}