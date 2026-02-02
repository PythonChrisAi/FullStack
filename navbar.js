window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.querySelector('.navbar');
  
  if (scrollTop > 100) {
    navbar.classList.add('floating');
  } else {
    navbar.classList.remove('floating');
  }
  
  if (scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});