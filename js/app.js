function App() {
  // App is initiated in a script tag in index.html

  // Elements
  var stickybar = document.getElementById('stickybar');
  var contentContainer = document.getElementById('content-container');
  var chapters = document.getElementsByClassName('chapter-row');

  // Variables and constants
  const app = this;
  const timeout = 1000; //ms
  const contentHeight = contentContainer.getBoundingClientRect().height;
  const contentObject = {
    // Kan bytas till json-fil
    chapter1: {
      name: 'Authentication',
      paper: `In the Swedish voting system, all eligible voters receives a
      voting card by mail before the election day. Sweden has
      <b>universal suffrage</b> to Swedish residents over the age of 18
      years.`,
      electronic: `Electronic voting systems also have electoral rolls and the
      <b>universial suffrage</b> would be no different in an electronic
      voting system.`,
    },
    chapter2: {
      name: 'Privacy',
      paper: `Lorem ipsum`,
      electronic: `Lorem ipsum`,
    },
    chapter3: {
      name: 'Trust',
      paper: `Lorem ipsum`,
      electronic: `Lorem ipsum`,
    },
    chapter4: {
      name: 'Privacy',
      paper: `Lorem ipsum`,
      electronic: `Lorem ipsum`,
    },
  };
  let timeoutBool = true;
  let currentChapter = 0; // 0=intro,1=chapter1
  let lastScroll = contentContainer.scrollTop;

  // Initiating functions
  for (var i = 0; i < chapters.length; i++) {
    chapters[i].style.height = Math.round(contentHeight, 0) + 'px';
    chapters[i].style.margin = '10px';
  }

  this.nextChapter = () => {
    if (currentChapter < 4) {
      currentChapter++;
      updateChapter();
    }
  };
  this.prevChapter = () => {
    if (currentChapter > 0) {
      currentChapter--;
      updateChapter();
    }
  };
  this.goToChapter = n => {
    currentChapter = n;
    updateChapter();
  };
  this.getChapter = () => {
    return currentChapter;
  };

  this.getChapterElement = () => {
    var chapterElement = chapters[currentChapter - 1];
    return chapterElement;
  };

  function updateChapter() {
    console.log(currentChapter);
    var chapter = app.getChapterElement();
    var scrollIntoViewOptions = {
      behavior: 'smooth',
    };
    if (chapter) {
      chapter.scrollIntoView(scrollIntoViewOptions);
    } else {
      console.log('Chapter: ', app.getChapter(), ' does not exist.');
    }
  }

  contentContainer.addEventListener('scroll', e => {
    scrollHandler();
    var st = contentContainer.scrollTop;
    if (timeoutBool) {
      disableScroll();
      timeoutBool = false;
      if (st > lastScroll) {
        // Scrolling down
        app.nextChapter();
      } else {
        // Scrolling up
        app.prevChapter();
      }
      window.setTimeout(() => {
        timeoutBool = true;
        enableScroll();
      }, timeout);
    }
    lastScroll = st <= 0 ? 0 : st;
  });
  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    // Only completely visible elements return true:
    var isVisible = elemTop < window.innerHeight;
    // Partially visible elements return true:
    // isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  function scrollHandler() {
    var chap1 = document.getElementById('chapter1');
    var chap2 = document.getElementById('chapter2');
    var chap3 = document.getElementById('chapter3');
    var chap4 = document.getElementById('chapter4');

    if (isScrolledIntoView(chap1)) {
      document.getElementById('chap1').style.backgroundColor = '#059ada';
    } else {
      document.getElementById('chap1').style.backgroundColor = '#0b7eb5';
    }
    if (isScrolledIntoView(chap2)) {
      document.getElementById('chap2').style.backgroundColor = '#059ada';
    } else {
      document.getElementById('chap2').style.backgroundColor = '#0b7eb5';
    }
    if (isScrolledIntoView(chap3)) {
      document.getElementById('chap3').style.backgroundColor = '#059ada';
    } else {
      document.getElementById('chap3').style.backgroundColor = '#0b7eb5';
    }
    if (isScrolledIntoView(chap4)) {
      document.getElementById('chap4').style.backgroundColor = '#059ada';
    } else {
      document.getElementById('chap4').style.backgroundColor = '#0b7eb5';
    }
  }
}
