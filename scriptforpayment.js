const btn_sale = document.getElementById("btn_sale");
const menu_sale = document.getElementById("menu_sale");

btn_sale.addEventListener("click", () => {
  menu_sale.classList.toggle("hidden");
});

const images_col_2 = {
  col1_2:
    "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-v002-U-1280x880-1-480x330.png",
  col2_2:
    "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-do-480x330.png",
  col3_2:
    "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-trang-480x330.png",
  col4_2:
    "https://www.yadea.com.vn/wp-content/uploads/2024/11/Anh-sp-ngang-1280x880-den-480x330.png",
};

const mausac = {
  col1_2: "Màu xám",
  col2_2: "Màu đỏ",
  col3_2: "Màu trắng",
  col4_2: "Màu đen",
};

const col_2Element = document.getElementById("col_xe2");
const colorName = document.getElementById("colorName");

// Lấy màu đã chọn từ trang trước
const selectedKey = localStorage.getItem("selectedColorKey");
if (selectedKey && images_col_2[selectedKey]) {
  col_2Element.src = images_col_2[selectedKey];
  colorName.textContent = mausac[selectedKey];
} else {
  // Mặc định nếu chưa chọn
  col_2Element.src = images_col_2.col1_2;
  colorName.textContent = mausac.col1_2;
}
