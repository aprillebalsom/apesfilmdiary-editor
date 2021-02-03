$(function() {

  let x = 0;

  // array with 3 doodles in it
  const stickers = ['img.doodle#stars', 'img.doodle#rainbow', 'img.doodle#paint'];

  // when a user clicks on  "vintage" button, grain filter will apply
  $('#filter-1').on('click', function(){
    $('.grain').toggle();
  });

  // when a user clicks on "double exposure" button, double exposure filter will apply
  $('#filter-2').on('click', function(){
    $('.double-exp').toggle();
  });

  // when a user clicks on "light leak" button, light leak filter will apply
  $('#filter-3').on('click', function(){
    $('.light-leak').toggle();
  });

  // when a user clicks on "doodles" button, a doodle will appear
  // for each additional click, a new doodle will appear
  // once all 3 doodles have been applied, a 4th click will remove all doodles
    $('#add-doodle').on('click', function(){

      if (x < 3){
        $(stickers[x]).toggle();
        x = x + 1;} 
      else {
        x = 0;
        $(stickers[0]).toggle();
        $(stickers[1]).toggle();
        $(stickers[2]).toggle();
      }

    });

  // when a user clicks on "reset" button, removes all filters and doodles by reloading the page
  $('#no-filter').on('click', function(){
    location.reload();
  });

  // allows doodles to be moved by user within image
  $('.doodle').draggable({
    containment: $('.main-img')
  });

  // take in user's information (name) and adds it to the photo
  // text can also be moved by user within image when clicked upon
  $('form').on('submit', function(event){
    event.preventDefault(); 

    const usersName = $('#add-name').val();
    const output = $('#user-name').text(`${usersName}`);

    if(usersName !== ' '){
      $('#add-name').val(' ')
      };

    output.draggable({
      containment: $('.main-img')
    });

  });

});