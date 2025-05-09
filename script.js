// Saat ini belum ada interaksi JavaScript.
// Tapi kamu bisa menambahkan event listener di sini jika butuh navigasi atau fitur interaktif lainnya.
console.log("Website DikkDev siap!");
// Fade-in on scroll
document.addEventListener('DOMContentLoaded', function () {
  const fadeElems = document.querySelectorAll('.fade-in');

  const showOnScroll = () => {
    fadeElems.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  showOnScroll(); // trigger on load
  window.addEventListener('scroll', showOnScroll);
});

// Tangkap semua tombol "View Details"
const viewButtons = document.querySelectorAll('.btn-main');

viewButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah link terbuka
    alert("Currently you still can't see the project details");
  });
});