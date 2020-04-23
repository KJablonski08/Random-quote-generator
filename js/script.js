/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

let quotes = [
  {quote: "If you desire many things, many things will seem few",
  source: "Benjamin Franklin",
  tag: "Political Leader"
  },
  {quote: "I have nothing to offer but blood, toil, tears, and sweat",
  source: "Winston Churchill",
  tag: "Political Leader"
  },
  {quote: "The boisterous sea of liberty is never without a wave",
  source: "Thomas Jefferson",
  tag: "Political Leader"
  },
  {quote: "Kind words can be short and easy to speak, but their echoes are truly endless",
  source: "Mother Teresa",
  tag: "Spiritual Leader"
  },
  {quote: "Labor to keep alive in your breast that little spark of celestial fire, called conscience",
  source: "George Washington",
  tag: "Political Leader"
  },
  {quote: "The time is always right to do what is right",
  source: "Martin Luther King, Jr.",
  tag: "Political Leader"
  },
  {quote: "If you dream it, you can do it",
  source: "Walt Disney",
  tag: "Business Leader"
  },
  {quote: "The best things about the future is that it comes only one day at a time",
  source: "Abraham Lincoln",
  tag: "Political Leader"
  },
  {quote: "Winning is not a sometime thing, You don't do things right once in a while... you do them right all the time",
  source: "Vince Lombardi",
  tag: "Sports Leader"
  },
  {quote: "The future belongs to those who believe in the beauty of their dreams",
  source: "Eleanor Roosevelt",
  tag: "Political Leader"
  },
  {quote: "A people that values its privledges above its principles soon loses both",
  source: "Dwight Eisenhower",
  tag: "Political Leader"
  },
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
  source: "Nelson Mandela",
  tag: "Political Leader"
  },
  {quote: "Imagination is more important than knowledge",
  source: "Albert Einstein",
  tag: "Intellectual Leader"
  },
  {quote: "So we beat on, boats against the current, borne back ceaselessly into the past",
  source: "F. Scott Fitzgerald",
  citation: "The Great Gatsby",
  year: "1925"
  },
  {quote: "Happiness is when what you think, what you say, and what you do are in harmony",
  source: "Mahatma Gandhi",
  tag: "Political Leader"
  },
  {quote: "To be blind, but worse is to have eyes and not see",
  source: "Helen Keller",
  tag: "Political Leader"
  }
];

/***
 * The getRandomQuote function creates a random number, and use that random number to return a random quote object from the quotes array.
***/

function getRandomQuote() {
  //stores a random number ranging from zero to the index of the last item in the quotes array
  let num = Math.random() * (0, (quotes.length - 1)) - 0;
  num = Math.floor(num);

  //returns a random quote object using the num variable above
  return quotes[num];
}

/***
 * the pringQuote function displays a new quote each time the user clicks the "Show another quote" button 
***/

function printQuote() {
  //stores a random quote object from the getRandomQuote() function.
  let randomQuoteObject = getRandomQuote();

  //stores the HTML string
  //Does not include the second closing </p> tag - added at the end (line 112)
  let quote = `<p class="quote">${randomQuoteObject.quote}</p><p class="source"> ${randomQuoteObject.source}`

  //If the randomQuoteObject has a citation property, concatenates a <span> element with the class "citation" to the HTML string.
  if ( randomQuoteObject.citation ) {
    quote += `<span class="citation">${randomQuoteObject.citation}</span>`
  }

  //If the randomQuoteObject has a year property, concatenates a <span> element with the class "year" to the HTML string.
  if ( randomQuoteObject.year ) {
    quote += `<span class="year">${randomQuoteObject.year}</span>`
  }

  //If the randomQuoteObject has a tag property, concatenates a <span> element with the class "tag" to the HTML string.
  if ( randomQuoteObject.tag ) {
    quote += `<span class="year">${randomQuoteObject.tag}</span>`
  }

  //complete the string by concatenating a closing </p> tag to the HTML string
  quote += `</p>`


  //returns the full HTML string displaying a random quote.
  document.getElementById('quote-box').innerHTML = quote; 
}

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * the getRandomBackgroundColor function displays a new background color each time the user clicks the "Show another quote" button 
***/

function getRandomBackgroundColor() {
  //creates a random number ranging from zero to 255 (numbers for rgb)
  function randomNum() {
    num = Math.random() * (0, 255) - 0;
    num = Math.floor(num);
    return num
  }

  //creates a variable for red, green, blue 
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();

  //returns the full HTML string displaying a random color
  document.querySelector('body').style.backgroundColor =  `rgb(${r},${g},${b})`;

}

//click event listener to generate random background color for body element on the print quote button
document.querySelector('body').addEventListener("click", getRandomBackgroundColor, false);


/***
 * The quote on the page automatically updates at regular intervals.
***/

//uses setInterval() method to print a new quote to the page at regular intervals,  every 15 seconds.

window.setInterval(printQuote, 15000);
window.setInterval(getRandomBackgroundColor, 15000);