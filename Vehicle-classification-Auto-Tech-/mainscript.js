function filterBrands() {
  const input = document.getElementById('brandSearch');
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll('.brand-card');

  cards.forEach(card => {
    const brandName = card.getAttribute('data-name').toLowerCase();
    if (brandName.includes(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
