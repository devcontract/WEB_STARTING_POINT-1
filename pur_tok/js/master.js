///////////////////////
//input elements (labels)
//////////////////////

document.getElementById('tokprice').innerHTML = "1";

setInterval(function () {
  var input_value = document.getElementById('purchase_details_input').value;
var token_cal = input_value * 0.0431;
  document.getElementById('tokprice').innerHTML = input_value ;
}, 10);
