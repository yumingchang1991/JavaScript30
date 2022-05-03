function addHomeButton() {
  const Body = document.querySelector('body')
  const ButtonContainer = returnContainer()
  Body.insertBefore(ButtonContainer, Body.firstChild)
}

function returnContainer() {
  const Container = document.createElement('div')
  Container.style.position = 'fixed'
  Container.style.textAlign = 'center'
  Container.className = 'home-button-container'
  Container.appendChild(returnHomeButtonElement())
  return Container
}

function returnHomeButtonElement() {
  const homeButton = document.createElement('button')
  homeButton.style.width = '100vw'
  homeButton.style.height = '25vh'
  homeButton.style.background = '#e6e6e6'
  homeButton.style.paddingInline = '1rem'
  homeButton.style.paddingBlock = '0.7rem'
  homeButton.style.border = 'none'
  homeButton.appendChild(returnLinkToHome())
  return homeButton
}

function returnLinkToHome() {
  const linkToHome = document.createElement('a')
  linkToHome.text = '<< Go Back'
  linkToHome.href = '../index.html'
  linkToHome.style.textDecoration = 'none'
  linkToHome.style.fontFamily = 'Calibri'
  linkToHome.style.fontWeight = 'bold'
  linkToHome.style.fontSize = '3rem'
  return linkToHome
}

addHomeButton()