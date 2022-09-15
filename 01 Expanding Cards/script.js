const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    // panel.forEach((panel)=>{})  // Correct
    panels.forEach((panel) => {    // Correct
        panel.classList.remove('active')
    })
}