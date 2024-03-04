let accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        let content = accordion.querySelector('.accordion-content')
        content.classList.toggle('active')
    })
})