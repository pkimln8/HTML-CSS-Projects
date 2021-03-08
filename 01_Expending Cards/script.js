const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('mouseenter', () => {
    panel.classList.add('active')
  })
  panel.addEventListener('mouseleave', () => {
    removeActiveClasses()
  })
  panel.addEventListener('click', () => {
    console.info(panel.baseURI);
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
} 