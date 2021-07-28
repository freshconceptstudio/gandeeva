window.addEventListener('load', () => {
  var element = document. getElementsByClassName('background')[0];
  element. classList. add('initial');

  close = document.getElementsByClassName('close')[0];
  close.onclick = function(){closeModal()};


  object.onclick = function(){myScript};
})


function closeModal() {
  var element = document. getElementsByClassName('overlay')[0];
  element.classList.remove('active');
}

function openProfile(e, index) {
  e.preventDefault();
  var element = document.getElementsByClassName('leadership-profile')[0];
  element.classList.add('show');

  var profile_content = document.getElementsByClassName('profile-content')[index];
  profile_content.classList.add('show');
}
