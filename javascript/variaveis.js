const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log ('evento previnido');
});
