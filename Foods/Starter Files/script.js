document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    })
});


const icons = document.querySelectorAll('.section-1-icons i');
let currentIconIndex = 0;

setInterval(() => {
    const currentIcon = icons[currentIconIndex];
    
    // Remove the 'change' class from the current icon
    currentIcon.classList.remove('change');
    
    // Increment the currentIconIndex and wrap around if necessary
    currentIconIndex = (currentIconIndex + 1) % icons.length;

    // Add the 'change' class to the next icon
    icons[currentIconIndex].classList.add('change');
}, 4000);

