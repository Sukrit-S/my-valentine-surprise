// เรียกใช้งานป็อบอัพเมื่อคลิกปุ่ม
const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const allText = document.querySelectorAll('h1');

// การหน่วงเวลาเพื่อแสดงปุ่มหลังจากข้อความทั้งหมดแสดง
setTimeout(function() {
    // ซ่อนข้อความทั้งหมด
    allText.forEach(text => {
        text.style.display = "none";
    });

    // แสดงปุ่มที่ใหญ่ขึ้นกลางหน้าจอ
    popupBtn.classList.add('show'); // เพิ่ม class show ให้กับปุ่ม
}, 7000);  // ปุ่มจะปรากฏหลังจาก 5 วินาที

// เมื่อคลิกปุ่ม "กรุณากดปุ่มนี้" ให้แสดงป็อบอัพ
popupBtn.addEventListener("click", function() {
    popupBtn.style.animation = "fadeOut 1s ease forwards";// ทำให้ปุ่มค่อยๆ จางหายไป
    setTimeout(function() {// หน่วงเวลาให้ป๊อปอัพแสดงหลังจากปุ่มจางหาย
        popup.style.display = "flex"; // แสดงป็อปอัพ
    }, 1000); // หน่วงเวลา 1 วินาที หลังจากที่ปุ่มจางหาย
    popup.style.display = "flex"; // แสดงป็อบอัพ
    yesBtn.style.display = 'inline-block'; // ทำให้ปุ่ม "ใช่!" แสดง
    noBtn.style.display = 'inline-block'; // ทำให้ปุ่ม "ไม่" แสดง
});

// เมื่อคลิกปุ่มปิดป็อบอัพ
closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

// เมื่อคลิกปุ่ม "ใช่!" แสดงรูปดอกกุหลาบและไปที่ YouTube
yesBtn.addEventListener("click", function() {
    alert("คุณกด 'ใช่!'");  // แจ้งเตือนเมื่อกด 'ใช่!'
    alert("น่ารักจัง !! เป็นแฟนกันนะ");  // ข้อความเสียใจ 
    popup.style.display = "none";// ปิดป๊อปอัพ
    document.getElementById("heartAndRose").style.display = "flex"; // แสดงรูปหัวใจและกุหลาบ
    setTimeout(function() {
        window.location.href = "https://www.youtube.com/watch?v=EUFrU1TuyAg&pp=ygUh4LiU4Li14LmD4LiI4Lij4Li24LmA4Lib4Lil4LmI4Liy"; // เปลี่ยนไปยังลิงก์ YouTube
    }, 5000); // 2 วินาทีหลังจากแสดงดอกกุหลาบ
    setTimeout(function() {
        window.close(); // ปิดเว็บหลังจาก 4 วินาที
    }, 6000); // ปิดเว็บหลังจาก 4 วินาที
});

// เมื่อคลิกปุ่ม "ไม่" ซ่อนป็อบอัพและแสดงข้อความ
noBtn.addEventListener("click", function() {
    alert("คุณกด 'ไม่'");  // แจ้งเตือนเมื่อกด 'ไม่'
    alert("เสียใจจัง คุณเลือกแล้วสินะ");  // ข้อความเสียใจ
    popup.style.display = "none";
    setTimeout(function() {
        window.close(); // ปิดเว็บหลังจาก 5 วินาที
    }, 5000); // ปิดเว็บหลังจาก 5 วินาที
});
