document.addEventListener("DOMContentLoaded", function() {
    let popup = document.getElementById('popup');
    let popupMessage = document.getElementById('popup-message');

    var data = {
        1: { name: "John Doe", university: "Harvard", group: "Group A" },
        2: { name: "Jane Smith", university: "MIT", group: "Group B" },
        3: { name: "Jim Brown", university: "Stanford", group: "Group C" },
        4: { name: "Jake White", university: "Yale", group: "Group D" },
        5: { name: "Jill Black", university: "Princeton", group: "Group E" },
        6: { name: "Jack Green", university: "Columbia", group: "Group F" },
        7: { name: "Jen Blue", university: "Berkeley", group: "Group G" }
    };

    window.showPopup = function(id) {
        var item = data[id];
        if (item) {
            popupMessage.innerHTML = `
                <p>Name: ${item.name}</p>
                <p>University: ${item.university}</p>
                <p>Group: ${item.group}</p>
            `;
            popup.style.display = 'flex';
        }
    };

    window.closePopup = function() {
        popup.style.display = 'none';
        popup.classList.add("popup-nav");
        popup.addEventListener('animationend', function() {
            popup.classList.remove('popup-nav');
      }, { once: true });
        
    };

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            closePopup();
        }
    });
});


