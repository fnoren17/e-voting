// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  console.log(height);
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';

  var header = document
    .getElementsByClassName('header')[0]
    .getBoundingClientRect();
  console.log(header);
  var chap1 = document.getElementById('chapter1');
  var chap1rect = chap1.getBoundingClientRect();
  var chap2 = document.getElementById('chapter2');
  var chap2rect = chap2.getBoundingClientRect();
  var chap3 = document.getElementById('chapter3');
  var chap3rect = chap3.getBoundingClientRect();
  var chap4 = document.getElementById('chapter4');
  var chap4rect = chap4.getBoundingClientRect();
  var chap5 = document.getElementById('chapter5');
  var chap5rect = chap5.getBoundingClientRect();

  if (chap1rect.top <= header.bottom) {
    document.getElementById('chap1').style.color = 'green';
  } else {
    document.getElementById('chap1').style.color = 'black';
  }
  if (chap2rect.top <= header.bottom) {
    document.getElementById('chap2').style.color = 'green';
  } else {
    document.getElementById('chap2').style.color = 'black';
  }
  if (chap3rect.top <= header.bottom) {
    document.getElementById('chap3').style.color = 'green';
  } else {
    document.getElementById('chap3').style.color = 'black';
  }
  if (chap4rect.top <= header.bottom) {
    document.getElementById('chap4').style.color = 'green';
  } else {
    document.getElementById('chap4').style.color = 'black';
  }
  if (chap5rect.top <= header.bottom) {
    document.getElementById('chap5').style.color = 'green';
  } else {
    document.getElementById('chap5').style.color = 'black';
  }
}
