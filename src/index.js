import './styles/screen.scss'

const main = () => {
  $(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
      moveRight();
    }, 3000);
  });

  var slideCount = $('#slider #j-slider .slides').length;
  var slideWidth = $('#slider #j-slider .slides').width();
  var slideHeight = $('#slider #j-slider .slides').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({ width: slideWidth, height: slideHeight });

  $('#slider #j-slider').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('#slider #j-slider .slides:last-child').prependTo('#slider #j-slider');

  $(function moveLeft() {
    $('#slider #j-slider').animate({
      left: + slideWidth
    }, 200, function () {
      $('#slider #j-slider .slides:last-child').prependTo('#slider #j-slider');
      $('#slider #j-slider').css('left', '');
    });
  });

  $(function moveRight() {
    $('#slider #j-slider').animate({
      left: - slideWidth
    }, 200, function () {
      $('#slider #j-slider li:first-child').appendTo('#slider #j-slider');
      $('#slider #j-slider').css('left', '');
    });
  });

  $('.control').click(function () {
    moveLeft();
  });

  $('.control-next').click(function () {
    moveRight();
  });

  });

}

document.addEventListener('DOMContentLoaded', main)

// HERE BE DRAGONS... and webpack. Don't touch.
if (process.env.NODE_ENV !== 'production') require('./index.html')
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
