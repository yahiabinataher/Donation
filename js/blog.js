

let accordionItem = document.querySelectorAll(".faq_item")

accordionItem.forEach(item => {
    const title = item.querySelector(".faq_title")
    
    title.addEventListener("click", () => {
        title.nextElementSibling.classList.toggle("hidden")
   })
    
})




