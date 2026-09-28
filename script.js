const toast = document.getElementById('toast');
let toastTimer;

document.querySelectorAll('.link-card[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    toast.textContent = `Tautan ${link.querySelector('.card-label').textContent} belum tersedia.`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  });
});
