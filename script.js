new Swiper('.class-wrapper', {
  loop: true,
  spaceBetween: 30,

  //  pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

// Initialize List.js
const options = {
  valueNames: ["name", "title"],
  listClass: "card-list",
};

const resourceList = new List("resourcesList", options);


const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (filter === "all") {
      resourceList.filter();
    } else {
      resourceList.filter((item) => {
        return item.elm.dataset.category === filter;
      });
    }
  });
});

const items = document.querySelectorAll('.timeline-item');

function revealTimeline() {
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < triggerBottom) {
      item.classList.add('show');
    } else {
      item.classList.remove('show'); // optional
    }
  });
}
/* swiper */


