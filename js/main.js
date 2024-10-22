let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav li a');

window.onscroll = () => {
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 50) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === sec.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    }
    );
}