/**
 * Created by concisv on 25.12.2016.
 */

let elem = $(".clps");
if(elem) {
  let message = 'Свернуть';
  let messageDefault = '';
  elem.on("click", function () {
    let messageTmp = this.innerText;
    this.innerText = message;
    message = messageTmp;
  });
}

// $('.clps').on('click', function () {
//   let message = 'Свернуть текст';
//   let messageTmp = $('.clps').text();
//   $('.clps').text(message);
//   message = messageTmp;
// })


let modalWindow = $('#myModal');

$('#sendRequestBtn').on('click', function () {
  modalWindow.modal('hide').on('hidden.bs.modal', function (e) {
    $('#thankYouWindow').modal('show');
  });
});

$('#sendRequestPortfolioBtn').on('click', function () {
  $('#portfolioCard').modal('hide').on('hidden.bs.modal', function (e) {
   // $('#thankYouWindow').modal('show');
  });
});

// $('#sendRequestPortfolioBtn').on('click', function () {
//   $('#portfolioCard').modal('hide').on('hidden.bs.modal', function (e) {
//     $('#thankYouWindow').modal('show');
//   });
// });


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


//cities selector in upper right corner
//
$('#cities_select_menu li').on('click', function () {
  let bufferValue =  $('#currentCity').text().substr(7);
  $('#currentCity').html('<i class="material-icons">near_me</i>' + this.innerText);
  this.innerHTML = '<a class="nav-link" href="#">' + bufferValue +'</a>';
});


$( function(){// Get the modal
    var modal = document.getElementById('my-Modal');

    // Get the button that opens the modal


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    // $('.bigRedSlider img').on('click', function() {
    //     modal.style.display = "block";
    //     console.log('DBG: ' + JSON.stringify($('this')));
    //     $('.my-modal-content img').attr('src', this.src)
    //     $('body').css('overflow', 'hidden');
    // })

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        $('body').css('overflow', 'visible');
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $('body').css('overflow', 'visible');
        }

    }
});