const panels = document.querySelectorAll('.panel')
panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

function toggleOpen() {
  this.classList.toggle('open')
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active')
  }
  /* flex and flex-grow in css are translated differently in browser, whatever is used in the file */
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
}