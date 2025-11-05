const data = {
  "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Cầu Giấy", "Đống Đa"],
  "TP. Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Bình Thạnh"],
  "Đà Nẵng": ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn"],
  "Hải Phòng": ["Hồng Bàng", "Ngô Quyền", "Lê Chân", "Kiến An"]
};

const tinhSelect = document.getElementById('tinh');
const huyenSelect = document.getElementById('huyen');

// Đẩy tất cả tỉnh vào select
for (let tinh in data) {
  let option = document.createElement('option');
  option.value = tinh;
  option.textContent = tinh;
  tinhSelect.appendChild(option);
}

tinhSelect.addEventListener('change', function() {
  const selectedTinh = this.value;

  // Xóa hết quận/huyện cũ
  huyenSelect.innerHTML = '<option value="">-- Chọn Quận/Huyện --</option>';

  if (selectedTinh !== "" && data[selectedTinh]) {
    data[selectedTinh].forEach(huyen => {
      let option = document.createElement('option');
      option.value = huyen;
      option.textContent = huyen;
      huyenSelect.appendChild(option);
    });
  }
});

const btn_sale=document.getElementById("btn_sale");
const menu_sale=document.getElementById("menu_sale");

btn_sale.addEventListener("click",() => {
    menu_sale.classList.toggle("hidden");
});

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
