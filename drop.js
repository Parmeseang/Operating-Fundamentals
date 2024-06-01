toggleDropdown = () => {
  let dp = document.getElementById("myDropdown");
  dp.classList.toggle("chang");
  
  dp.classList.add("popup-nav");
  dp.addEventListener('animationend', function() {
      dp.classList.remove('popup-nav');
  }, { once: true });
}