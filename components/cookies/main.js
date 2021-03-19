function cookies() {
  const disclaimer = document.querySelector('#cookies-disclaimer')

  if (localStorage.getItem('cookies-accepted')) {
    hideCookiesDisclaimer(disclaimer)
    return
  }

  const button = disclaimer.querySelector('button')

  button.addEventListener('click', (event) => {
    localStorage.setItem('cookies-accepted', true)
    hideCookiesDisclaimer(disclaimer)
  })
}

function hideCookiesDisclaimer(disclaimer) {
  disclaimer.className = ' hidden'
}
