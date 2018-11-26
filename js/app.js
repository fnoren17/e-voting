// When the user scrolls the page, execute scrollHandler
// window.onscroll = () => {
//   scrollHandler();
// };
var timeoutBool = true;
var timeout = 3000; //ms
var currentChapter = 1;

window.onscroll = function(e) {
  // print "false" if direction is down and "true" if up
  console.log(this.oldScroll > this.scrollY);
  this.oldScroll = this.scrollY;
};

var contentContainer = document.getElementsByClassName('content-container')[0];
var contentHeight = contentContainer.getBoundingClientRect().height;
var chapters = document.getElementsByClassName('chapter-row');
for (var i = 0; i < chapters.length; i++) {
  chapters[i].style.height = contentHeight + 'px';
}

contentContainer.addEventListener('scroll', e => {
  var scrollDirection = this.oldScroll > this.scrollY;

  if (timeoutBool) {
    timeoutBool = false;

    console.log(scrollDirection);
    // Down = false // Up = true
    if (scrollDirection) {
    }
    // run normal code

    window.setTimeout(() => {
      timeoutBool = true;
      console.log(timeoutBool);
    }, timeout);
  }
});

function scrollHandler() {
  if (window.pageYOffset >= sticky) {
    stickybar.classList.add('sticky');
  } else {
    stickybar.classList.remove('sticky');
  }
  var header = document.getElementById('stickybar').getBoundingClientRect();
  var chap1 = document.getElementById('chapter1');
  var chap1rect = chap1.getBoundingClientRect();
  var chap2 = document.getElementById('chapter2');
  var chap2rect = chap2.getBoundingClientRect();
  var chap3 = document.getElementById('chapter3');
  var chap3rect = chap3.getBoundingClientRect();
  var chap4 = document.getElementById('chapter4');
  var chap4rect = chap4.getBoundingClientRect();

  if (chap1rect.bottom <= header.bottom) {
    document.getElementById('chap1').style.backgroundColor = '#059ada';
  } else {
    document.getElementById('chap1').style.backgroundColor = '#0b7eb5';
  }
  if (chap2rect.bottom <= header.bottom) {
    document.getElementById('chap2').style.backgroundColor = '#059ada';
  } else {
    document.getElementById('chap2').style.backgroundColor = '#0b7eb5';
  }
  if (chap3rect.bottom <= header.bottom) {
    document.getElementById('chap3').style.backgroundColor = '#059ada';
  } else {
    document.getElementById('chap3').style.backgroundColor = '#0b7eb5';
  }
  if (chap4rect.bottom <= header.bottom) {
    document.getElementById('chap4').style.backgroundColor = '#059ada';
  } else {
    document.getElementById('chap4').style.backgroundColor = '#0b7eb5';
  }
}

var stickybar = document.getElementById('stickybar');
var sticky = stickybar.offsetTop;

// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');
var btn2 = document.getElementById('myBtn2');

// Get the <span> element that closes the modal
var span = document.getElementById('close');
var span2 = document.getElementById('close2');

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};
btn2.onclick = function() {
  modal2.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};
span2.onclick = function() {
  modal2.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
};
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n /*, index*/) {
  // Senare kan vi lägga till en inparameter med index för att vet vilka slides vi ska hämta
  var i;
  var slides = document.getElementsByClassName('mySlides' /* + index */);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

var slideIndex2 = 1;
showSlides2(slideIndex2);
// Next/previous controls
function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  var j;
  var slides2 = document.getElementsByClassName('mySlides2');
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = 'none';
  }
  slides2[slideIndex2 - 1].style.display = 'block';
}
