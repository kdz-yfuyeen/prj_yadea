const btnMenu = document.getElementById("btnMenu");
const dropdownMenu = document.getElementById("dropdownMenu");

btnMenu.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // hiển thị 3 tin cùng lúc
  spaceBetween: 30, // khoảng cách giữa các thẻ tin
  loop: true, // cho phép lặp lại vô hạn
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000, // tự động trượt mỗi 4s
    disableOnInteraction: false,
  },
});

function openPopup() {
  window.open("thuexe.html", "popup", "width=600,height=400,top=100,left=100");
}

const targets = [
  { id: "distance", value: 45508797 },
  { id: "co2", value: 206762230 },
  { id: "trees", value: 2275441 },
];

let started = false;

function animateCounters() {
  if (started) return;
  started = true;

  targets.forEach(({ id, value }) => {
    const el = document.getElementById(id);
    let randomPhase = 0;
    const randomTimer = setInterval(() => {
      randomPhase++;
      el.textContent = Math.floor(Math.random() * value).toLocaleString(
        "de-DE"
      );
      if (randomPhase > 20) {
        clearInterval(randomTimer);
        countToFinal(el, value);
      }
    }, 50);
  });
}

function countToFinal(el, endValue) {
  let start = 0;
  const duration = 2000;
  const stepTime = 20;
  const increment = endValue / (duration / stepTime);

  const counter = setInterval(() => {
    start += increment;
    if (start >= endValue) {
      start = endValue;
      clearInterval(counter);
    }
    el.textContent = Math.floor(start).toLocaleString("de-DE");
  }, stepTime);
}

window.addEventListener("scroll", () => {
  const section = document.getElementById("statsSection");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
    animateCounters();
  }
});

var swiper = new Swiper(".mySwiperMenuProduct", {
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
});

const images = {
  img1: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Chan-chong-ngat-dien.png",
  img2: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Cop-xe-V002-U.png",
  img3: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Cong-sac-USB-Moc-treo-do-V002-U.jpg",
  img4: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Khoa-xe-V002-U.png",
  img5: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Chieu-dai-de-chan.png",
  img6: "https://www.yadea.com.vn/wp-content/uploads/2024/11/chieu-dai-yen-xe1.png",
};

const imgElement = document.getElementById("hinhAnh");

document.querySelectorAll("button[data-img]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-img"); // Lấy key tương ứng
    imgElement.src = images[key]; // Đổi ảnh
  });
});

const images_col = {
  col1: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-v002-U-1280x880-1-480x330.png",
  col2: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-do-480x330.png",
  col3: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-trang-480x330.png",
  col4: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-den-480x330.png",
};

const colElement = document.getElementById("col_xe");

document.querySelectorAll("button[data-img]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-img"); // Lấy key tương ứng
    colElement.src = images_col[key]; // Đổi ảnh
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".spec-section");

  sections.forEach((section) => {
    const header = section.querySelector(".spec-header");
    const content = section.querySelector(".spec-content");

    content.style.display = "none";

    header.addEventListener("click", () => {
      sections.forEach((s) => {
        s.querySelector(".spec-content").style.display = "none";
        s.querySelector(".arrow").textContent = "↓";
      });

      content.style.display = "block";
      header.querySelector(".arrow").textContent = "↑";
    });
  });
});
