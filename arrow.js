  // กำหนดตัวแปร data ใน JS
  let data = { value: 1 };

  // วัตถุทั้ง 7 ก้อน
  let objects = [
      { name: ' ',pp:'ใครที่คิดว่าตัวเองยังไม่ประสบความสำเร็จในหน้าที่การงานเท่าที่ควร หรือล้มเหลว ลองค้นหาจุดบกพร่องของตัวเองแล้วปรับปรุงให้ดีขึ้น พร้อมทั้งหาเทคนิควิธีการใหม่ๆ มาปรับใช้ในการทำงาน ซึ่งก็มีเทคนิคในการทำงานดีๆ ที่เรียกว่าคาทา 6P ดังนี้' },
      { name: 'P-Positive Thinking',pp:'การมีทัศนคติเชิงบวก หรือ การมองโลกในแง่ดี ตัวนี้จะเป็นพลังขับเคลื่อนที่สำคัญของเรา คงไม่ดีแน่ๆ ถ้าน้องๆ เจองานที่ยากๆ แล้วท้อแท้ตั้งแต่แรก' },
      { name: 'P-Peacepul Mind',pp:'คือ การมีจิตใจที่สงบ เยือกเย็น อยู่แบบไม่อิจฉาริษยาผู้อื่น “จงใช้ความสงบสยบความเคลื่อนไหว”' },
      { name: 'P-Patient',pp:'ความอดทน ข้อนี้จะสอดคล้องกับ P-Peacepul เพราะการที่เราจะมีจิตใจที่สงบได้นั้น เราต้องใช้ความอดทน และ อดกลั้น จำไว้ว่า ไม่มีใครมี่จะตรงใจเราทุกเรื่อง และในการทำงานเราจะเจอคนมากมาย เราไม่สามารถเปลี่ยนนิสัยของคนอื่นได้ แต่เราสามารถเปลี่ยนตัวเอง ในการรับมือกับคนพวกนี้ได้' },
      { name: 'P-Punctual',pp:'การเป็นคนตรงต่อเวลา เรื่องนี้เราถูกให้ฝึกฝนมาตั้งแต่เด็กๆ ทั้งการเข้าเรียน การส่งการบ้าน สิ่งพวกนี้สอนให้เรารู้จักบริหารเวลา การตรงต่อเวลาเป็นพื้นฐานของคนที่มีระเบียบวินัย' },
      { name: 'P-Polite',pp:'สุภาพ อ่อนโน้มถ่อมตน จะทำให้ผู้อื่นรักใคร และอยากจะช่วยเหลือ ไม่เกี่ยวที่ตำแหน่งสูงกว่า หรือ  ต่ำกว่า ยิ่งคนที่มีตำแหน่งสูง ควรมีความสุภาพน้อมโน้ม เพื่อที่ผู้อื่นจะได้มีความเกรงใจ และเคารพนับถือ' },
      { name: 'P-Professional',pp:'สุดท้ายคือ ความเป็นมืออาชีพได้การทำงาน ตำแหน่งของเรามีหน้าที่อะไร ควรรู้หน้าที่ของตนเอง และเป็นผู้เชียวชาญด้านนั้นๆ ขยันแสวงหาความรู้ใหม่ๆ และฝึกฝนเพื่อให้งานออกมาดีที่สุด'}
  ];

  // ฟังก์ชันสำหรับอัปเดตค่าที่แสดงใน HTML
  function updateDisplay() {
    const ppDiv = document.getElementById('pp');
            const hpDiv = document.getElementById('hp');
            const mainImage = document.getElementById('mainImage');
            ppDiv.innerHTML = ''; // ลบข้อมูลเก่าก่อนอัปเดตใหม่
            hpDiv.innerHTML = '';

            // ตรวจสอบว่าค่า value อยู่ในช่วงที่เหมาะสม
            if (data.value >= 1 && data.value <= 7) {
                const obj = objects[data.value - 1]; // ค้นหาวัตถุตามค่า value
                ppDiv.innerText = `${obj.pp}`;
                hpDiv.innerText = `${obj.name}`;

                // ขยับภาพขึ้นเมื่อ value ไม่เท่ากับ 1
                if (data.value !== 1) {
                    mainImage.style.transform = 'translateY(-45px)';
                } else {
                    mainImage.style.transform = 'translateY(0)';
                }
            }

            // อัปเดตสีของ divs ใน .next
            const nextDivs = document.querySelectorAll('.next div');
            nextDivs.forEach((div, index) => {
                if (index + 1 === data.value) {
                    div.classList.add('highlighted');
                } else {
                    div.classList.remove('highlighted');
                }
            });

        
}


  // เพิ่ม Event Listener สำหรับการคลิกปุ่มลูกศร
  document.querySelector('.arrow-left').addEventListener('click', function() {
    if (data.value > 1) {
        data.value -= 1; // ลดค่าเมื่อคลิกปุ่มลูกศรซ้าย
        updateDisplay(); // อัปเดตค่าที่แสดง
    }
});

document.querySelector('.arrow-rigth').addEventListener('click', function() {
    if (data.value < 7) {
        data.value += 1; // เพิ่มค่าเมื่อคลิกปุ่มลูกศรขวา
        updateDisplay(); // อัปเดตค่าที่แสดง
    }
});

  // เรียกใช้ฟังก์ชันครั้งแรกเพื่อแสดงค่าที่เริ่มต้น
  updateDisplay();