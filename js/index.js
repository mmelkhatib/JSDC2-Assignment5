
//Model
var count= 100;

$(document).ready(function() {

// View
function renderCount() {

// Grab the template script
  var counterTemplate = $("#counter-template").html();
  var theTemplate = Handlebars.compile(counterTemplate);
  var countVar = theTemplate({
    count: count,
    high: count > 100,
    low: count < 0
  });
  $('#counts').html(countVar);
};

$('#plus').on('click', increment);
$('#minus').on('click', decrement);
$('#zero').on('click', zero);

function increment() {
  count++;
  renderCount();
}

function decrement() {
  count -= 2;
  renderCount();
}

function zero() {
  count = 0;
  renderCount();
}

renderCount();
});
