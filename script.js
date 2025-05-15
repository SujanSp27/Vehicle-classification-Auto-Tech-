function filterBrands() {
    const input = document.getElementById('brandSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.brand-card');
  
    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(input) ? 'block' : 'none';
    });
  }
  