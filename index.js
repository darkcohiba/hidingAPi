console.log(IMDBAPIKEY)

fetch(`https://imdb-api.com/en/API/SearchMovie/${IMDBAPIKEY}/howimetyourmother`)
.then(response => response.json())
.then(data => console.log(data))