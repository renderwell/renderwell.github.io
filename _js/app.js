
$(document).foundation();

$("#top-search-icon").on('click', function(event){
    event.preventDefault();
    $("#mobile-site-search").slideToggle(300);
});
