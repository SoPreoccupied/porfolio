//Change all of this for my portfolio

// - When the user clicks on the gray button, make the background gray and font white

$("#grayButton").click(function(){
    $("body").css("background", "gray");
    $("body").css("color", "white");
  });


// - When the user clicks on the white button, make the background white and font black
$("#whiteButton").click(function(){
    $("body").css("background", "white")
    $("body").css("color", "black"); 
});

$(".socials li a i").on("mouseover", (event) => {
    $(event.target).addClass("fa-bounce");
});

$(".socials li a i").on("mouseout", (event) => {
    $(event.target).removeClass("fa-bounce");
});

// html

// <ul id="switcher">
// <li id="grayButton"></li>
// <li id="whiteButton"></li>
// </ul>




// css

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
  
//   #switcher {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//   }
//   #switcher li {
//     float: left;
//     width: 30px;
//     height: 30px;
//     margin: 0 15px 15px 0;
//     border-radius: 30px;
//     border: 3px solid black;
//   }
  
//   #grayButton {
//     background: gray;
//   }
//   #whiteButton {
//     background: white;
//   }