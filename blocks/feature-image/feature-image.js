export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const row = rows[0];
  const cells = [...row.children];

  // First cell has the image
  const picture = cells[0]?.querySelector('picture');

  // Second cell has the link text/href
  const link = cells[1]?.querySelector('a');

  // Clear block and rebuild
  block.textContent = '';

  const wrapper = document.createElement('div');

  if (picture) {
    wrapper.appendChild(picture);
  }

  // Make the entire image a clickable link
  if (link) {
    const overlay = document.createElement('a');
    overlay.href = link.href;
    overlay.className = 'feature-image-link';
    overlay.setAttribute('aria-label', link.textContent || 'View more');
    overlay.textContent = link.textContent || '';
    wrapper.appendChild(overlay);
  }

  block.appendChild(wrapper);
}
