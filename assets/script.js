let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto slideshow
let slideInterval = setInterval(function() {
    plusSlides(1);
}, 5000); // Change image every 5 seconds

// Pause on hover
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
});
slideshowContainer.addEventListener('mouseout', function() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000); // Change image every 5 seconds
});











// for the add-to-cart button and the added-to-cart-counter counter

document.addEventListener('DOMContentLoaded', function() {
    // Get the like counter element
    const likeCounter = document.getElementById('like-counter');
    const cartCounter = document.getElementById('cart-counter');
    
    // Initialize the counters
    let likeCount = 0;
    let cartCount = 0;

    // Get all like buttons
    const likeButtons = document.querySelectorAll('.like-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listener to each like button
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const heartPath = button.querySelector('.heart-path');

            if (heartPath.classList.contains('liked')) {
                // Decrement the counter if already liked
                likeCount--;
                heartPath.classList.remove('liked');
            } else {
                // Increment the counter if not liked
                likeCount++;
                heartPath.classList.add('liked');
            }

            // Update the like counter display
            likeCounter.textContent = likeCount;
        });
    });

    // Add event listener to each add to cart button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            // Increment the cart counter
            cartCount++;
            
            // Update the cart counter display
            cartCounter.textContent = cartCount;
        });
    });
});

function itemLike(itemId) {
    // Logic for liking an item
    console.log('Toggled like for item with ID:', itemId);
}

function addToCart() {
    // Logic for adding to cart
    console.log('Item added to cart');
}











// for the quantity adder

function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText) + click;
    console.log(sumValue + click);
    totalClicks.innerText = sumValue;

    // avoid negatives
    if (sumValue < 0) {
        totalClicks.innerText = 0;
    }
}









// code for the side bars

// Function to toggle sidebar visibility
function toggleSidebar(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    const overlay = document.getElementById('overlay');
    
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        // Hide all sidebars first
        document.querySelectorAll('.sidebar').forEach(function(s) {
            s.classList.remove('show');
        });
        
        sidebar.classList.add('show');
        overlay.classList.add('show');
    }
}





// something here is part of the problem of the review-description
// Add event listeners to icons
document.getElementById('icon1').addEventListener('click', function() {
    toggleSidebar('sidebar1');
});

document.getElementById('icon2').addEventListener('click', function() {
    toggleSidebar('sidebar2');
});

document.getElementById('icon3').addEventListener('click', function() {
    toggleSidebar('sidebar3');
});

// Add event listener to overlay to hide sidebar when clicked
document.getElementById('overlay').addEventListener('click', function() {
    document.querySelectorAll('.sidebar').forEach(function(s) {
        s.classList.remove('show');
    });
    this.classList.remove('show');
});




















































// this is the old javascript for the description/review that was not able to post comments

document.addEventListener('DOMContentLoaded', function () {
    const descriptionTab = document.getElementById('description-tab');
    const reviewsTab = document.getElementById('reviews-tab');
    const descriptionContainer = document.getElementById('description-container');
    const reviewsContainer = document.getElementById('reviews-container');

    descriptionTab.addEventListener('click', function () {
        descriptionTab.classList.add('active');
        reviewsTab.classList.remove('active');
        descriptionContainer.classList.add('active');
        reviewsContainer.classList.remove('active');
    });

    reviewsTab.addEventListener('click', function () {
        reviewsTab.classList.add('active');
        descriptionTab.classList.remove('active');
        reviewsContainer.classList.add('active');
        descriptionContainer.classList.remove('active');
    });
});
















// this is the new code that can post comments
document.addEventListener('DOMContentLoaded', function () {
    const descriptionTab = document.getElementById('description-tab');
    const reviewsTab = document.getElementById('reviews-tab');
    const descriptionContainer = document.getElementById('description-container');
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewForm = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');

    descriptionTab.addEventListener('click', function () {
        descriptionTab.classList.add('active');
        reviewsTab.classList.remove('active');
        descriptionContainer.classList.add('active');
        reviewsContainer.classList.remove('active');
    });

    reviewsTab.addEventListener('click', function () {
        reviewsTab.classList.add('active');
        descriptionTab.classList.remove('active');
        reviewsContainer.classList.add('active');
        descriptionContainer.classList.remove('active');
    });

    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const reviewText = document.getElementById('user-review').value;

        // Create a new review element
        const newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `
            <div class="review">
                <p>${reviewText}</p>
            </div>
        `;

        // Add the new review to the reviews list
        if (reviewsList.children[0] && reviewsList.children[0].tagName === 'P') {
            reviewsList.innerHTML = ''; // Remove "no reviews" text if it's there
        }
        reviewsList.appendChild(newReview);

        // Clear the form
        reviewForm.reset();
    });
});
