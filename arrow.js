let data = { value: 0 };

        // ฟังก์ชันสำหรับอัปเดตค่าที่แสดงใน HTML
        function updateDisplay() {
            document.getElementById('value').innerText = data.value;
        }

        // เพิ่ม Event Listener สำหรับการคลิกปุ่มลูกศร
        document.querySelector('.arrow-left').addEventListener('click', function() {
            data.value -= 1; // ลดค่าเมื่อคลิกปุ่มลูกศรซ้าย
            updateDisplay(); // อัปเดตค่าที่แสดง
        });

        document.querySelector('.arrow-rigth').addEventListener('click', function() {
            data.value += 1; // เพิ่มค่าเมื่อคลิกปุ่มลูกศรขวา
            updateDisplay(); // อัปเดตค่าที่แสดง
        });

        // เรียกใช้ฟังก์ชันครั้งแรกเพื่อแสดงค่าที่เริ่มต้น
        updateDisplay();