const dba = [
  {
    id: 1,
    name: "YADEA ORIS X SOOBIN",
    price: 23490000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2025/05/Sb-Oris-Anh-nho-ben-tren-480x390.png",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2025/05/Oris_3_Hong-anh-dao-480x247.png",
  },
  {
    id: 2,
    name: "YADEA VELAX X SOOBIN ",
    price: 30490000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2025/05/Sb-Velax-Anh-nho-ben-tren-480x390.png",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2025/05/Velax_3_Xanh-Bentley-480x320.png",
  },
  {
    id: 3,
    name: "YADEA VEKOO X SOOBIN",
    price: 15490000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2025/05/Vekoo-Anh-nho-ben-tren-480x390.png",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2025/05/Vekoo_4_Hong-anh-dao-480x330.png",
  },
  {
    id: 4,
    name: "YADEA i8",
    price: 13990000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2023/11/Anh-nho-ben-tren-480x361-1-480x361.png",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2023/11/Anh-nho-1-ngang-255x208-i8-xanh-480x392.png",
  },
  {
    id: 5,
    name: "YADEA iFUN",
    price: 11990000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2024/08/YADEA-iFUN-anh-chinh-480x389.webp",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2024/08/YADEA-iFUN-Anh-chinh-ngang-480x389.webp",
  },
  {
    id: 6,
    name: "YADEA I6",
    price: 11790000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2023/09/product-i6-pin-lithium-480x389.png",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2023/09/i6-blue-1-480x389.png",
  },
  {
    id: 7,
    name: "YADEA VITO",
    price: 14990000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2025/09/avt-yadea-vito.png",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2025/09/avt-yadea-vito.png",
  },
  {
    id: 8,
    name: "YADEA FLIT",
    price: 30490000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2025/09/avt-yadea-flit.png",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2025/09/avt-yadea-flit.png",
  },
  {
    id: 9,
    name: "YADEA Vekoo",
    price: 14490000,
    img: "https://www.yadea.com.vn/wp-content/uploads/2025/03/2-anh-cung-kich-thuoc-Vekoo-1-480x390.png",
    img_2:
      "https://www.yadea.com.vn/wp-content/uploads/2025/03/2-anh-cung-kich-thuoc-Vekoo-1-480x390.png",
  },
];

const container = document.getElementById("productsList");
const pagination = document.getElementById("pagination");

dba.forEach((p) => {
  const item = `
      <div class="w-full border-1 rounded-md overflow-hidden hover:shadow-lg transition hover:content-[]">
        <img 
          src="${p.img}" 
          alt="${p.name}" 
          class="w-full h-64 object-cover cursor-pointer"
          onmouseover="this.src='${p.img_2}'"
          onmouseout="this.src='${p.img}'"
        >
        <div class="text-center pb-3">
          <p class="font-medium mt-2">${p.name}</p>
          <p class="font-semibold">${p.price.toLocaleString()}₫</p>
          <input class="px-3" type="checkbox" id="buy${p.id}" name="buy${
    p.id
  }"></div>
        </div>
      </div>
    `;
  container.insertAdjacentHTML("beforeend", item);
});

const itemsPerPage = 8; // số sản phẩm mỗi trang
let currentPage = 1; // trang hiện tại

let filteredData = [...dba];

const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");

searchInput.addEventListener("input", () => {
  applyFilters();
});

priceFilter.addEventListener("change", () => {
  applyFilters();
});

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const priceValue = priceFilter.value;

  filteredData = dba.filter((p) => {
    const matchName = p.name.toLowerCase().includes(searchValue);
    let matchPrice = true;

    if (priceValue === "under15") matchPrice = p.price < 15000000;
    if (priceValue === "15to20")
      matchPrice = p.price >= 15000000 && p.price <= 20000000;
    if (priceValue === "over20") matchPrice = p.price > 20000000;

    return matchName && matchPrice;
  });

  currentPage = 1;
  update();
}

function renderProducts(page) {
  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = filteredData.slice(start, end);

  pageItems.forEach((p) => {
    const item = `
      <div class="w-full border-1 rounded-md overflow-hidden hover:shadow-lg transition hover:content-[]">
        <img 
          src="${p.img}" 
          alt="${p.name}" 
          class="w-full h-64 object-cover cursor-pointer"
          onmouseover="this.src='${p.img_2}'"
          onmouseout="this.src='${p.img}'"
        >
        <div class="text-center pb-3">
          <p class="font-medium mt-2">${p.name}</p>
          <p class="font-semibold">${p.price.toLocaleString()}₫</p>
        <input class="px-3" type="checkbox" id="buy${p.id}" name="buy${
      p.id
    }"></div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", item);
  });
}

function update() {
  renderProducts(currentPage);
}

const btn_muciuthich = document.getElementById("btn_muciuthich");

document.getElementById("btn_muciuthich").onclick = function () {
  let chitiet = "";
  let tongTien = 0; // biến để cộng dồn tổng tiền

  dba.forEach((g) => {
    const checkbox = document.getElementById(`buy${g.id}`);

    const buy = checkbox.checked;

    if (buy) {
      tongTien += g.price; // cộng dồn giá từng xe
      chitiet += `
                <tr>
                    <td>${g.name}</td>
                    <td>${g.price.toLocaleString()}đ</td>
                </tr>
            `;
    }
  });

  if (chitiet === "") {
    alert("vui lòng chọn ít nhất 1 xe!");
    return;
  }

  chitiet += `
        <tr>
            <td><b>Tổng cộng</b></td>
            <td><b>${tongTien.toLocaleString()}đ</b></td>
        </tr>
    `;
  var myWindow = window.open("", "btn_muciuthich", "w-200 h-100");

  localStorage.setItem("chitiet", chitiet);
  localStorage.setItem("tongtien", tongTien);

  myWindow.document.writeln(`
        <div id="infbox" class="border-1">
            <h1>DANH SÁCH CÁC XE TRONG MỤC YÊU THÍCH CỦA BẠN</h1>
            <table>
              <tr>
                        <th>Tên xe</th>
                        <th>Giá tiền</th>
                    </tr>
                <tr>
                    ${chitiet}
                </tr>
            </table>
            <div>
            <a href="tt.html">
            <button id="btn_tt">Thanh toán</button>
            </a>  
        </div>
            <div>

            </div>
        </div>

        
    
        `);
};
