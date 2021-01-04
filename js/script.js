// FETCH QUOTES FROM FREE QUOTES API - https://type.fit/api/quotes

let quotes;

const fetchQuotes = function () {
	axios
		.get('https://type.fit/api/quotes')
		.then((res) => {
			quotes = res.data;
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
	let quote = `<blockquote>${randomQuoteObject.text}`;
	if (randomQuoteObject.author != null) {
		quote += `<p class="source"> ${randomQuoteObject.author}</p>`;
	}
	quote += `</blockquote>`;
	document.querySelector('.container').innerHTML = quote;
};

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);

/**
 * getRandomBackgroundColor function
 * @return {string} HTML string displaying a random color 'Red Green Blue'
 */

function getRandomBackgroundColor() {
	function randomNum() {
		num = Math.random() * (0, 255) - 0;
		num = Math.floor(num);
		return num;
	}

	let r = randomNum();
	let g = randomNum();
	let b = randomNum();

	document.querySelector('body').style.backgroundColor = `rgb(${r},${g},${b})`;
}

document
	.querySelector('body')
	.addEventListener('click', getRandomBackgroundColor, false);

/***
 * The quote on the page automatically updates at regular intervals (10seconds)
 ***/

setInterval(function () {
	printQuote();
	getRandomBackgroundColor();
}, 10000);
