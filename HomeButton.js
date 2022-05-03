function addHomeButton() {
  const Body = document.querySelector('body')
  const HomeButton = returnHomeButtonElement()
  Body.insertBefore(HomeButton , Body.firstChild)
}

function returnHomeButtonElement() {
  const homeButton = document.createElement('button')
  homeButton.style.background = 'red'
  homeButton.textContent = 'Go Back'
  return homeButton
}

addHomeButton()