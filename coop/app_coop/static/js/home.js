// Carousel Loop Logo
const brands = document.querySelector('ul.brands');
const totalBrand = brands.children.length;
document.documentElement.style.setProperty('--total-brand', totalBrand);

for (let i = 0; i < totalBrand; i++) {
    brands.appendChild(brands.children[i].cloneNode(true));
}

// Second Carousel Testimony
let testimonyItems = document.querySelectorAll('#recipeCarousel .carousel-item');

testimonyItems.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = testimonyItems[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
});


// Dashboard drawer
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.drawer').classList.toggle('open');
});

