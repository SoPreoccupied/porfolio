//Update theme changer from lab to project
//darkMode
$("#darkButton").click(function(){
    // $("body").css(background-image url("assets/noita-digital-QZX8jbK1xEw-unsplash\ \(1\).jpg"));
    $("body").css("color", "white");
  });

//lightMode
$("#lightButton").click(function(){
    $("body").css("background", "white")
    $("body").css("color", "black"); 
});

// css for theme changer

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



//Social Functions for Desktop
$(".socials li a i").on("mouseover", (event) => {
  $(event.target).addClass("fa-bounce");
});
$(".socials li a i").on("mouseout", (event) => {
  $(event.target).removeClass("fa-bounce");
});
