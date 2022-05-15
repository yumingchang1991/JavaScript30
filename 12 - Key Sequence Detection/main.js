const secret = 'yuming'
const pressed = []

function cleanPressed() {
  while (pressed.length > 0) {
    pressed.pop()
  }
}

function updatePageWithPressed() {
  const input = document.getElementById('user-input')
  input.value = pressed.join('')
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Delete' ) {
    cleanPressed()
    updatePageWithPressed()
    return
  }

  pressed.push(e.key)
  
  const currentInput = pressed.join('')
  if (currentInput.length > secret.length) {  
    const newPressed = [ ...currentInput ]
    while (newPressed.length !== secret.length) {
      newPressed.shift()
    }
    cleanPressed()
    while (newPressed.length > 0) {
      pressed.push(newPressed.shift())
    }
  }

  updatePageWithPressed()

  if (pressed.join('') === secret) {
    console.log('Secret Key is Matched!');
    cornify_add()
  }
})