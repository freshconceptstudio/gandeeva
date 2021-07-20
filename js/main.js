window.addEventListener('load', () => {
  var element = document. getElementsByClassName('background')[0];
  element. classList. add('initial');

  close = document.getElementsByClassName('close')[0];
  close.onclick = function(){closeModal()};
})


function closeModal() {
  var element = document. getElementsByClassName('overlay')[0];
  element.classList.remove('active');
}
