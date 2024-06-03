// document.addEventListener("DOMContentLoaded", function() {
//     let popup = document.getElementById('popup');
//     let popupMessage = document.getElementById('popup-message');

//     var data = {
//         1: { name: "D = Development", university: " หัวใจไม่หยุดยั้งการพัฒนาผลงานและตนเองอยู่เสมอ ทั้งในเรื่องบุคลิกภาพ พฤติกรรมหรือแม้แต่วิธีการทำงาน หาจุดแข็งและจุดบกพร่องของตัวเองให้เจอ แล้วพยายามพัฒนาเพิ่มจุดแข็งตัวเองให้เด่นขึ้นและกล้าที่จะ ปรับปรุงจุดบกพร่องของตัวเองให้ดีขึ้นด้วย " },
//         2: { name: "E = Endurance", university: " มุ่งเน้นความอดทน หนักเอาเบาสู้ เมื่อไรที่คุณมีความอดทนพอ ไม่ว่าจะเป็นอดทนต่อคำพูด อดทนต่อ พฤติกรรมการสบประมาทจากคนอื่น และอดทนต่อความเครียดในการทำงาน คุณคนนั้นก็จะจัดการกับปัญหา ที่เข้ามาทั้งเบาหรือหนักแบบที่ว่ากระโดดผ่านไปได้อย่างสบาย " },
//         3: { name: "V = Versatile", university: "มีความสามารถหลากหลาย คุณจะต้องเป็นคนรอบรู้ในทุกอย่างสามารถที่จะรับมือกับงานที่เข้ามาได้ทุก รูปแบบโดยที่ไม่ปฏิเสธหรือพยายามหลีกเลี่ยงงาน เพียงเท่านี้คุณก็มีโอกาสที่จะก้าวหน้าการท างานมากกว่าคน อื่นแล้ว" },
//         4: { name: "E = Energetic ", university: "กระตือรือร้น มีพลังในการใช้ชีวิตอยู่เสมอเพราะเมื่อไรถ้าคุณเกิดหยุดที่จะตื่นตัวแสวงหาความรู้ใหม่ๆ คุณจะ ไม่มีแรงที่ต่อสู้กับปัญหาและอุปสรรคที่เข้ามาอย่างลุล่วงเลย" },
//         5: { name: "L = Love", university: " รักงานที่ทำ ถ้าคุณเป็นคนที่เลือกงานไม่ได้คุณก็ต้องพยายามรักงานที่คุณกำลังทำ อยู่ให้ได้ แล้วสิ่งนั้นจะดีเอง อย่าลืมว่าความรู้สึกเป็นสิ่งสำ คัญในการสร้างชิ้นงานต่างๆขึ้นมา" },
//         6: { name: "O = Organizing", university: " จัดการเป็นเลิศ อย่าคอยพูดว่าไม่มีเวลาถ้าคุณไม่เคยลำดับการวางแผนเรื่องราวว่าควรทำอะไรก่อนและหลัง บ้าง แต่ถ้าคุณรู้ว่ามีสิ่งไหนสำ คัญกับคุณบ้างแล้ว ก็ขอให้หยิบกระดาษกับปากกาออกมาจดโน๊ตสั้นๆจัดลำดับ สิ่งที่ต้องทำในชีวิต แล้วเวลาจะกลับมาหาคุณเอง นอกจากนั้นงานที่คุณทำก็จะมีประสิทธิภาพอีกด้วย  " },
//         7: { name: "P = Positive Thinking", university: " คิดแต่ทางบวก การมองโลกในมุมดีมีความสำคัญกับการทำงานมากจริงๆ เพราะเป็นเหมือนยาวิเศษที่เราสร้าง ขึ้นเองอย่างที่คุณคิดไม่ถึง ถือเป็นกำลังใจและพลังชั้นเยี่ยมที่จะทำให้มีความสนุกและความสุขกับงานทุกชิ้น ทีเดียว " }
//     };

//     window.showPopup = function(id) {
//         var item = data[id];
//         if (item) {
//             popupMessage.innerHTML = `<h1>${item.name}</h1><p>${item.university}</p>`;
//             popup.style.display = 'flex';
//         }
//     };

//     window.closePopup = function() {
//         popup.style.display = 'none';
//         popup.classList.add("popup-nav");
//         popup.addEventListener('animationend', function() {
//             popup.classList.remove('popup-nav');
//         }, { once: true });};

//     window.addEventListener('click', function(event) {
//         if (event.target == popup) {
//             closePopup();
//         }
//         closeBtn.addEventListener('click', function() {
//             closePopup();
//         });
//     });});

document.addEventListener("DOMContentLoaded", function() {
    let popup = document.getElementById('popup');
    let popupMessage = document.getElementById('popup-message');
    let closeBtn = document.querySelector('.close-btn');

    var data = {
        1: { name: "D = Development", university: "รายละเอียด..." },
        2: { name: "E = Endurance", university: "รายละเอียด..." },
        3: { name: "V = Versatile", university: "รายละเอียด..." },
        4: { name: "E = Energetic ", university: "รายละเอียด..." },
        5: { name: "L = Love", university: "รายละเอียด..." },
        6: { name: "O = Organizing", university: "รายละเอียด..." },
        7: { name: "P = Positive Thinking", university: "รายละเอียด..." }
    };

    window.showPopup = function(id) {
        var item = data[id];
        if (item) {
            popupMessage.innerHTML = `<h1>${item.name}</h1><p>${item.university}</p>`;
            popup.style.display = 'flex';
        }
    };

    window.closePopup = function() {
        popup.style.display = 'none';
    };

    // ปิด popup เมื่อคลิกที่ปุ่ม close
    closeBtn.addEventListener('click', function() {
        closePopup();
        
    });

    // ปิด popup เมื่อคลิกที่พื้นที่นอก popup
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            closePopup();
        }
    });
});