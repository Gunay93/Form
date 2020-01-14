$(document).ready(function(){
  var firstName = $('#firstName').text();
  var lastName = $('#lastName').text();
  var intials = $('#firstName').text().charAt(0) + $('#lastName').text().charAt(0);
  var profileImage = $('#profileImage').text(intials);
});

$('.dropdownCustom').click(function(event) {
  $(this).children('.dropdownMenu').toggleClass('dropActive');
  $('.arrow-down').toggleClass('rotateDrop');
});
$('.default').each(function(index, el) {
  $(this).html($(this).next().children('.dropdown-wrap').children('.dropdownItem').first().html())
});
$('.dropdown-wrap .dropdownItem').click(function(event) {
  $(this).parent().parent().prev().html($(this).html());
  $('#receive').text($('.defaultOption').find('.currencyName').text());
});

// Validations
function validateNum()
{

    var input = document.forms["myForm1"]["TransferAmount"].value;
    var alert = document.getElementById("usdAmountalert");
    var submit = document.getElementsByClassName('submit')[0];
  if (isNaN(input)) 
  {
  	var message = "Must input numbers";
    alert.innerHTML = message;
    alert.classList.remove("alertDisable");
    alert.classList.add("alertActive");
    submit.classList.remove("amountActive");
    submit.classList.add("amountDisable");
    submit.setAttribute('disabled',true);
    return false;
  }
    if (input=="") 
  {
    alert.innerHTML = "";
    alert.classList.remove("alertActive");
    alert.classList.add("alertDisable");
    submit.classList.remove("amountActive");
    submit.classList.add("amountDisable");
    submit.setAttribute("disabled",true);
  }
  else
  {
    alert.innerHTML = "";
    alert.classList.remove("alertActive");
    alert.classList.add("alertDisable");
    submit.classList.remove("amountDisable");
    submit.classList.add("amountActive");
    submit.removeAttribute("disabled");
  }
}
function validateChar()
{

    var input = document.forms["myForm2"]["WithDrawTo"].value;
    var alert = document.getElementById("withdrawalert");
    var submit = document.getElementsByClassName('submit')[1];
    var letters = /^[0-9a-zA-Z]+$/;
  if (input.match(letters))
  {
    alert.innerHTML = "";
    alert.classList.remove("alertActive");
    alert.classList.add("alertDisable");
    submit.classList.remove("amountDisable");
    submit.classList.add("amountActive");
    submit.removeAttribute("disabled");
    return false;
  }
    if (input=="") 
  {
    alert.innerHTML = "";
    alert.classList.remove("alertActive");
    alert.classList.add("alertDisable");
    submit.classList.remove("amountActive");
    submit.classList.add("amountDisable");
    submit.setAttribute("disabled",true);
  }
  else
  {
    var message = "Must input numbers and latin characters";
    alert.innerHTML = message;
    alert.classList.remove("alertDisable");
    alert.classList.add("alertActive");
    submit.classList.remove("amountActive");
    submit.classList.add("amountDisable");
    submit.setAttribute('disabled',true);
  }
}
function calculateFee(){
  var input = document.forms["myForm2"]["yourReceive"];
  var input2 = document.forms["myForm2"]["transferAmount"].value;
  var fee = document.getElementsByClassName('fee')[0];
  input.value = input2*0.03;
  fee.classList.add('feeActive');
  if (input2==""){
    fee.classList.remove('feeActive');
  }
}



// Send Form via Ajax
window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();
    const FD = new FormData( form );
    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
    } );
    XHR.addEventListener( "error", function( event ) {
      alert( 'Not sent' );
    } );
    XHR.open( "POST", "http://httpbin.org/post" );
    XHR.send( FD );
  }
  let form = document.getElementById( "myForm1" );
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();
    sendData();
  } );
} );

window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();
    const FD = new FormData( form );
    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
    } );
    XHR.addEventListener( "error", function( event ) {
      alert( 'Not sent' );
    } );
    XHR.open( "POST", "http://httpbin.org/post" );
    XHR.send( FD );
  }
  let form = document.getElementById( "myForm2" );
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();
    sendData();
  } );
} );