// The Web Speech API enables you to incorporate voice data into web apps.The Web Speech API has two parts: SpeechSynthesis(Text - to - Speech), and SpeechRecognition(Asynchronous Speech Recognition.)
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// the former is only accessible in FireFox
// the latter is in Edge, Chrome

const recognition = new SpeechRecognition();
recognition.interimResult = true
// Controls whether interim results should be returned(true) or not(false.)
// Interim results are results that are not yet final


const words = document.querySelector('.words')

// words is a div element

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    .replace(/poop|poo|shit|dump/gi, '💩')
  
  if (e.results[0].isFinal) {
    let p = document.createElement('p')
    p.textContent = transcript
    words.appendChild(p)
  }
})

recognition.addEventListener('end', recognition.start)

recognition.start()