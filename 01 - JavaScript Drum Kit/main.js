mountListener()

function mountListener() {
  const keys = Array.from(document.querySelectorAll('.key'))
  keys.forEach(key => key.addEventListener('transitionend', removePlayingClass))
  window.addEventListener('keydown', playAudio)
}

// event handler
function playAudio(e) {
  const Audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  const Key = document.querySelector(`.key[data-key='${e.keyCode}']`)
  if (!Audio) return

  Key.classList.add('playing')

  Audio.currentTime = 0
  Audio.play()
}
function removePlayingClass(e) {
  e.target.classList.remove('playing')
}

