// Add smooth scrolling behavior


function scrollToMain() {
  const reviewsSection = document.getElementById('main');
  reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToAbout() {
const reviewsSection = document.getElementById('about');
reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToLore() {
const reviewsSection = document.getElementById('lore');
reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToFeatures() {
const reviewsSection = document.getElementById('features');
reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToExperts() {
const reviewsSection = document.getElementById('experts-container');
reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToReviews() {
const reviewsSection = document.getElementById('reviews');
reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToFooter() {
const reviewsSection = document.getElementById('footer');
reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function isPartiallyInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Check if element's bottom is below the top of viewport
  // AND element's top is above the bottom of viewport
  return (
      rect.bottom > 0 &&
      rect.top < windowHeight
  );
}

// Function to handle animation of text lines
function handleWhoSectionAnimation() {
  const whoSection = document.getElementById('who');
  const textLines = whoSection.querySelectorAll('.line-animation');
  let animationStarted = false;

  // Remove existing animation classes initially
  textLines.forEach(line => {
      line.classList.remove('animate');
  });


  const backToTop = document.getElementById('back-to-top');
        
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        };

  // Function to start animation
  function startAnimation() {
      if (!animationStarted && isPartiallyInViewport(whoSection)) {
          textLines.forEach((line, index) => {
              // Add animation class with delay
              setTimeout(() => {
                  line.classList.add('animate');
              }, index * 500); // 500ms delay between each line
          });
          animationStarted = true;
      }
  }

  // Add scroll event listener with throttling
  let ticking = false;
  window.addEventListener('scroll', () => {
      if (!ticking) {
          window.requestAnimationFrame(() => {
              startAnimation();
              ticking = false;
          });
          ticking = true;
      }
  });

  // Check initial position
  startAnimation();
}
window.addEventListener('scroll', () => {
  const wordLeft = document.querySelectorAll('.wordLeft');
  const wordRight = document.querySelectorAll('.wordRight');
  const section = document.getElementById('slova');
  
  // Get section positions
  const sectionRect = section.getBoundingClientRect();
  const scrollPercent = (window.scrollY - section.offsetTop) / (section.offsetHeight - window.innerHeight);
  
  // Calculate translation with increased speed
  const translateXLeft = 30 + (scrollPercent * 300); 
  const translateXRight = -30 + (-scrollPercent * 300);
  
  // Only animate when section is visible
  if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
    wordLeft.forEach(word => {
      word.style.transform = `translateX(${translateXLeft}%)`;
    });
    wordRight.forEach(word => {
      word.style.transform = `translateX(${translateXRight}%)`;
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {


  try {
    handleWhoSectionAnimation();
    console.log('Who section animation handler initialized');
} catch (error) {
    console.error('Error initializing who section animation:', error);
}


const header = document.querySelector('header');
    const floatingLogo = document.querySelector('.floating-logo');
    let headerHeight = header.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > headerHeight) {
            floatingLogo.classList.add('visible');
        } else {
            floatingLogo.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop;
    });

});

