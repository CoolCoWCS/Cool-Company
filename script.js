
// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Show btn when user scrolled 100px
window.onscroll = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// when clicked to to the top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
