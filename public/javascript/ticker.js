var tickerSymbolEl = document.querySelector('#ticker-initial');
var tickerNameEl = document.querySelector('#ticker-name');
var tickerDescriptionEl = document.querySelector('#ticker-description');
var openPriceEl = document.querySelector('#open-price');
var closePriceEl = document.querySelector('#close-price');

function searchTicker(event) {
    event.preventDefault();

    var tickerSymbol = document.querySelector('input[name="ticker-symbol"]').value;
    console.log(tickerSymbol)
    if (tickerSymbol) {
        document.querySelector('#ticker-symbol').value = "";
        confirmTicker(tickerSymbol)
    } else {
        document.querySelector('#ticker-symbol').value = "";
    }
}

function confirmTicker(tickerSymbol) {
    var apiUrl = 'https://api.polygon.io/v3/reference/tickers/' + tickerSymbol + '?apiKey=RYoUuKEuqa_t8l87IMMbpLsrzFmBswGt';
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayTickerInfo(data);
                tickerPrice(tickerSymbol)
            })
        } else {
            alert('Invalid ticker symbol')
        }
    })
}

function displayTickerInfo(data) {
    tickerSymbolEl.textContent = "Ticker: " + data.results.ticker;
    tickerNameEl.textContent = "Name: " + data.results.name;
    tickerDescriptionEl.textContent = "Description: " + data.results.description;
}

function tickerPrice(tickerSymbol) {
    var apiUrl = 'https://api.polygon.io/v2/aggs/ticker/' + tickerSymbol + '/prev?adjusted=true&apiKey=RYoUuKEuqa_t8l87IMMbpLsrzFmBswGt';
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                openPriceEl.textContent = "Previous Open Price: " + data.results[0].o;
                closePriceEl.textContent = "Previous Close Price: " + data.results[0].c;
            })
        } else {
            alert('Invalid ticker symbol')
        }
    })
}

document.querySelector('.search-ticker').addEventListener('submit', searchTicker);