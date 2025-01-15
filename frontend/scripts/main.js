const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
      const header = tab.querySelector('.tab-header');
      header.addEventListener('click', () => {
        const content = tab.querySelector('.tab-content');
        const isActive = header.classList.contains('active');

        // Close all tabs
        tabs.forEach(t => {
          t.querySelector('.tab-header').classList.remove('active');
          t.querySelector('.tab-content').style.display = 'none';
        });

        // Toggle current tab
        if (!isActive) {
          header.classList.add('active');
          content.style.display = 'block';
        }
      });
    });