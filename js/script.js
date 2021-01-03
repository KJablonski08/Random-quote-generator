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

/***
 * The getRandomQuote function creates a random number, and use that random number to return a random quote object from the quotes array.
 ***/

function getRandomQuote() {
	//stores a random number ranging from zero to the index of the last item in the quotes array
	let num = Math.random() * (0, quotes.length - 1) - 0;
	num = Math.floor(num);

	//returns a random quote object using the num variable above
	return quotes[num];
}

/***
 * the pringQuote function displays a new quote each time the user clicks the "Show another quote" button
 ***/

const printQuote = async function () {
	//stores a random quote object from the getRandomQuote() function.
	let randomQuoteObject = getRandomQuote();

	//stores the HTML string
	//Does not include the second closing </p> tag - added at the end (line 112)
	let quote = `<p class="quote">${randomQuoteObject.text}</p><p class="source"> ${randomQuoteObject.author}`;

	//If the randomQuoteObject has a citation property, concatenates a <span> element with the class "citation" to the HTML string.
	if (randomQuoteObject.citation) {
		quote += `<span class="citation">${randomQuoteObject.citation}</span>`;
	}

	//If the randomQuoteObject has a year property, concatenates a <span> element with the class "year" to the HTML string.
	if (randomQuoteObject.year) {
		quote += `<span class="year">${randomQuoteObject.year}</span>`;
	}

	//If the randomQuoteObject has a tag property, concatenates a <span> element with the class "tag" to the HTML string.
	if (randomQuoteObject.tag) {
		quote += `<span class="year">${randomQuoteObject.tag}</span>`;
	}

	//complete the string by concatenating a closing </p> tag to the HTML string
	quote += `</p>`;

	//returns the full HTML string displaying a random quote.
	document.getElementById('quote-box').innerHTML = quote;
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
