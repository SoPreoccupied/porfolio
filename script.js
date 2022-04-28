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


//Update this theme changer from lab to project

//darkMode
// $("#darkButton").click(function(){
//     $("body").css(background-image url(""));
//     $("body").css("color", "white");
//   });

//lightMode
// $("#lightButton").click(function(){
//     $("body").css("background", "white")
//     $("body").css("color", "black"); 
// });

//CSS for theme changer

// body {
//     margin: 3em;
//     padding: 0;
//     font-family: sans-serif;
//     font-size: 18px;
//     line-height: 1.5;
//   }
  
//   h1 {
//     line-height: 1.25;
//     margin: 2em 0 0;
//   }
//   p {
//     margin: .5em 0;
//   }

//HTML for theme changer

{/* <ul id="switcher">
  <i class="fa-solid fa-lightbulb"></i>
    <li id="darkButton"></li>
    <li id="lightButton"><i class="fa-solid fa-sun"></i></li>
</ul> */}

