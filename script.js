document.addEventListener("DOMContentLoaded", () => {

  /* ---------- SWIPER ---------- */
  if (document.querySelector(".class-wrapper")) {
    new Swiper(".class-wrapper", {
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  /* ---------- LIST.JS ---------- */
  if (document.getElementById("resourcesList")) {
    const options = {
      valueNames: ["name", "title"],
      listClass: "card-list",
    };

    const resourceList = new List("resourcesList", options);

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
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
  }

  /* ---------- FORM MESSAGE ---------- */
  const form = document.getElementById("resourceForm");
  const message = document.getElementById("message");

  if (form && message) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "Successfully received ✅";
      message.style.display = "block";
      form.reset();
    });

    form.addEventListener("input", () => {
      message.style.display = "none";
    });
  }

});
