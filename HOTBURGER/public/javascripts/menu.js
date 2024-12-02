const carousels = document.querySelectorAll('.carousel_container');

carousels.forEach(carousel => {
    const items = [...carousel.children];
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
        
    });
});
