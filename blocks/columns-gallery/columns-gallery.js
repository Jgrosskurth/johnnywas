export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  if (cols.length) {
    block.classList.add(`columns-gallery-${cols.length}-cols`);
  }
  cols.forEach((col) => {
    const pic = col.querySelector('picture');
    if (pic) {
      col.classList.add('columns-gallery-img-col');
    }
  });
}
