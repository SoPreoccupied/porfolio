//Social Functions for Desktop
$(".socials li a i").on("mouseover", (event) => {
  $(event.target).addClass("fa-bounce");
});
$(".socials li a i").on("mouseout", (event) => {
  $(event.target).removeClass("fa-bounce");
});

//Carousel Stop When Hover
$('.carousel').carousel("hover")



//Finish theme changer in a future version of this project 
//Use font awesome light bulb and make it a toggle button placed center nav