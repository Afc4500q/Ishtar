// بيانات المستخدمين بتنسيق JSON مخزنة ككائن JavaScript
const users = [
  { "username": "hayder", "password": "123456",  "balance": 100.00 },
  { "username": "ali", "password": "1234567",  "balance": 200.00}
];



function login1() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  // إعادة تعيين رسالة الخطأ
  errorDiv.textContent = "";

  // التحقق من صحة بيانات المستخدم
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "products.html"; // الانتقال إلى صفحة المنتجات
  } else {
    errorDiv.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
  }
}

// فتح النافذة المنبثقة
function openOrderModal() {
  document.getElementById("orderModal").style.display = "flex";
}

// إغلاق النافذة المنبثقة
function closeOrderModal() {
  document.getElementById("orderModal").style.display = "none";
}

function sendToWhatsApp() {
  const clientName = document.getElementById("clientName").value;
  const clientPhone = document.getElementById("clientPhone").value;
  const clientProvince = document.getElementById("clientProvince").value;
  const clientCity = document.getElementById("clientCity").value;
  const clientArea = document.getElementById("clientArea").value;

  // التأكد من أن جميع الحقول مليئة
  if (!clientName || !clientPhone || !clientProvince || !clientCity || !clientArea) {
    alert("يرجى ملء جميع الحقول.");
    return;
  }

  // إعداد رسالة WhatsApp
  const message = `اسم العميل: ${clientName}\nرقم الهاتف: ${clientPhone}\nالمحافظة: ${clientProvince}\nالمدينة: ${clientCity}\nالحي: ${clientArea}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "9647830860919"; // رقم الواتساب
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

  // فتح رابط WhatsApp
  window.open(whatsappUrl, '_blank');

  // إغلاق النافذة المنبثقة
  closeOrderModal();
}

// دالة لتحميل صورة المنتج
function downloadImage(imagePath) {
  const link = document.createElement('a');
  link.href = imagePath;
  link.download = 'product-image.jpg';
  link.click();
}

function closeOrderModal() {
  document.getElementById("orderModal").style.display = "none";
}

function openOrderModal() {
  document.getElementById("orderModal").style.display = "block";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // تحقق من صحة بيانات تسجيل الدخول
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem("currentUser", username); // تخزين اسم المستخدم
    loadUserBalance(); // تحميل الرصيد
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
  }
}

// دالة لتحميل رصيد المستخدم
function loadUserBalance() {
  const currentUser = localStorage.getItem("currentUser");
  const user = users.find(u => u.username === currentUser);
  if (user) {
    document.getElementById('balanceDisplay').innerHTML = `مبلغ الرصيد: ${user.balance} دينار`;
  } else {
    document.getElementById('balanceDisplay').innerHTML = 'المستخدم غير موجود.';
  }
}

// استدعاء دالة تحميل الرصيد عند تحميل الصفحة
window.onload = loadUserBalance;
