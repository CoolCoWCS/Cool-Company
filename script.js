// togle theme
const toggleThemeBtn = document.getElementById('toggleThemeBtn');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    toggleThemeBtn.textContent = '☀️ Light Mode';
} else {
    toggleThemeBtn.textContent = '🌙 Dark Mode';
}

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        toggleThemeBtn.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleThemeBtn.textContent = '🌙 Dark Mode';
    }
});

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
