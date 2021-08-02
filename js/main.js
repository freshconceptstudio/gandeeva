function openModal(e) {
  e.preventDefault();
  var modal = document.getElementsByClassName('overlay')[0];
  modal.classList.add("active");
}

function closeModal() {
  var element = document. getElementsByClassName('overlay')[0];
  element.classList.remove('active');
}

function openProfile(e, index) {
  e.preventDefault();
  var element = document.getElementsByClassName('leadership-profile')[0];
  element.classList.add('show');

  var profile_content = document.getElementsByClassName('profile-content')[index];
  profile_content.classList.add('active');
}

function closeProfile(e) {
  e.preventDefault();
  var element = document.getElementsByClassName('leadership-profile')[0];
  element.classList.remove('show');

  var profiles = document.querySelectorAll('.profile-content'), i;

  for (i = 0; i < profiles.length; ++i) {
    profiles[i].classList.remove('active');
  }
}
