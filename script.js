const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16e36212f8msh7435d930e8ebfa3p10cd71jsn108eca6b3b92",
    "X-RapidAPI-Host": "lyrics-plus.p.rapidapi.com",
  },
};

var websiteUrl = "https://musicbrainz.org/ws/2/";
var requestUrl = "https://lyrics-plus.p.rapidapi.com/lyrics/";

var submitButton = document.querySelector("#submit");

var recommendationTable = document.getElementById("search-results-table");

function getLyrics() {
  event.preventDefault;

  var lyricSection = document.querySelector("#lyric-display");
  if (lyricSection) {
    lyricSection.innerHTML = " ";
  }
  let title = document.getElementById("inputTitle5").value;
  let artist = document.getElementById("inputArtist5").value;
  if (artist === "" || title === "") {
    alert("Both fields must be filled out");
  }
  console.log(title);
  console.log(artist);

  fetch(requestUrl + title + "/" + artist, options)
    .then((response) => response.json())

    .then((response) => {
      console.log(response.name, response.lyrics);

      var lyricResult = response.lyrics;
      var songName = response.name;

      var recommendationTable = document.getElementById("search-results-table");
      var parentDiv = recommendationTable.parentNode;

      var LyricDisplay = document.createElement("div");
      LyricDisplay.setAttribute("id", "lyric-display");
      document
        .getElementById("search-results")
        .setAttribute("style", "white-space: pre-wrap;");

      var textContent = document.createTextNode(lyricResult);
      LyricDisplay.appendChild(textContent);

      parentDiv.insertBefore(LyricDisplay, recommendationTable);
    })

    .catch((err) => console.error(err));
}

submitButton.addEventListbener("click", getLyrics);

const option = {
  method: "GET",
  headers: {
    "X-MusicBrainzAPI-Key": "xSnQ2rQ1yUozeTQdGNfy9rLexMAoEIIIzDeAaxsC",
    "X-MusicBrainzAPI-Host": "https://musicbrainz.org/ws/2/",
  },
};

function getArtits() {

}