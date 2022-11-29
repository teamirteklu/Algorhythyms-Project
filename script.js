const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16e36212f8msh7435d930e8ebfa3p10cd71jsn108eca6b3b92",
    "X-RapidAPI-Host": "lyrics-plus.p.rapidapi.com",
  },
};
// var tempUrl = "https://musicbrainz.org/ws/2/artits/?query=davidbowie"
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
      // LyricDisplay.setAttribute("style", "white-space: pre-wrap;");
      var LyricDisplay = document.createElement("div");
      LyricDisplay.setAttribute("id", "lyric-display");
      LyricDisplay.setAttribute("style", "white-space: pre-wrap;");
      var textContent = document.createTextNode(lyricResult);
      LyricDisplay.appendChild(textContent);
      parentDiv.insertBefore(LyricDisplay, recommendationTable);
    

    
    
     
      
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
  
  let artistUrl = `https://v1.nocodeapi.com/emilyyy231/spotify/xjlyNJQPtDsCRmnx/search?q=${artist}&type=artist`

  fetch(artistUrl, requestOptions)
    // .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));


    .then((response) => response.json())

    .then(result => {
      console.log(result)
      var artists = result.artists;
      // var artists = result.genres;
      let genresElement = document.getElementsByClassName("genreOne");
      let parentElement = document.getElementsByClassName("artistId");
      console.log(parentElement);

      for (let i = 0; i < 2; i++) {
        // let parentElement = document.getElementById("artistId");
        parentElement[0].innerHTML = `${artists.items[0].name}`;
        console.log(parentElement);
      }

      for (let i = 0; i < artists.items[0].genres.length; i++) {
        // var artists = result.genres;
        // let parentElement = document.getElementById("artistId");
        genresElement[i].innerHTML = `${artists.items[0].genres[i]}`;
        console.log(genresElement);
      }
    })
    .catch(error => console.log('error', error))
    
  
  };
submitButton.addEventListener('click', getArtists);
// /*
function getAlbums() {
  let artist = document.getElementById("inputArtist5").value;

  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/emilyyy231/spotify/xjlyNJQPtDsCRmnx/search?q=${artist}&type=album`

  fetch(artistUrl, requestOptions)
    // .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));


    .then(response => response.json())
    .then(result => {
      console.log(result)
      var albums = result.albums;
      let parentElement = document.getElementsByClassName("albumOne");
      console.log(parentElement);

      for (let i = 0; i < parentElement.length; i++) {
        // let parentElement = document.getElementById("artistId");
        parentElement[i].innerHTML = `${albums.items[i].name}`;
        console.log(parentElement);
      }

      // for (let i = 0; i < genresElement.length; i++) {
      //   // let parentElement = document.getElementById("artistId");
      //   genresElement[i].innerHTML = `${artist.items[i].genres}`;
      //   console.log(genresElement);
      // }
    })
    .catch(error => console.log('error', error))
    
  
};

submitButton.addEventListener('click', getAlbums);
// */
function getTracks() {
  let artist = document.getElementById("inputArtist5").value;
  console.log(artist)
 
  var artistSection = document.querySelector("#artist-display");
  if (artistSection) {
    artistSection.innerHTML = " ";
  }
  let artistUrl = `https://v1.nocodeapi.com/emilyyy231/spotify/xjlyNJQPtDsCRmnx/search?q=${artist}&type=track`

  fetch(artistUrl, requestOptions)
    // .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));


    .then(response => response.json())
    .then(result => {
      console.log(result)
      var tracks = result.tracks;
     
      let parentElement = document.getElementsByClassName("trackOne");
      console.log(parentElement);

      for (let i = 0; i < parentElement.length; i++) {
        // let parentElement = document.getElementById("artistId");
        parentElement[i].innerHTML = `${tracks.items[i].name}`;
        console.log(parentElement);
      }
    })
    .catch(error => console.log('error', error))
    
  
};

submitButton.addEventListener('click', getTracks);
