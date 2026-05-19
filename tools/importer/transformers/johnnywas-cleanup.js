/* eslint-disable */
/* global WebImporter */

const TransformHook = { beforeTransform: 'beforeTransform', afterTransform: 'afterTransform' };

export default function transform(hookName, element) {
  if (hookName === TransformHook.beforeTransform) {
    WebImporter.DOMUtils.remove(element, [
      '#onetrust-consent-sdk',
      '.carousel-stripe-banner-container',
      '.experience-commerce_assets-mobileVisualNavigation',
    ]);
  }

  if (hookName === TransformHook.afterTransform) {
    WebImporter.DOMUtils.remove(element, [
      'header',
      'footer',
      '.js-back-to-top',
      '.experience-commerce_assets-spacer',
      'a.skip',
      'input.site-prefs',
      'iframe',
      'link',
      'noscript',
    ]);
  }
}
