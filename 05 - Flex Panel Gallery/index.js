const panels = document.querySelectorAll('.panel');

function toggleOpen(element) {
  element.classList.toggle('open');
}

function toggleActive(event ,element) {
  if(event.propertyName.includes('flex')){
    element.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', () => toggleOpen(panel)))
panels.forEach(panel => panel.addEventListener('transitionend', (event) => toggleActive(event, panel)))