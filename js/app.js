
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  cellSelector: '.carousel-cell',
  resize: true,
  autoPlay: true,
  prevNextButtons: false,
});



var testimonial = document.querySelector('.testimonial-carousel');
var slide  = new Flickity(testimonial, {
  // options
  cellAlign: 'left',
  contain: true,
  cellSelector: '.testimonial-cell',
  resize: true,
  autoPlay: true,
  prevNextButtons: false,
  pauseAutoPlayOnHover: false
});

var videoButton = document.getElementById('watch');
var video = document.getElementById('vid');
var close = document.getElementById('close');

videoButton.addEventListener('click', function() {
    video.style.display='block'
})

close.addEventListener('click', function() {
   video.style.display='none'
})

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}