/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {quote: "If you desire many things, many things will seem few",
  source: "Benjamin Franklin"
  },
  {quote: "I have nothing to offer but blood, toil, tears, and sweat",
  source: "Winston Churchill"
  },
  {quote: "The boisterous sea of liberty is never without a wave",
  source: "Thomas Jefferson"
  },
  {quote: "Kind words can be short and easy to speak, but their echoes are truly endless",
  source: "Mother Teresa"
  },
  {quote: "Labor to keep alive in your breast that little spark of celestial fire, called conscience",
  source: "George Washington"
  },
  {quote: "The time is always right to do what is right",
  source: "Martin Luther King, Jr."
  },
  {quote: "If you dream it, you can do it",
  source: "Walt Disney"
  },
  {quote: "The best things about the future is that it comes only one day at a time",
  source: "Abraham Lincoln"
  },
  {quote: "Winning is not a sometime thing, You don't do things right once in a while... you do them right all the time",
  source: "Vince Lombardi"
  },
  {quote: "The future belongs to those who believe in the beauty of their dreams",
  source: "Eleanor Roosevelt"
  },
  {quote: "A people that values its privledges above its principles soon loses both",
  source: "Dwight Eisenhower"
  },
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
  source: "Nelson Mandela"
  },
  {quote: "Imagination is more important than knowledge",
  source: "Albert Einstein"
  },
  {quote: "So we beat on, boats against the current, borne back ceaselessly into the past",
  source: "F. Scott Fitzgerald",
  citation: "The Great Gatsby",
  year: "1925"
  },
  {quote: "Happiness is when what you think, what you say, and what you do are in harmony",
  source: "Mahatma Gandhi"
  },
  {quote: "To be blind, but worse is to have eyes and not see",
  source: "Helen Keller"
  }
];

/***
 * `getRandomQuote` function
 * The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.
***/

function getRandomQuote() {

  //create a variable (num) to store a random number ranging from zero to the index of the last item in the quotes array

  let num = Math.random() * (0, (quotes.length - 1)) - 0;
  num = Math.floor(num);

  //the function should return a random quote object using the random number variable above and bracket notation on the quotes array
  return quotes[num];

}

/***
 * `printQuote` function
 * The app should display a new quote each time the user clicks the "Show another quote" button using a printQuote function.
***/

function printQuote() {

  //create a variable to store a random quote object from the getRandomQuote() function.
  let randomQuoteObject = getRandomQuote();

  //Create another variable to store the HTML string. Set it equal to a string containing two <p> elements
  let quote = `<p class="quote">${randomQuoteObject.quote}</p><p class="source"> ${randomQuoteObject.source}`

  //If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.

  if ( randomQuoteObject.citation ) {
    quote += `<span class="citation"> ${randomQuoteObject.citation} </span>`
  }

  //If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string.

  if ( randomQuoteObject.year ) {
    quote += `<span class="year"> ${randomQuoteObject.year} </span>`
  }

  quote += `</p>`

  console.log(quote)

}

console.log(printQuote());


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);