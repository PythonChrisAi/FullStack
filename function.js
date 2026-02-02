const modal = document.getElementById('modal');
let currentCard = null;

document.querySelectorAll('.card').forEach((card, index) => {
  card.style.setProperty('--order', index);
  
  const ingredientsDisplay = card.querySelector('.ingredients-display');
  if (ingredientsDisplay) {
    ingredientsDisplay.innerHTML = `<strong>Ingredientes:</strong> ${card.dataset.ingredients}`;
  }
});

document.getElementById('closeBtn').addEventListener('click', closeModal);

modal.addEventListener('click', (e) => { 
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => { 
  if (e.key === 'Escape' && modal.style.display !== 'none') {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
    currentCard = null; 
  }, 300);
}

function showNotification(message) {
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) existingNotification.remove();
  
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = 'position:fixed;top:30px;right:30px;background:linear-gradient(135deg, var(--primary), var(--primary-dark));color:white;padding:1rem 2rem;border-radius:12px;box-shadow:0 10px 25px rgba(140,47,57,0.3);z-index:1001;animation:slideInRight 0.3s ease-out;font-weight:500;';
  
  const style = document.createElement('style');
  style.textContent = '@keyframes slideInRight{from{transform:translateX(100%);opacity:0;}to{transform:translateX(0);opacity:1;}}.notification{animation:slideInRight 0.3s ease-out;}';
  document.head.appendChild(style);
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

navbar.addEventListener('mouseenter', function() {
  navbar.classList.remove('hidden');
});

window.addEventListener('load', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }
});