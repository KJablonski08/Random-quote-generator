// FETCH QUOTES FROM FREE QUOTES API - https://type.fit/api/quotes

let quotes;

const fetchQuotes = function () {
	axios
		.get('https://type.fit/api/quotes')
		.then((res) => {
			quotes = res.data;
			console.log(quotes);
		})
		.catch((err) => console.error(err));
};

fetchQuotes();

/**
 * getRandomQuote function
 * @return {string} A random quote from the quotes object
 */

function getRandomQuote() {
	let num = Math.random() * (0, quotes.length - 1) - 0;
	num = Math.floor(num);
	return quotes[num];
}

/**
 * pringQuote function
 * @return {string} A new random quote from the quotes object
 */

const printQuote = function () {
	let randomQuoteObject = getRandomQuote();
	console.log(randomQuoteObject);
	console.log(typeof randomQuoteObject.author);
	let quote = `<blockquote>${randomQuoteObject.text}`;
	if (randomQuoteObject.author != null) {
		quote += `<p class="source"> ${randomQuoteObject.author}</p>`;
	}

	//complete the string by concatenating a closing </p> tag to the HTML string
	quote += `</blockquote>`;

	//returns the full HTML string displaying a random quote.
	document.querySelector('.container').innerHTML = quote;
};

/***
 * click event listener for the print quote button
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);

/***
 * the getRandomBackgroundColor function displays a new background color each time the user clicks the "Show another quote" button
 ***/

function getRandomBackgroundColor() {
	//creates a random number ranging from zero to 255 (numbers for rgb)
	function randomNum() {
		num = Math.random() * (0, 255) - 0;
		num = Math.floor(num);
		return num;
	}

	//creates a variable for red, green, blue
	let r = randomNum();
	let g = randomNum();
	let b = randomNum();

	//returns the full HTML string displaying a random color
	document.querySelector('body').style.backgroundColor = `rgb(${r},${g},${b})`;
}

//click event listener to generate random background color for body element on the print quote button
document
	.querySelector('body')
	.addEventListener('click', getRandomBackgroundColor, false);

/***
 * The quote on the page automatically updates at regular intervals.
 ***/

//uses setInterval() method to print a new quote to the page at regular intervals,  every 15 seconds.

setInterval(function () {
	printQuote();
	getRandomBackgroundColor();
}, 15000);
