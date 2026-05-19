/* eslint-disable */
/* global WebImporter */

export default function parse(element, { document }) {
  const bgImage = element.querySelector('img');
  const heading = element.querySelector('.rich-text-background h2, .rich-text-background h1, h2, h1');
  const richTextBg = element.querySelector('.rich-text-background, .body-text');
  let description = null;

  if (richTextBg) {
    const paragraphs = richTextBg.querySelectorAll('p');
    for (const p of paragraphs) {
      const text = p.textContent.trim();
      if (text && !p.querySelector('a.link-banner-styling') && text !== '') {
        description = p;
        break;
      }
    }
  }

  const ctaLink = element.querySelector('a.link-banner-styling, a[class*="link-banner"], a[class*="cta"], a.button');
  const cells = [];

  if (bgImage) cells.push([bgImage]);
  if (heading) cells.push([heading]);
  if (description) cells.push([description]);
  if (ctaLink) cells.push([ctaLink]);

  const block = WebImporter.Blocks.createBlock(document, { name: 'hero-overlay', cells });
  element.replaceWith(block);
}
