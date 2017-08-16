import './styles/screen.scss'

const main = () => {
  document.querySelector('h1').textContent += ''
  var dis = document.getElementById('Wel').style.display = none;
  var images = [
  'http://8k.hdwallpaperup.com/wp-content/uploads/2016/12/Jones-Beach-Australia-4K-Wallpaper.jpg',
  'http://8k.hdwallpaperup.com/wp-content/uploads/2017/02/Musha-Cay-Island-in-the-Bahamas-5K-Wallpaper-680x425.jpg',
  'http://8k.hdwallpaperup.com/wp-content/uploads/2017/01/Lake-Sunset-Trees-8K-Wallpaper-680x425.jpg',
  'http://8k.hdwallpaperup.com/wp-content/uploads/2016/12/Jones-Beach-Australia-4K-Wallpaper.jpg',
  'https://tse1.mm.bing.net/th?&id=OIP.M36006a548e63f173365df6e89e14aba6o0&w=310&h=173&c=0&pid=1.9&rs=0&p=0&r=0',
  'https://tse4.mm.bing.net/th?id=OIP.tVABsB9ks01XbiMvnO7rpAFNC7&w=244&h=160&c=7&qlt=90&o=4&pid=1.7'
];

var num=0;
var slider;
function next() {
  var slider=document.getElementById('workin'); num++;
  if (num >= images.length) {
    num=0;
  }
  slider.src=images[num]
}

function prev() {
  var slider=document.getElementById('workin'); num--;
  if (num < 0) {
    num=images.length-1;
  }
  slider.src=images[num];
  }
}

document.addEventListener('DOMContentLoaded', main)

// HERE BE DRAGONS... and webpack. Don't touch.
if (process.env.NODE_ENV !== 'production') require('./index.html')
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
