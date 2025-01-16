// Add smooth scrolling behavior
document.querySelector('.experts-scroll').addEventListener('wheel', (event) => {
    event.preventDefault();
    document.querySelector('.experts-scroll').scrollLeft += event.deltaY;
  });

  function scrollToReviews() {
    const reviewsSection = document.getElementById('reviews');
    reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}