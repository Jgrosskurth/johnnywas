export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    const imageCell = cells[0];
    const linkCell = cells[1];

    // Make the entire card clickable by wrapping image in link
    const link = linkCell?.querySelector('a');
    if (link && imageCell) {
      const picture = imageCell.querySelector('picture');
      if (picture) {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.setAttribute('aria-label', link.textContent.trim() || 'View collection');
        anchor.style.display = 'block';
        anchor.style.lineHeight = '0';
        picture.parentNode.insertBefore(anchor, picture);
        anchor.appendChild(picture);
      }
    }
  });
}
