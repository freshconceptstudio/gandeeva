window.addEventListener('load', () => {
  var element = document. getElementsByClassName('background')[0];
  element. classList. add('initial');
  var color = document. getElementsByClassName('color')[0];
  color. classList. add('initial');
  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    // element. classList. add('step1');
    iterateWidth(element, 'step1', '1968', '10 Angstroms');
  }, 1000);
  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    // element. classList. add('step2');s
    // iterateWidth(element, 10, 30, '1975', '20 Angstroms');
    iterateWidth(element, 'step2', '1975', '20 Angstroms');
  }, 3500);
  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    // iterateWidth(element, 10, 30, '1990', '40 Angstroms');
    iterateWidth(element, 'step3', '1990', '40 Angstroms');
  }, 6000);
  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    // iterateWidth(element, 10, 30, '2000', '50 Angstroms');
    iterateWidth(element, 'step4', '2000', '50 Angstroms');
  }, 8500);
  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    // iterateWidth(element, 10, 30, '2005', '70 Angstroms');
    iterateWidth(element, 'step5', '2005', '70 Angstroms');
  }, 11000);

  setTimeout(function(){
    var element = document. getElementsByClassName('color')[0];
    // iterateWidth(element, 90, 100, '2021', '100 Angstroms');
    iterateWidth(element, 'step6', '2021', '100 Angstroms');
  }, 13500);
  // setTimeout(function(){
  //   var element = document. getElementsByClassName('color')[0];
  //   element. classList. add('half');
  // }, 1600);
  // setTimeout(function(){
  //   var element = document. getElementsByClassName('color')[0];
  //   element. classList. add('done');
  // }, 2000);
})

var i = 0;

function iterateWidth(element, class_name, year, text){

  element.classList.add(class_name);
  setTimeout(function() {
    document.getElementsByClassName('year')[0].innerText = year;
    document.getElementsByClassName('measurement')[0].innerText = text;
    if(class_name == 'step6'){ document.getElementsByClassName('gandeeva')[0].style.opacity = 1; }
  }, 2000)

  // setTimeout(function() {   //  call a 3s setTimeout when the loop is called
  //   element.style.width = i+"%";
  //   i++;                    //  increment the counter
  //   if (i <= end) {           //  if the counter < 10, call the loop function
  //     iterateWidth(element, i, end, year, text);             //  ..  again which will trigger another
  // //   } else {
  //     element.classList. add('step2')
  //     document.getElementsByClassName('year')[0].innerText = year;
  //     document.getElementsByClassName('measurement')[0].innerText = text;
  //   }                       //  ..  setTimeout()
  // }, 200)

}
