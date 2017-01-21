/**
 * Created by concisv on 25.12.2016.
 */

let elem = document.querySelector(".clps");
if(elem) {
  let message = 'Свернуть текст';
  elem.addEventListener("click", function () {
    let messageTmp = elem.innerText;
    elem.innerText = message;
    message = messageTmp;
  });
}


let modalWindow = $('#myModal');

$('#sendRequestBtn').on('click', function () {
  modalWindow.modal('hide').on('hidden.bs.modal', function (e) {
    $('#thankYouWindow').modal('show');
  });
});

$('#sendRequestPortfolioBtn').on('click', function () {
  $('#portfolioCard').modal('hide').on('hidden.bs.modal', function (e) {
    $('#thankYouWindow').modal('show');
  });
});


$('.picture_box > div').on('click', function () {
  $('#portfolioCard').modal('show');
});


if($('#portfolioCollapseBtn')) {
  let message = 'Свернуть';
  $('#portfolioCollapseBtn').on('click', function() {
    $('.collapse').collapse('toggle');
    let messageTmp = this.innerText;
    this.innerText = message;
    message = messageTmp;
  });
}

$('#cities_select_menu li').on('click', function () {
  console.log('DBG    inner text: ' + $('#currentCity').text().substr(7));
  let bufferValue =  $('#currentCity').text().substr(7);
  $('#currentCity').html('<i class="material-icons">near_me</i>' + this.innerText);
  this.innerHTML = '<a class="nav-link" href="#">' + bufferValue +'</a>';
})

