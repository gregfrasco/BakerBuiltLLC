$().ready(function ($) {
  window.onhashchange = update;
  update();
});

function update() {
  var category = window.location.toString().split('#')[1];
  switch (category) {
    case 'HomeExteriors':
      $('#HomeExteriors').show();
      $('#HomeInteriors').hide();
      $('#DocksandBoatHouses').hide();
      $('#Garages').hide();
      $('#Landscaping').hide();
      $('#PoleBarns').hide();
      break;
    case 'HomeInteriors':
      $('#HomeExteriors').hide();
      $('#HomeInteriors').show();
      $('#DocksandBoatHouses').hide();
      $('#Garages').hide();
      $('#Landscaping').hide();
      $('#PoleBarns').hide();
      break;
    default:

  }
}

function tabs(category){
  $('li')


}
