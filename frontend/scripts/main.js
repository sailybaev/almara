// Add smooth scrolling behavior
document.querySelector('.experts-scroll').addEventListener('wheel', (event) => {
  event.preventDefault();
  document.querySelector('.experts-scroll').scrollLeft += event.deltaY;
});

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