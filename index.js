document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll('.sec3 > div');
    var popup = document.getElementById('popup');
    var popupMessage = document.getElementById('popup-message');
    var closeBtn = document.querySelector('.close-btn');

    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            var message = this.textContent.trim();
            popupMessage.textContent = `You clicked on: ${message}`;
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
            popup.classList.add("popup-nav");
        popup.addEventListener('animationend', function() {
            popup.classList.remove('popup-nav');
      }, { once: true });
        
        }
    });
});