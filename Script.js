function toggleForm() {
    const form = document.getElementById("contactForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
  }
  
  function submitForm(e) {
    e.preventDefault();
    alert("Form Submitted!");
  }
  
  const phoneInput = document.querySelector("#phone");
  if (phoneInput) {
    window.intlTelInput(phoneInput, {
      initialCountry: "in",
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
    });
  }
  
  // Carousel functionality (sample only, for drag and click)
  const container = document.querySelector('.carousel-container');
  let isDown = false;
  let startX;
  let scrollLeft;
  
  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });
  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });
  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3;
    container.scrollLeft = scrollLeft - walk;
  });
  