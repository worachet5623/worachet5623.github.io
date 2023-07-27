// script.js
function generatePromptPayImage() {
    // ดึงค่าจากฟอร์ม
    var idcard = document.getElementById("idcard2").value;
    var price = document.getElementById("price2").value;

    // สร้าง URL ของรูปภาพ PromptPay
    var imageUrl = "https://promptpay.io/" + idcard + "/" + price;

    // แสดงรูปภาพผ่านอิลิเมนต์ <img>
    var imageElement = document.getElementById("promptpayImage");
    imageElement.src = imageUrl;
}
