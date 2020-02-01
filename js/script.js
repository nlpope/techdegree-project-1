var quotes = [
  {quote: "Time is money; Money is power; Power is pizza; Pizza is knowledge", source: "April Ludgate, Parks and Recreation"}, 
  {quote: "Life is what happens when you're busy  making other plans", source: "John Lennon", citation:"Beautiful Boy", year: 1980}, 
  {quote: "A man needs his rest", source: "Iroh, Avatar: The last Airbender"},
  {quote: "Don't start chasing applause and acclaim. That way lies madness", source: "Ron Swanson, Parks and Recreation"},
  {quote: "Horizons are dumb. Never broaden your horizons.", source: "April Ludgate, Parks and Recreation"},
]
//testing if all objects are being read
console.log(quotes);

// this function will print the final result
function print(message) {
  document.write(message);
}

//generates a random quote to feed to the function "printquote"
function getRandomQuote() {
  var num = Math.floor(Math.random() * (quotes.length));
  return quotes[num];
}

//building the quote to be printed using the random item fed to us through the above function
function printQuote() {
  var toPrint = getRandomQuote();
  var wisdomBuilder = '';
  
  wisdomBuilder += "<p class='quote'>" + toPrint.quote + "</p>" +
  " <p class='source'>" + toPrint.source
  if (toPrint.citation && toPrint.year){
    wisdomBuilder += "<span class='citation'>" + toPrint.citation + "</span>" +
    "<span class='year'>" + toPrint.year + "</span>";
  }
  wisdomBuilder += "</p>";
  
  document.getElementById('quote-box').innerHTML = wisdomBuilder;
  console.log(wisdomBuilder);
}

//event listener for "Show another quote" button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);