const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16e36212f8msh7435d930e8ebfa3p10cd71jsn108eca6b3b92",
    "X-RapidAPI-Host": "lyrics-plus.p.rapidapi.com",
  },
};
var tempUrl = "https://musicbrainz.org/ws/2/artits/?query=davidbowie"
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
      var textContent = document.createTextNode(lyricResult);
      LyricDisplay.appendChild(textContent);

      parentDiv.insertBefore(LyricDisplay, recommendationTable);
    })

    .catch((err) => console.error(err));
}
submitButton.addEventListener("click", getLyrics);

// const option = {
//   method: "GET",
//   headers: {
//     "X-MusicBrainzAPI-Key": "xSnQ2rQ1yUozeTQdGNfy9rLexMAoEIIIzDeAaxsC",
//     "X-MusicBrainzAPI-Host": "https://musicbrainz.org/ws/2/",
//   },
// };

// function getArtits(artistName) {
  // let artistUrl = `https://musicbrainz.org/ws/2/release/?query=artist=${artistName}&fmt=json`
  // let artistName = document.getElementById("inputArtist5").value;
 
//   fetch(artistUrl)
//   .then(response => response.json())

  // .then(apiResults => {
    // console.log(apiResults);
  // })

// }
// let artistName = document.getElementById("inputArtist5").value;
// submitButton.addEventListener('click', getArtits(artistName));
// console.log(artistName);

// https://musicbrainz.org/ws/2/release-group/xSnQ2rQ1yUozeTQdGNfy9rLexMAoEIIIzDeAaxsC?inc=genres+user-genres&fmt=json
// https://musicbrainz.org/ws/2/release-group/xSnQ2rQ1yUozeTQdGNfy9rLexMAoEIIIzDeAaxsC?inc=artits+artist-rels/query=artits=katyperry&fmt=json

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow"
    
};


function getArtits() {
  let artist = document.getElementById("inputArtist5").value;
  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/jpick23/spotify/EGJDVuLUpbohxGCi/search?q=${artist}&type=artist`

 fetch(artistUrl, requestOptions)

    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
    
  
};

submitButton.addEventListener('click', getArtits);

function getAlbums() {
  let artist = document.getElementById("inputArtist5").value;
  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/jpick23/spotify/EGJDVuLUpbohxGCi/search?q=${artist}&type=album`

 fetch(artistUrl, requestOptions)

    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
    
  
};

submitButton.addEventListener('click', getAlbums);

function getTracks() {
  let artist = document.getElementById("inputArtist5").value;
  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/jpick23/spotify/EGJDVuLUpbohxGCi/search?q=${artist}&type=track`

 fetch(artistUrl, requestOptions)

    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
    
  
};

submitButton.addEventListener('click', getTracks);