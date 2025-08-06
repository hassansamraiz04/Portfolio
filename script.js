document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thank you for your message, ${name}!`);
  this.reset();
});

const scrollBtn = document.getElementById('scrollTop');

window.onscroll = function () {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

scrollBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
