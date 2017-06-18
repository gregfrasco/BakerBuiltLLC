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

    case 'DocksandBoatHouses':
      $('#HomeExteriors').hide();
      $('#HomeInteriors').hide();
      $('#DocksandBoatHouses').show();
      $('#Garages').hide();
      $('#Landscaping').hide();
      $('#PoleBarns').hide();
      break;

    case 'Garages':
      $('#HomeExteriors').hide();
      $('#HomeInteriors').hide();
      $('#DocksandBoatHouses').hide();
      $('#Garages').show();
      $('#Landscaping').hide();
      $('#PoleBarns').hide();
      break;

    case 'Landscaping':
      $('#HomeExteriors').hide();
      $('#HomeInteriors').hide();
      $('#DocksandBoatHouses').hide();
      $('#Garages').hide();
      $('#Landscaping').show();
      $('#PoleBarns').hide();
      break;

    case 'PoleBarns':
      $('#HomeExteriors').hide();
      $('#HomeInteriors').hide();
      $('#DocksandBoatHouses').hide();
      $('#Garages').hide();
      $('#Landscaping').hide();
      $('#PoleBarns').show();
      break;


    default:
      $('#HomeExteriors').show();
      $('#HomeInteriors').show();
      $('#DocksandBoatHouses').show();
      $('#Garages').show();
      $('#Landscaping').show();
      $('#PoleBarns').show();
      break;

  }
  tabs(category);
}

function tabs(category){
  $('a').each((index, ele) => {
    if($(ele).attr('href') != '/portfolio') {
      $(ele).removeClass('is-active');
      if('#' + category == $(ele).attr('href')) {
        $(ele).addClass('is-active');
      }
    }
  });
}
