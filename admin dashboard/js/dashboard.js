// ================= DATA =================
let products = [];
let promos = [];

// ================= DOM =================
const productList = document.getElementById("productList");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const totalProduk = document.getElementById("totalProduk");
const promoList = document.getElementById("promoList");


// ================= PRODUK =================

// TAMBAH PRODUK
window.addProduct = function () {
    const name = productNameInput.value.trim();
    const price = parseInt(productPriceInput.value);

    if (!name || !price) {
        alert("Isi nama dan harga dulu!");
        return;
    }

    products.push({
        id: Date.now(),
        name,
        price
    });

    productNameInput.value = "";
    productPriceInput.value = "";

    renderProducts();
};

// RENDER PRODUK
function renderProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        productList.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>Rp ${product.price}</p>
                <div style="display:flex; gap:10px; margin-top:10px;">
                    <button class="btn-edit" onclick="editPrice(${product.id})">
                        Edit Harga
                    </button>
                    <button class="btn-delete" onclick="deleteProduct(${product.id})">
                        Hapus
                    </button>
                </div>
            </div>
        `;
    });

    totalProduk.textContent = products.length;
}

// EDIT HARGA
window.editPrice = function (id) {
    const product = products.find(p => p.id === id);

    const newPrice = prompt("Masukkan harga baru:", product.price);

    if (newPrice !== null && newPrice !== "") {
        product.price = parseInt(newPrice);
        renderProducts();
    }
};

// HAPUS PRODUK
window.deleteProduct = function (id) {
    if (confirm("Yakin mau hapus produk ini?")) {
        products = products.filter(p => p.id !== id);
        renderProducts();
    }
};


// ================= PROMO =================

// TAMBAH PROMO
window.addPromo = function () {
    const code = document.getElementById("promoCode").value.trim();
    const type = document.getElementById("promoType").value;
    const value = parseInt(document.getElementById("promoValue").value);
    const expire = document.getElementById("promoExpire").value;

    if (!code || !value || !expire) {
        alert("Isi semua data promo dulu!");
        return;
    }

    promos.push({
        id: Date.now(),
        code,
        type,
        value,
        expire
    });

    document.getElementById("promoCode").value = "";
    document.getElementById("promoValue").value = "";
    document.getElementById("promoExpire").value = "";

    renderPromos();
};

// RENDER PROMO
function renderPromos() {
    promoList.innerHTML = "";

    promos.forEach(promo => {
        promoList.innerHTML += `
            <div class="card">
                <h3>${promo.code}</h3>
                <p>
                    ${promo.type === "percent"
                ? promo.value + "% Discount"
                : "Rp " + promo.value}
                </p>
                <p>Expire: ${promo.expire}</p>
                <button class="btn-delete" onclick="deletePromo(${promo.id})">
                    Hapus
                </button>
            </div>
        `;
    });
}

// HAPUS PROMO
window.deletePromo = function (id) {
    promos = promos.filter(p => p.id !== id);
    renderPromos();
};


// ================= SIDEBAR NAVIGATION =================

// Klik Produk
window.scrollToProduk = function () {
    const section = document.getElementById("produkSection");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveMenu(1);
    }
};

// Klik Promo
window.scrollToPromo = function () {
    const section = document.getElementById("promoSection");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveMenu(2);
    }
};

// Highlight active menu
function setActiveMenu(index) {
    const links = document.querySelectorAll(".sidebar nav a");
    links.forEach(link => link.classList.remove("active"));
    if (links[index]) {
        links[index].classList.add("active");
    }
}
// ================= PAGE SWITCHING =================

const dashboardSection = document.getElementById("dashboardSection");
const produkSection = document.getElementById("produkSection");
const promoSection = document.getElementById("promoSection");

function hideAllSections() {
    dashboardSection.style.display = "none";
    produkSection.style.display = "none";
    promoSection.style.display = "none";
}

function setActiveMenu(index) {
    const links = document.querySelectorAll(".sidebar nav a");
    links.forEach(link => link.classList.remove("active"));
    links[index].classList.add("active");
}

window.showDashboard = function () {
    hideAllSections();
    dashboardSection.style.display = "grid";
    setActiveMenu(0);
};

window.showProduk = function () {
    hideAllSections();
    produkSection.style.display = "block";
    setActiveMenu(1);
};

window.showPromo = function () {
    hideAllSections();
    promoSection.style.display = "block";
    setActiveMenu(2);
};

// default pertama buka dashboard
showDashboard();
