fetch("navbar.html")
  .then(res => res.text())
  .then(html => {
    // 1. แปะ Navbar ลงไปในหน้าเว็บ
    document.getElementById("navbar").innerHTML = html;

    // 2. 🔥 หลังจากแปะเสร็จ ให้เช็คทันทีว่าอยู่หน้าไหน
    const currentUrl = window.location.href; // ลิงก์ของหน้าปัจจุบัน
    const navLinks = document.querySelectorAll('.nav-center a, .nav-item'); // ปุ่มเมนูทั้งหมด

    navLinks.forEach(link => {
      // ถ้าลิงก์ของปุ่ม ตรงกับ ลิงก์หน้าปัจจุบัน
      if (link.href === currentUrl) {
        link.classList.add('active'); // เติม Class active (เพื่อให้ CSS ทำงาน)
      }
    });

  });

document.addEventListener("DOMContentLoaded", function() {
    // ดึงชื่อไฟล์ปัจจุบันออกมา
    let currentPath = window.location.pathname.split("/").pop();
    
    // ถ้าหน้าเว็บเป็นค่าว่าง (เช่นเปิดโฟลเดอร์เฉยๆ) ให้ถือว่าเป็น index.html
    if (currentPath === "") {
        currentPath = "index.html";
    }

    const navLinks = document.querySelectorAll('.nav-center a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // ตรวจสอบว่า href ตรงกับหน้าปัจจุบันไหม
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});