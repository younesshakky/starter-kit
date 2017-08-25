document.onclick = function () {
  // alert('ouch!!')
  var oucher = document.querySelector('.oucher');
  var randomColor = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
  var oucherness = document.createElement('div')
  oucher.appendChild(oucherness)
  if( (oucher.querySelectorAll('div').length % 5) == 0 ) {
    // alert('')
    oucherness.innerText += 'stooop MADAFAKAH \n'
  }
  else {
    oucherness.innerText += 'Ouch!! \n'
  }
  oucherness.style.color = randomColor.toString();
}

function rand (max) {
  return Math.round( Math.random() * max )
}