window.onload = function() {
    // Lấy dữ liệu đã lưu
    const chitiet = localStorage.getItem("chitiet");
    const tongtien = localStorage.getItem("tongtien");
    
    // Hiển thị ra màn hình
document.getElementById("table_tt").innerHTML = `
            <tr><th>Tên xe</th><th>Giá tiền</th></tr>
            ${chitiet}
        `;
        document.getElementById("tongtien").innerText = 
            "Tổng tiền cần thanh toán: " + Number(tongtien).toLocaleString() + "đ";
    // Nếu muốn xóa sau khi hiển thị (tùy chọn)
    // localStorage.removeItem("chitiet");
}