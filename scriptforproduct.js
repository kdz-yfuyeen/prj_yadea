
  const images_col_2 = {
    col1_2: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-v002-U-1280x880-1-480x330.png",
    col2_2: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-do-480x330.png",
    col3_2: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-trang-480x330.png",
    col4_2: "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-den-480x330.png"
  };

  const mausac = {
    col1_2: "Màu xám",
    col2_2: "Màu đỏ",
    col3_2: "Màu trắng",
    col4_2: "Màu đen"
  };

  const col_2Element = document.getElementById("col_xe2");
  const colorName = document.getElementById("colorName");

  document.querySelectorAll("button[data-img]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-img");
      col_2Element.src = images_col_2[key];
      colorName.textContent = mausac[key];

      localStorage.setItem("selectedColorKey", key);
    });
  });
