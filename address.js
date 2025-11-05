const token = "adf7c5b5-2862-11ef-8e53-0a00184fe694";
const shopId = "192561";

async function fetchProvinces() {
  const res = await fetch(
    "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province",
    {
      headers: { "Content-Type": "application/json", Token: token },
    }
  );
  const data = await res.json();
  const province = data.data
    .filter(
      (p) =>
        p.ProvinceID !== 2002 &&
        p.ProvinceID !== 298 &&
        p.ProvinceID !== 290 &&
        p.ProvinceID !== 286
    )
    .sort((a, b) => a.ProvinceID - b.ProvinceID);
  return province || [];
}

async function fetchDistrict(provinceId) {
  if (!provinceId) return [];
  const res = await fetch(
    `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceId}&shop_id=${shopId}`,
    {
      headers: { "Content-Type": "application/json", Token: token },
    }
  );
  const data = await res.json();
  return (data.data || []).sort((a, b) =>
    a.DistrictName.localeCompare(b.DistrictName)
  );
}

async function fetchWards(districtId) {
  if (!districtId) return [];
  const res = await fetch(
    `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}&shop_id=${shopId}`,
    {
      headers: { "Content-Type": "application/json", Token: token },
    }
  );
  const data = await res.json();
  return (data.data || []).sort((a, b) => a.WardName.localeCompare(b.WardName));
}

async function init() {
  const provinceSelect = document.getElementById("province");
  const districtSelect = document.getElementById("district");
  const wardSelect = document.getElementById("ward");

  const provinces = await fetchProvinces();
  provinces.forEach((province) => {
    const option = document.createElement("option");
    option.value = province.ProvinceID;
    option.textContent = province.ProvinceName;
    provinceSelect.appendChild(option);
  });

  provinceSelect.addEventListener("change", async (e) => {
    const provinceId = e.target.value;
    districtSelect.innerHTML = '<option value="">Chọn Quận / Huyện</option>';
    wardSelect.innerHTML = '<option value="">Chọn Phường / Xã</option>';

    const districts = await fetchDistrict(provinceId);
    districts.forEach((district) => {
      const option = document.createElement("option");
      option.value = district.DistrictID;
      option.textContent = district.DistrictName;
      districtSelect.appendChild(option);
    });
  });

  districtSelect.addEventListener("change", async (e) => {
    const districtId = e.target.value;
    wardSelect.innerHTML = '<option value="">Chọn Phường / Xã</option>';

    const wards = await fetchWards(districtId);
    wards.forEach((ward) => {
      const option = document.createElement("option");
      option.value = ward.WardCode;
      option.textContent = ward.WardName;
      wardSelect.appendChild(option);
    });
  });
}

init();
