const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const trigger = window.innerHeight / 5 * 4
  const triggerBottom = window.innerHeight * 4
  console.info(triggerBottom)
  console.info(trigger)

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    console.info(boxTop)

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } 
    if (boxTop > trigger) {
      box.classList.remove('show')
    }
  })
}