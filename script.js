// back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
    } else {
    backToTopBtn.classList.remove('show');
}
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
// images transition 
window.addEventListener('DOMContentLoaded', () => {

    const logos = document.querySelectorAll('.service-images img');

logos.forEach(img => {
    img.addEventListener('mouseenter', () => {

    img.style.transform = 'translateY(-15px)';
    });
    img.addEventListener('mouseleave', () => {
    
    img.style.transform = 'translateY(0)';
    });
});
});
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    burgerIcon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    mobileMenu.classList.toggle('show');
    });
    mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});
    document.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});
});

