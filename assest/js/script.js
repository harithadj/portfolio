// 1)

function flipImage() {
    const flipContainer = document.querySelector('.image-flip');
    flipContainer.classList.toggle('flipped'); // Toggle the 'flipped' class
}

// 2)

// Select the images you want to animate
const frontImage = document.querySelector('.front-image');
const backImage = document.querySelector('.back-image');
const logoText = document.querySelector('.logo-text');
const logoHeading = document.querySelector('.logo-heading');
const logoPara = document.querySelector('.logo-para');
const posterimg = document.querySelector('.poster-text');
const ps = document.querySelector('.poster-images');
const Businesscardimage = document.querySelector('.Businesscard-images');
const Businesscardtext = document.querySelector('.Businesscard-text');
const menutext = document.querySelector('.menu-text');
const producttext = document.querySelector('.invitation-image-container');
const invitationtext = document.querySelector('.invitation-text');

const invitationimagecontainer = document.querySelector('.product-text');
const menuimage = document.querySelector('.full-width-img1');
const menurow = document.querySelector('.menu-row');
const productimage = document.querySelector('.main-product-img1');
const roqproductimage = document.querySelector('.product-images');
const rowqproductimage = document.querySelector('.row-product-img');
// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Check if the image is in view
        if (entry.isIntersecting) {
            // Add the animate class to start the animation
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once it's animated
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the image is in view


// Start observing the images
observer.observe(logoText);
observer.observe(logoHeading);
observer.observe(logoPara);
observer.observe(frontImage);
observer.observe(backImage);
observer.observe(posterimg);
observer.observe(ps);
observer.observe(Businesscardimage);
observer.observe(Businesscardtext);
observer.observe(menutext);
observer.observe(producttext);
observer.observe(invitationimagecontainer);
observer.observe(menuimage);
observer.observe(menurow);
observer.observe(productimage);
observer.observe(roqproductimage);
observer.observe(rowqproductimage);
observer.observe(invitationtext );
//business card flip
function flipCard() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flipped');
}
  


const menuIcon = document.getElementById('menu__icon');
const closeIcon = document.getElementById('close__icon');
const navMenu = document.getElementById('nav_menu');

// Open menu
menuIcon.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Close menu
closeIcon.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Add click listeners to anchor links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default scroll behavior

        // Get the target section
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll to the target section with offset
            const offset = 64; // Updated to 5rem = 80px
            const elementPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    });
});




