export default function decorate(block) {
  const link = block.querySelector('a');
  const img = block.querySelector('img');
  if (link && img) {
    block.classList.add('has-link');
  }
  if (!img) {
    block.classList.add('no-image');
  }
}
