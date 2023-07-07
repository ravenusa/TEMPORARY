const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
const arrowBtns = document.querySelectorAll('.wrapper i');
const carouselChildrens = [...carousel.children];

const wrapper2 = document.querySelector('.wrapper2');
const carousel2 = document.querySelector('.carousel2');
const firstCardWidth2 = carousel2.querySelector('.card2').offsetWidth;
const arrowBtns2 = document.querySelectorAll('.wrapper2 i');
const carouselChildrens2 = [...carousel2.children];

let isDragging = false,
  isAutoPlay = false,
  startX,
  startScrollLeft,
  timeoutId;

  let isDragging2 = false,
  isAutoPlay2 = false,
  startX2,
  startScrollLeft2,
  timeoutId2;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
  });
carouselChildrens2
  .slice(-cardPerView2)
  .reverse()
  .forEach((card2) => {
    carousel2.insertAdjacentHTML('afterbegin', card2.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML('beforeend', card.outerHTML);
});
carouselChildrens2.slice(0, cardPerView2).forEach((card2) => {
    carousel2.insertAdjacentHTML('beforeend', card2.outerHTML);
  });

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add('no-transition');
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove('no-transition');
carousel2.classList.add('no-transition');
carousel2.scrollLeft = carousel2.offsetWidth;
carousel2.classList.remove('no-transition');
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id == 'left' ? -firstCardWidth : firstCardWidth;
  });
});
arrowBtns2.forEach((btn) => {
    btn.addEventListener('click', () => {
      carousel2.scrollLeft += btn.id == 'left' ? -firstCardWidth2 : firstCardWidth2;
    });
  });

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add('dragging2');
    // Records the initial cursor and scroll position of the carousel
    startX2 = e.pageX;
    startScrollLeft2 = carousel2.scrollLeft;
  };

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragging2 = (e) => {
    if (!isDragging2) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
  };

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};
const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove('dragging2');
  };

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  //clearTimeout(timeoutId);
  if (!wrapper.matches(':hover')) autoPlay();
};
const infiniteScroll2 = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel2.scrollLeft === 0) {
      carousel2.classList.add('no-transition');
      carousel2.scrollLeft = carousel2.scrollWidth - 2 * carousel2.offsetWidth;
      carousel2.classList.remove('no-transition');
    }
    // If the carousel is at the end, scroll to the beginning

    else if (Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth) {
      carousel2.classList.add('no-transition');
      carousel2.scrollLeft = carousel2.offsetWidth;
      carousel2.classList.remove('no-transition');
    }
  
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    //clearTimeout(timeoutId);
    if (!wrapper2.matches(':hover')) autoPlay2();
  };



const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);
wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
wrapper.addEventListener('mouseleave', autoPlay);

const autoPlay2 = () => {
    if (window.innerWidth < 800 || !isAutoPlay2) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId2 = setTimeout(() => (carousel2.scrollLeft += firstCardWidth2), 2500);
  };

autoPlay2();

carousel2.addEventListener('mousedown', dragStart2);
carousel2.addEventListener('mousemove', dragging2);
document.addEventListener('mouseup', dragStop2);
carousel2.addEventListener('scroll', infiniteScroll2);
wrapper2.addEventListener('mouseenter', () => clearTimeout(timeoutId2));
wrapper2.addEventListener('mouseleave', autoPlay2);

const wrapper3 = document.querySelector('.wrapper3');
const carousel3 = document.querySelector('.carousel3');
const firstCardWidth3 = carousel3.querySelector('.card3').offsetWidth;
const arrowBtns3 = document.querySelectorAll('.wrapper3 i');
const carouselChildrens3 = [...carousel3.children];

  let isDragging3 = false,
  isAutoPlay3 = false,
  startX3,
  startScrollLeft3,
  timeoutId3;

// Get the number of cards that can fit in the carousel at once
let cardPerView3 = Math.round(carousel3.offsetWidth / firstCardWidth3);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens3
  .slice(-cardPerView3)
  .reverse()
  .forEach((card3) => {
    carousel3.insertAdjacentHTML('afterbegin', card3.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens3.slice(0, cardPerView3).forEach((card3) => {
    carousel3.insertAdjacentHTML('beforeend', card3.outerHTML);
  });

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel3.classList.add('no-transition');
carousel3.scrollLeft = carousel3.offsetWidth;
carousel3.classList.remove('no-transition');
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns3.forEach((btn) => {
    btn.addEventListener('click', () => {
      carousel3.scrollLeft += btn.id == 'left' ? -firstCardWidth3 : firstCardWidth3;
    });
  });

const dragStart3 = (e) => {
    isDragging3 = true;
    carousel3.classList.add('dragging3');
    // Records the initial cursor and scroll position of the carousel
    startX3 = e.pageX;
    startScrollLeft3 = carousel3.scrollLeft;
  };

const dragging3 = (e) => {
    if (!isDragging3) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel3.scrollLeft = startScrollLeft3 - (e.pageX - startX3);
  };

const dragStop3 = () => {
    isDragging3 = false;
    carousel3.classList.remove('dragging3');
  };

const infiniteScroll3 = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel3.scrollLeft === 0) {
      carousel3.classList.add('no-transition');
      carousel3.scrollLeft = carousel3.scrollWidth - 2 * carousel3.offsetWidth;
      carousel3.classList.remove('no-transition');
    }
    // If the carousel is at the end, scroll to the beginning

    else if (Math.ceil(carousel3.scrollLeft) === carousel3.scrollWidth - carousel3.offsetWidth) {
      carousel3.classList.add('no-transition');
      carousel3.scrollLeft = carousel3.offsetWidth;
      carousel3.classList.remove('no-transition');
    }
  
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    //clearTimeout(timeoutId);
    if (!wrapper3.matches(':hover')) autoPlay3();
  };



const autoPlay3 = () => {
    if (window.innerWidth < 800 || !isAutoPlay3) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 3500 ms
    timeoutId3 = setTimeout(() => (carousel3.scrollLeft += firstCardWidth3), 2500);
  };

autoPlay3();

carousel3.addEventListener('mousedown', dragStart3);
carousel3.addEventListener('mousemove', dragging3);
document.addEventListener('mouseup', dragStop3);
carousel3.addEventListener('scroll', infiniteScroll3);
wrapper3.addEventListener('mouseenter', () => clearTimeout(timeoutId3));
wrapper3.addEventListener('mouseleave', autoPlay3);

const wrapper4 = document.querySelector('.wrapper4');
const carousel4 = document.querySelector('.carousel4');
const firstCardWidth4 = carousel4.querySelector('.card4').offsetWidth;
const arrowBtns4 = document.querySelectorAll('.wrapper4 i');
const carouselChildrens4 = [...carousel4.children];

  let isDragging4 = false,
  isAutoPlay4 = false,
  startX4,
  startScrollLeft4,
  timeoutId4;

// Get the number of cards that can fit in the carousel at once
let cardPerView4 = Math.round(carousel4.offsetWidth / firstCardWidth4);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens4
  .slice(-cardPerView4)
  .reverse()
  .forEach((card4) => {
    carousel4.insertAdjacentHTML('afterbegin', card4.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens4.slice(0, cardPerView4).forEach((card4) => {
    carousel4.insertAdjacentHTML('beforeend', card4.outerHTML);
  });

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel4.classList.add('no-transition');
carousel4.scrollLeft = carousel4.offsetWidth;
carousel4.classList.remove('no-transition');
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns4.forEach((btn) => {
    btn.addEventListener('click', () => {
      carousel4.scrollLeft += btn.id == 'left' ? -firstCardWidth4 : firstCardWidth4;
    });
  });

const dragStart4 = (e) => {
    isDragging4 = true;
    carousel4.classList.add('dragging4');
    // Records the initial cursor and scroll position of the carousel
    startX4 = e.pageX;
    startScrollLeft4 = carousel4.scrollLeft;
  };

const dragging4 = (e) => {
    if (!isDragging4) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel4.scrollLeft = startScrollLeft4 - (e.pageX - startX4);
  };

const dragStop4 = () => {
    isDragging4 = false;
    carousel4.classList.remove('dragging4');
  };

const infiniteScroll4 = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel4.scrollLeft === 0) {
      carousel4.classList.add('no-transition');
      carousel4.scrollLeft = carousel4.scrollWidth - 2 * carousel4.offsetWidth;
      carousel4.classList.remove('no-transition');
    }
    // If the carousel is at the end, scroll to the beginning

    else if (Math.ceil(carousel4.scrollLeft) === carousel4.scrollWidth - carousel4.offsetWidth) {
      carousel4.classList.add('no-transition');
      carousel4.scrollLeft = carousel4.offsetWidth;
      carousel4.classList.remove('no-transition');
    }
  
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    //clearTimeout(timeoutId);
    if (!wrapper4.matches(':hover')) autoPlay4();
  };



const autoPlay4 = () => {
    if (window.innerWidth < 800 || !isAutoPlay4) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 4500 ms
    timeoutId4 = setTimeout(() => (carousel4.scrollLeft += firstCardWidth4), 2500);
  };

autoPlay4();

carousel4.addEventListener('mousedown', dragStart4);
carousel4.addEventListener('mousemove', dragging4);
document.addEventListener('mouseup', dragStop4);
carousel4.addEventListener('scroll', infiniteScroll4);
wrapper4.addEventListener('mouseenter', () => clearTimeout(timeoutId4));
wrapper4.addEventListener('mouseleave', autoPlay4);

const wrapper5 = document.querySelector('.wrapper5');
const carousel5 = document.querySelector('.carousel5');
const firstCardWidth5 = carousel5.querySelector('.card5').offsetWidth;
const arrowBtns5 = document.querySelectorAll('.wrapper5 i');
const carouselChildrens5 = [...carousel5.children];

  let isDragging5 = false,
  isAutoPlay5 = false,
  startX5,
  startScrollLeft5,
  timeoutId5;

// Get the number of cards that can fit in the carousel at once
let cardPerView5 = Math.round(carousel5.offsetWidth / firstCardWidth5);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens5
  .slice(-cardPerView5)
  .reverse()
  .forEach((card5) => {
    carousel5.insertAdjacentHTML('afterbegin', card5.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens5.slice(0, cardPerView5).forEach((card5) => {
    carousel5.insertAdjacentHTML('beforeend', card5.outerHTML);
  });

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel5.classList.add('no-transition');
carousel5.scrollLeft = carousel5.offsetWidth;
carousel5.classList.remove('no-transition');
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns5.forEach((btn) => {
    btn.addEventListener('click', () => {
      carousel5.scrollLeft += btn.id == 'left' ? -firstCardWidth5 : firstCardWidth5;
    });
  });

const dragStart5 = (e) => {
    isDragging5 = true;
    carousel5.classList.add('dragging5');
    // Records the initial cursor and scroll position of the carousel
    startX5 = e.pageX;
    startScrollLeft5 = carousel5.scrollLeft;
  };

const dragging5 = (e) => {
    if (!isDragging5) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel5.scrollLeft = startScrollLeft5 - (e.pageX - startX5);
  };

const dragStop5 = () => {
    isDragging5 = false;
    carousel5.classList.remove('dragging5');
  };

const infiniteScroll5 = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel5.scrollLeft === 0) {
      carousel5.classList.add('no-transition');
      carousel5.scrollLeft = carousel5.scrollWidth - 2 * carousel5.offsetWidth;
      carousel5.classList.remove('no-transition');
    }
    // If the carousel is at the end, scroll to the beginning

    else if (Math.ceil(carousel5.scrollLeft) === carousel5.scrollWidth - carousel5.offsetWidth) {
      carousel5.classList.add('no-transition');
      carousel5.scrollLeft = carousel5.offsetWidth;
      carousel5.classList.remove('no-transition');
    }
  
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    //clearTimeout(timeoutId);
    if (!wrapper5.matches(':hover')) autoPlay5();
  };



const autoPlay5 = () => {
    if (window.innerWidth < 800 || !isAutoPlay5) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 5500 ms
    timeoutId5 = setTimeout(() => (carousel5.scrollLeft += firstCardWidth5), 2500);
  };

autoPlay5();

carousel5.addEventListener('mousedown', dragStart5);
carousel5.addEventListener('mousemove', dragging5);
document.addEventListener('mouseup', dragStop5);
carousel5.addEventListener('scroll', infiniteScroll5);
wrapper5.addEventListener('mouseenter', () => clearTimeout(timeoutId5));
wrapper5.addEventListener('mouseleave', autoPlay5);

const wrapper6 = document.querySelector('.wrapper6');
const carousel6 = document.querySelector('.carousel6');
const firstCardWidth6 = carousel6.querySelector('.card6').offsetWidth;
const arrowBtns6 = document.querySelectorAll('.wrapper6 i');
const carouselChildrens6 = [...carousel6.children];

  let isDragging6 = false,
  isAutoPlay6 = false,
  startX6,
  startScrollLeft6,
  timeoutId6;

// Get the number of cards that can fit in the carousel at once
let cardPerView6 = Math.round(carousel6.offsetWidth / firstCardWidth6);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens6
  .slice(-cardPerView6)
  .reverse()
  .forEach((card6) => {
    carousel6.insertAdjacentHTML('afterbegin', card6.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens6.slice(0, cardPerView6).forEach((card6) => {
    carousel6.insertAdjacentHTML('beforeend', card6.outerHTML);
  });

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel6.classList.add('no-transition');
carousel6.scrollLeft = carousel6.offsetWidth;
carousel6.classList.remove('no-transition');
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns6.forEach((btn) => {
    btn.addEventListener('click', () => {
      carousel6.scrollLeft += btn.id == 'left' ? -firstCardWidth6 : firstCardWidth6;
    });
  });

const dragStart6 = (e) => {
    isDragging6 = true;
    carousel6.classList.add('dragging6');
    // Records the initial cursor and scroll position of the carousel
    startX6 = e.pageX;
    startScrollLeft6 = carousel6.scrollLeft;
  };

const dragging6 = (e) => {
    if (!isDragging6) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel6.scrollLeft = startScrollLeft6 - (e.pageX - startX6);
  };

const dragStop6 = () => {
    isDragging6 = false;
    carousel6.classList.remove('dragging6');
  };

const infiniteScroll6 = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel6.scrollLeft === 0) {
      carousel6.classList.add('no-transition');
      carousel6.scrollLeft = carousel6.scrollWidth - 2 * carousel6.offsetWidth;
      carousel6.classList.remove('no-transition');
    }
    // If the carousel is at the end, scroll to the beginning

    else if (Math.ceil(carousel6.scrollLeft) === carousel6.scrollWidth - carousel6.offsetWidth) {
      carousel6.classList.add('no-transition');
      carousel6.scrollLeft = carousel6.offsetWidth;
      carousel6.classList.remove('no-transition');
    }
  
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    //clearTimeout(timeoutId);
    if (!wrapper6.matches(':hover')) autoPlay6();
  };



const autoPlay6 = () => {
    if (window.innerWidth < 800 || !isAutoPlay6) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 6600 ms
    timeoutId6 = setTimeout(() => (carousel6.scrollLeft += firstCardWidth6), 2500);
  };

autoPlay6();

carousel6.addEventListener('mousedown', dragStart6);
carousel6.addEventListener('mousemove', dragging6);
document.addEventListener('mouseup', dragStop6);
carousel6.addEventListener('scroll', infiniteScroll6);
wrapper6.addEventListener('mouseenter', () => clearTimeout(timeoutId6));
wrapper6.addEventListener('mouseleave', autoPlay6);
