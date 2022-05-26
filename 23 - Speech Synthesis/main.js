const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector('[name=text]').value
// The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)
// to use utterance, we pass it to SpeechSynthesis.speak() function so that it knows the context to speak
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance

let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

function populateVoices() {
  voices = this.getVoices()
  voicesDropdown.innerHTML = voices
    .map(voice => {
      `<option value=${voice.name}>${voice.name} (${voice.lang})</option>`
    })
    .join('')
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value)
}

function toggle(startOver = true) {
  speechSynthesis.cancel()
  if (startOver) {
    speechSynthesis.speak(msg)
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption))
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false))
// stopButton.addEventListener('click', toggle.bind(null, false))