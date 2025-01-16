document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    // Check if image already exists
    if (!tab.querySelector('.tab-image')) {
      const img = document.createElement('img');
      img.src = '../assets/main2.jpg'; // your image path
      img.classList.add('tab-image');
      
      const line = document.createElement('hr');
      line.classList.add('tab-line');

      // Append elements
      tab.appendChild(img);
      tab.appendChild(line);

      // Trigger a roll-in animation
      img.style.animation = 'rollIn 0.5s forwards';
    }
  });
});