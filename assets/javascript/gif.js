// Setting the topics for the gifs. In this case it is animals. 
var topics = [
    "Dog",
    "Wolf",
    "Cat",
    "Lion",
    "Tiger",
    "Bull",
    "Horse",
    "Elephant",
    "Hawk"
]

// On the browser loading the funtion will be run in order to put all of the animals listed above into button form.
$(document).ready(function addButtons(){

  // I had to add the .empty() because the buttons would show up twice when it was not coded in. 
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
       
        var addThis = $("<button>");
        addThis.attr("id", "animals");

        addThis.text(topics[i]);
        addThis.attr("info", topics[i]);
        $("#buttons").append(addThis);
        
        
    }
});

// This is the funtion for what happens when the buttons are clicked. The gifs appearing on the page and the rating of each gif appearing above them. I needed to create a a div and img tag for where the pictures and images would go, and created a spot where the ratings would go. 

$("#buttons").on("click", "#animals", function() {
    var chosen = $(this).attr("info");

  var queryURL = " https://api.giphy.com/v1/gifs/search?q=" + 
  chosen + "&api_key=38Wh1DLuvY8n8hXhCoGJsfN3XmnpJGBy&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET"
  })
   
    .then(function(response) {
      
      var pics = response.data;
      var picsHere = $("<div>")

      
      for (var i = 0; i < pics.length; i++) {

        var picsHere = $("<div>");
        var text = $("<p>").text("Gif Rated: " + pics[i].rating);
        var gifPic = $("<img>");
      
        gifPic.attr("src", pics[i].images.fixed_height.url);

    // This will allow the gifs and ratings to be posted onto the webpage. 
        picsHere.append(text);
        picsHere.append(gifPic);

        $("#gifsHere").prepend(picsHere);
      }
    });
});


// This is a function for what happens when the submit button is clicked on. I need to figure out how to add the new animal that is typed to the web page. Once the animal is typed, there should be a function (onclick) when the submit button is clicked which adds a button for the new word/animal and the gifs show up. 

$("submitAnimal").on("click", "#submit" ,function() {

});

