/* eslint-disable */
/* global WebImporter */

export default function parse(element, { document }) {
  const link = element.querySelector('a[href]');
  const img = element.querySelector('img');
  const cells = [];

  if (img && link) {
    const anchor = document.createElement('a');
    anchor.href = link.href;
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.alt || '';
    anchor.appendChild(image);
    cells.push([anchor]);
  } else if (img) {
    cells.push([img]);
  }

  const block = WebImporter.Blocks.createBlock(document, { name: 'hero-banner', cells });
  element.replaceWith(block);
}
