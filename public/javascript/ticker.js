const axios = require('axios')

function searchTicker(event) {
    event.preventDefault();

    var tickerSymbol = document.querySelector('input[name="ticker"]').value.trim;

    if (tickerSymbol) {
        document.querySelector('#ticker-symbol').value = "";
        confirmTicker(tickerSymbol)
    } else {
        document.querySelector('#ticker-symbol').value = "";
    }
}

function confirmTicker(tickerSymbol) {
    axios({
        method: 'get',
        url: 'https://api.polygon.io/v3/reference/tickers/' + tickerSymbol + '?apiKey=RYoUuKEuqa_t8l87IMMbpLsrzFmBswGt',
    })
}

document.querySelector('.search-ticker').addEventListener('click', searchTicker);