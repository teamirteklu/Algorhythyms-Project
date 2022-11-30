const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16e36212f8msh7435d930e8ebfa3p10cd71jsn108eca6b3b92",
    "X-RapidAPI-Host": "lyrics-plus.p.rapidapi.com",
  },
};

var websiteUrl = "https://musicbrainz.org/ws/2/artist/?";
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
      LyricDisplay.setAttribute("style", "white-space: pre-wrap;");
      var textContent = document.createTextNode(lyricResult);
      LyricDisplay.appendChild(textContent);
      parentDiv.insertBefore(LyricDisplay, recommendationTable);

      if (response.lyrics === undefined) {
        LyricDisplay.innerHTML = "Sorry, lyrics not found. Try another search.";
      }
    })

    .catch((err) => console.error(err));
}
submitButton.addEventListener("click", getLyrics);

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

function getArtists() {
  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artist = document.getElementById("inputArtist5").value;

  let artistUrl = `https://v1.nocodeapi.com/tteklu/spotify/syYpWhZYhhKjueQQ/search?q=${artist}&type=artist`;

  fetch(artistUrl, requestOptions)
    .then((response) => response.json())

    .then((result) => {
      console.log(result);
      var artists = result.artists;
      let genresElement = document.getElementsByClassName("genreOne");
      let parentElement = document.getElementsByClassName("artistId");
      console.log(parentElement);

      for (let i = 0; i < artists.items[0].genres.length; i++) {
        genresElement[i].innerHTML = `${artists.items[0].genres[i]}`;
        console.log(genresElement);
      }
    })
    .catch((error) => console.log("error", error));
}
submitButton.addEventListener("click", getArtists);

function getAlbums() {
  let artist = document.getElementById("inputArtist5").value;

  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/tteklu/spotify/syYpWhZYhhKjueQQ/search?q=${artist}&type=album`;

  fetch(artistUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      var albums = result.albums;
      console.log(albums);
      let albumCoverElement = document.getElementsByClassName("albumCover");
      let parentElement = document.getElementsByClassName("albumOne");
      console.log(parentElement);

      for (let i = 0; i < parentElement.length; i++) {
        parentElement[i].innerHTML = `${albums.items[i].name}`;
      }

      for (let i = 0; i < 3; i++) {
        let albumImage = document.createElement("img");
        albumImage.setAttribute("src", albums.items[i].images[1].url);
        albumCoverElement[i].appendChild(albumImage);
        console.log(albums.items[1]);
      }
    })
    .catch((error) => console.log("error", error));
}

submitButton.addEventListener("click", getAlbums);

function getTracks() {
  let artist = document.getElementById("inputArtist5").value;
  console.log(artist);

  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/tteklu/spotify/syYpWhZYhhKjueQQ/search?q=${artist}&type=track`;

  fetch(artistUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      var tracks = result.tracks;

      let parentElement = document.getElementsByClassName("trackOne");
      console.log(parentElement);

      for (let i = 0; i < parentElement.length; i++) {
        parentElement[i].innerHTML = `${tracks.items[i].name}`;
        console.log(parentElement);
      }
    })
    .catch((error) => console.log("error", error));

  //     if (albumImage.src) {
  //       albumImage.src.innerHTML = " ";
  //     }
}

submitButton.addEventListener("click", getTracks);
