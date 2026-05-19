/* eslint-disable */
/* global WebImporter */

export default function parse(element, { document }) {
  const tiles = element.querySelectorAll('.side-by-side-tile');
  const cells = [];
  const row = [];

  tiles.forEach((tile) => {
    const img = tile.querySelector('img.img-fluid, img.js-image-banner, img');
    if (img) {
      row.push(img);
    }
  });

  if (row.length === 0) {
    const allImages = element.querySelectorAll('img');
    allImages.forEach((img) => {
      row.push(img);
    });
  }

  if (row.length >= 2) {
    cells.push([row[0], row[1]]);
  } else if (row.length === 1) {
    cells.push([row[0]]);
  }

  const block = WebImporter.Blocks.createBlock(document, { name: 'columns-gallery', cells });
  element.replaceWith(block);
}
