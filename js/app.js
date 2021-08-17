const changeBtn = document.getElementById('change-btn');
const paymentBtn = document.getElementById('payment-btn');
const cancelBtn = document.getElementById('cancel-btn');


changeBtn.addEventListener( 'click', errorMsg );

paymentBtn.addEventListener( 'click', errorMsg );

cancelBtn.addEventListener( 'click', errorMsg );

function errorMsg() {
  alert("SORRY! Something went wrong!");
}