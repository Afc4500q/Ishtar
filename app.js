// بيانات تسجيل الدخول ورصيد المستخدمين
const users = [
  { username: "user1", password: "password1", balance: 100 },
  { username: "user2", password: "password2", balance: 200 },
];

let loggedInUser = null;

// منتجات
const products = [
  { name: "فان حراري منضدي", description: "فان حراري منضدي منظر الحطب من ليبرونيك شكل مستطيل بقوة 2000 واط ", price: 65000, image: "https://c.top4top.io/p_3229o4v1m0.png" },
  { name: "قلاية هوائية", description: "قلاية 3.5 لتر من MIXDOR تستخدم لعمل الكيك, قلي الطعام, اللحوم والخضروات بدون زيت  ", price: 32000, image: "https://d.top4top.io/p_3229esdk71.png" },
  { name: "محضرة قهوة تركية", description: "محضرة قهوة تركية شاشة من ياني", price: 22000, image: "https://e.top4top.io/p_322991yy62.png" },
  { name: "جهاز تدليك 6 في 1", description: "جهاز تدليك 6 في 1 أداء عالي الجودة مع تصميم أنيق وسهل الاستخدام", price: 25000, image: "https://f.top4top.io/p_3229spq373.png" },
  { name: "خلاط رياضي متعدد", description: "خلاط رياضي متعدد تستخدم لعمل العصير, السموذي, البروتين والمكملات الغذائية", price:26000, image: "https://g.top4top.io/p_3229jwxpz4.png" },
  { name: "كابسة صاج", description: "كابسة صاج ماركة اوناكس", price: 27000 , image: "https://h.top4top.io/p_32292ddyn5.png" },
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
