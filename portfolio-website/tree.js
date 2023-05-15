// toggle icon navbar 


// scroll sections
let header = document.querySelector('header');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        }
    });
    // sticky header

    header.classList.toggle('sticky', window.scrollY - 100);
}