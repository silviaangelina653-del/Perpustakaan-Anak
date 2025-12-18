function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log("Navigating to: " + pageId);
} 
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Pustaka Hijau siap digunakan.");
});