import './styles/screen.scss'

const main = () => {
  document.querySelector('h1').textContent += ''
  var dis = document.getElementById('Wel').style.display = none;
}

document.addEventListener('DOMContentLoaded', main)

// HERE BE DRAGONS... and webpack. Don't touch.
if (process.env.NODE_ENV !== 'production') require('./index.html')
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
