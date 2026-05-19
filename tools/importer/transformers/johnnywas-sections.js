/* eslint-disable */
/* global WebImporter */

const TransformHook = { beforeTransform: 'beforeTransform', afterTransform: 'afterTransform' };

export default function transform(hookName, element, payload) {
  if (hookName === TransformHook.afterTransform) {
    const { template } = payload || {};
    if (!template || !template.sections || template.sections.length < 2) return;

    const doc = element.ownerDocument || document;
    const sections = [...template.sections].reverse();

    sections.forEach((section, reverseIndex) => {
      const originalIndex = template.sections.length - 1 - reverseIndex;
      const sectionEl = element.querySelector(section.selector);
      if (!sectionEl) return;

      if (section.style) {
        const metadataBlock = WebImporter.Blocks.createBlock(doc, {
          name: 'Section Metadata',
          cells: { style: section.style },
        });
        sectionEl.after(metadataBlock);
      }

      if (originalIndex > 0) {
        const hr = doc.createElement('hr');
        sectionEl.before(hr);
      }
    });
  }
}
