


$(".search-icon").click(function () {
  $(".search-dropdown").addClass("active");
});

$(".close-btn").click(function () {
  $(".search-dropdown").removeClass("active");
});



var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 142,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
      loop: true
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 142,
      loop: true
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 142,
    }
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    375: {
      slidesPerView: 1.1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 22
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

var swiper = new Swiper(".newSwiper", {
  slidesPerView: 1,
  grid: {
    rows: 3,
  },
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      grid: {
        rows: 1,
      },
    },
    
    576: {
      slidesPerView: 1.2,
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 1.4,
      spaceBetween: 50,
      grid: {
        rows: 1,
      },
    },
    992: {
      slidesPerView: 1.4,
      spaceBetween: 100,
      grid: {
        rows: 1,
      },
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 3,
      },
    }
  }
});
/* 
/* 
 this is an implementation of Wes Bos click & drag scroll algorythm. In his video, he shows how to do the horizontal scroll. I have implemented the vertical scroll for those wondering how to make it as well.
 
 Wes Bos video:
   https://www.youtube.com/watch?v=C9EWifQ5xqA
*/
const container = document.querySelector('#items-container');

let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown', e => mouseIsDown(e));
container.addEventListener('mouseup', e => mouseUp(e))
container.addEventListener('mouseleave', e => mouseLeave(e));
container.addEventListener('mousemove', e => mouseMove(e));

function mouseIsDown(e) {
  isDown = true;
  startY = e.pageY - container.offsetTop;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop;
}
function mouseUp(e) {
  isDown = false;
}
function mouseLeave(e) {
  isDown = false;
}
function mouseMove(e) {
  if (isDown) {
    e.preventDefault();
    //Move vertcally
    const y = e.pageY - container.offsetTop;
    const walkY = y - startY;
    container.scrollTop = scrollTop - walkY;

    //Move Horizontally
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;

  }
}

console.clear();

/**
 * Update of secondary numeric pagination
 * @this {object}  - swiper instance
 */
function updSwiperNumericPagination() {
  this.el.querySelector('.swiper-counter')
    .innerHTML = '<span class="count">' + (this.realIndex + 1) + '</span>/<span class="total">' + this.el.slidesQuantity + '</span>';
}


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.swiper-container').forEach(function (node) {
    // Getting slides quantity before slider clones them
    node.slidesQuantity = node.querySelectorAll('.swiper-slide').length;

    // Swiper initialization
    new Swiper(node, {
      speed: 1000,
      loop: true,
      autoplay: false,
      pagination: { el: node.querySelector('.swiper-pagination'), clickable: true, },
      on: { // Secondary pagination is update after initialization and after slide change
        init: updSwiperNumericPagination,
        slideChange: updSwiperNumericPagination
      }
    });
  });
});


var swiper = new Swiper(".providerSwiper", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 54,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2.8,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 3.8,
      spaceBetween: 50
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 5,
      spaceBetween: 54,
    }
  }
});


/******** SINGLE REVIEW NAV TAB FIXED *******/

// Create a clone of the menu, right next to original.
$('.single-payment-tab').addClass('original').clone().insertAfter('.single-payment-tab').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
    $('.original').css('visibility', 'hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility', 'visible');
  }
}

/******** SINGLE REVIEW NAV TAB FIXED END *******/



var swiper = new Swiper(".recommendedSwiper", {
  slidesPerView: 4,
  spaceBetween: 90,
  autoplay: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 77
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 90,
    }
  }
});




