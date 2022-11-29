const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16e36212f8msh7435d930e8ebfa3p10cd71jsn108eca6b3b92",
    "X-RapidAPI-Host": "lyrics-plus.p.rapidapi.com",
  },
};
var tempUrl = "https://musicbrainz.org/ws/2/artits/?query=davidbowie";
// https://musicbrainz.org/ws/2/release/?query=release=iceonfire&fmt=json
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
    })

    .then((response) => {
      let arrayOne = [];
      // let artist = document.getElementById("inputArtist5").value;
      arrayOne.push(response.artists.items[0].name);
      console.log(response.artists.items[0].name);

      for (let i = 0; i < arrayOne.length; i++) {
        let parentElement = document.getElementById("artistId");
        parentElement.innerHTML = `<td id="artistId">${artist.items[i].name}</td>`;
        console.log(parentElement);
      }
      // let makeElement = (url) => {
      //   // make new table row and
      //   let thisElement = document.getElementById
      //   thisElement.textContent(url)
      // }
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

function getArtits() {
  let artist = document.getElementById("inputArtist5").value;
  // if (artist === artist) {
  //   Element.innerHTML=
  //   ` <tr>
  //   <th scope="row" id="albumCover">${albums.items[0, 1, 2].images[1]}</th>
  //   <td>${tracks.items[0, 1, 2].name}</td>
  //   <td>${albums.items[0, 1, 2].name}</td>
  //   <td>${artists.items[0].name}</td>
  //   <td>${artists.items[0, 1, 2].genres}</td>
  //   </tr>
  //   `
  // }
  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/jpick23/spotify/EGJDVuLUpbohxGCi/search?q=${artist}&type=artist`;

  fetch(artistUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

submitButton.addEventListener("click", getArtits);
// /*
function getAlbums() {
  let artist = document.getElementById("inputArtist5").value;
  // if (artist === artist) {
  // Element.innerHTML=
  // ` <tr>
  // <th scope="row" id="albumCover">${albums.items[0, 1, 2].images[1]}</th>
  // <td>${tracks.items[0, 1, 2].name}</td>
  // <td>${albums.items[0, 1, 2].name}</td>
  // <td>${artists.items[0].name}</td>
  // <td>${artists.items[0, 1, 2].genres}</td>
  // </tr>
  // `
  // }
  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/jpick23/spotify/EGJDVuLUpbohxGCi/search?q=${artist}&type=album`;

  fetch(artistUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

submitButton.addEventListener("click", getAlbums);
// */
function getTracks() {
  let artist = document.getElementById("inputArtist5").value;
  console.log(artist);
  // let albums = document.getElementById("albumCover");
  // if (artist === artist) {
  // Element.innerHTML=
  // ` <tr>
  // <th scope="row" id="albumCover">${albums.items[0].images[1]}</th>
  // <td>${tracks.items[0, 1, 2].name}</td>
  // <td>${albums.items[0, 1, 2].name}</td>
  // <td>${artists.items[0].name}</td>
  // <td>${artists.items[0, 1, 2].genres}</td>
  // </tr>
  // `

  // }
  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/jpick23/spotify/EGJDVuLUpbohxGCi/search?q=${artist}&type=track`;

  fetch(artistUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

submitButton.addEventListener("click", getTracks);
