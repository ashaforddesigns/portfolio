const words = ["Graphic Designer", "Motion Designer", "Product Designer", "Developer", "Creative Problem Solver", "Storyteller", "Great Asset"];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.querySelector(".typing");

        function typeEffect() {
            const currentWord = words[index];
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }
            typingElement.textContent = currentWord.slice(0, charIndex);
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % words.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? 50 : 100);
            }
        }
        typeEffect();


// let slideIndex = 0;
// showSlide(slideIndex);

// function showSlide(index) {
//     let slides = document.querySelectorAll(".slide");
//     let dots = document.querySelectorAll(".dot");

//     if (index >= slides.length) slideIndex = 0; // Loop to the first slide
//     if (index < 0) slideIndex = slides.length - 1; // Loop to the last slide

//     // Remove active class from all slides and dots
//     slides.forEach(slide => slide.classList.remove("active"));
//     dots.forEach(dot => dot.classList.remove("active"));

//     // Add active class to current slide and dot
//     slides[slideIndex].classList.add("active");
//     dots[slideIndex].classList.add("active");
// }

// // Change slide every 5 seconds automatically
// setInterval(function() {
//     slideIndex++;
//     showSlide(slideIndex);
// }, 5000); // Change slide every 5 seconds (5000 ms)

// // Change slide when arrow is clicked
// function changeSlide(n) {
//     showSlide(slideIndex += n);
// }

// // Go to specific slide when dot is clicked
// function goToSlide(n) {
//     showSlide(slideIndex = n);
// }

// JavaScript to enlarge images on click
document.addEventListener('DOMContentLoaded', () => {
    // Select all images except the site logo
    const images = document.querySelectorAll('section img:not(#site-logo)');

    // Loop through each image and add a click event listener
    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('enlarged'); // Toggle the enlarged class
        });
    });
});