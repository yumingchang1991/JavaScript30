addHomeButton()
addNavBarCSS()

function addNavBarCSS() {
  const Head = document.getElementsByTagName('HEAD')[0]
  const link = document.createElement('link')
  link.href = '../NavBar.css'
  link.type = 'text/css'
  link.rel = 'stylesheet'
  Head.appendChild(link)
}

function addHomeButton() {
  const Body = document.querySelector('body')
  Body.insertBefore(returnNavBar(), Body.firstChild)
}

function returnNavBar() {
  const NavBar = document.createElement('nav')
  NavBar.className = 'nav-bar'
  NavBar.appendChild(returnLinkToHome())
  return NavBar
}

function returnLinkToHome() {
  const linkToHome = document.createElement('a')
  linkToHome.className = 'nav-bar-link'
  linkToHome.text = 'Go Back'
  linkToHome.href = '../index.html'
  
  return linkToHome
}

