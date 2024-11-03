// بيانات تسجيل الدخول ورصيد المستخدمين
const users = [
  { username: "user1", password: "password1", balance: 100 },
  { username: "noor", password: "123123", balance: 200 },
];

let loggedInUser = null;

// منتجات
const products = [
  { name: " فان حراري منضدي", description: "وصف المنتج 1", price: 65000, image: "https://c.top4top.io/p_3229o4v1m0.png" },
  { name: "قلاية هوائية", description: "وصف المنتج 2", price: 32000, image: "https://d.top4top.io/p_3229esdk71.png" },
  { name: "محضرة قهوة تركية", description: "وصف المنتج 3", price: 22000, image: "https://e.top4top.io/p_322991yy62.png" },
  { name: "جهاز تدليك كهربائي", description: "وصف المنتج 4", price: 25000, image: "https://f.top4top.io/p_3229spq373.png" },
  { name: "خلاط رياضي متعدد", description: "وصف المنتج 5", price: 26000, image: "https://g.top4top.io/p_3229jwxpz4.png" },
  { name: "كابسة صاج", description: "وصف المنتج 6", price: 27000, image: "https://h.top4top.io/p_32292ddyn5.png" },
];

// دالة تسجيل الدخول
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    loggedInUser = user;
    document.getElementById("login").style.display = "none";
    document.getElementById("products").style.display = "block";
    loadProducts();
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة");
  }
}

// تحميل المنتجات
function loadProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>السعر: $${product.price}</p>
      <button onclick="showSalePopup()">بيع لزبون</button>
      <button onclick="downloadImage('${product.image}')">تحميل الصورة</button>
    `;
    productList.appendChild(productElement);
  });
}

// نافذة الرصيد
function showBalance() {
  document.getElementById("balanceAmount").innerText = `$${loggedInUser.balance}`;
  document.getElementById("balancePopup").style.display = "block";
}

// تحميل الصورة
function downloadImage(imageUrl) {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "product_image.jpg";
  link.click();
}

// نافذة البيع لزبون
function showSalePopup() {
  document.getElementById("salePopup").style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

// إرسال إلى الواتساب
function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const province = document.getElementById("customerProvince").value;
  const city = document.getElementById("customerCity").value;
  const neighborhood = document.getElementById("customerNeighborhood").value;

  const message = `اسم العميل: ${name}%0Aرقم الهاتف: ${phone}%0Aالمحافظة: ${province}%0Aالمدينة: ${city}%0Aالحي: ${neighborhood}`;
  const whatsappUrl = `https://wa.me/9647830860919?text=${message}`;
  window.open(whatsappUrl, "_blank");
  closePopup("salePopup");
}
