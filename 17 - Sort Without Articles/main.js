const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsRaw = document.getElementById('bands-raw')
bands.forEach( band => bandsRaw.innerHTML += `
  <li>${band}</li>
`)

const bandsSorted = document.getElementById('bands-sorted')
const regex = /^(\s?the\s|\s?a\s|\s?an\s)/gi

bands
  .sort(( bandA, bandB ) => {
    const letterA = bandA.replace(regex, '').trim().toLowerCase().charCodeAt(0)
    const letterB = bandB.replace(regex, '').trim().toLowerCase().charCodeAt(0)
    return letterA - letterB
  })
  .forEach(band => bandsSorted.innerHTML += `
    <li>${band}</li>
  `)