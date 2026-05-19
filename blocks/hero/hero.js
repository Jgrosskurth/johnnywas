export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const row = rows[0];
  const cells = [...row.children];

  // Cell 0: image (picture element)
  const pictureCell = cells[0];
  const picture = pictureCell.querySelector('picture');

  // Cell 1: CTA link (optional)
  const ctaCell = cells[1];
  const link = ctaCell ? ctaCell.querySelector('a') : null;

  // Clear block content and rebuild
  block.textContent = '';

  // If there's a CTA link, wrap entire hero in the link for clickability
  if (link) {
    const wrapper = document.createElement('a');
    wrapper.href = link.href;
    wrapper.setAttribute('aria-label', link.textContent || 'Shop now');
    wrapper.classList.add('hero-link');
    if (picture) wrapper.appendChild(picture);
    block.appendChild(wrapper);
  } else if (picture) {
    block.appendChild(picture);
  }
}
