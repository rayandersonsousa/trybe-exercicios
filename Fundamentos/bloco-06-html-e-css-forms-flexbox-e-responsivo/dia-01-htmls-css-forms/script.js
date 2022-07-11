let form = document.querySelector('form');
form.addEventListener('submit', function(event){
  if (document.getElementById('flexCheckDefault').checked) {
    event.preventDefault();
  }
})