function addHomeButton() {
  const Body = document.querySelector('body')
  Body.insertBefore(returnNavBar(), Body.firstChild)
}

function returnNavBar() {
  const NavBar = document.createElement('nav')
  // position
  NavBar.style.position = 'fixed'
  NavBar.style.top = 0
  NavBar.style.left = 0
  // box size
  NavBar.style.width = '100vw'
  NavBar.style.margin = 0
  // background
  NavBar.style.background = '#e6e6e6'
  NavBar.style.opacity = '0.7'
  NavBar.appendChild(returnLinkToHome())

  return NavBar
}

function returnLinkToHome() {
  const linkToHome = document.createElement('a')
  linkToHome.text = '<< Go Back'
  linkToHome.href = '../index.html'
  linkToHome.style.display = 'inline-block'
  linkToHome.style.width = '100%'
  linkToHome.style.color = 'black'
  
  linkToHome.style.textDecoration = 'none'
  linkToHome.style.textAlign = 'center'
  linkToHome.style.fontFamily = 'Calibri'
  linkToHome.style.fontWeight = 'bold'
  linkToHome.style.fontSize = '4em'
  
  return linkToHome
}

addHomeButton()