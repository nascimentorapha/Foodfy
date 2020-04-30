const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const imageID = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/LaunchBase/Foodfy/layouts/assets/${imageID}.png`
        // ${imageID}.png` 
    })
 }

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

