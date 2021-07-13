window.addEventListener('load', () => {
  var element = document. getElementsByClassName('background')[0];
  element. classList. add('initial');
  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    element. classList. add('loaded');
  }, 1000);
  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    element. classList. add('half');
  }, 1600);
  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    element. classList. add('done');
  }, 2000);
})
