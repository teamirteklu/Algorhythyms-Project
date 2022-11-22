var requestUrl = 'https://musicbrainz.org/ws/2/'

$.ajax({
    url: requestUrl,
    method: 'PUSH',
  }).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);
  });


function getApi() {
    var requestUrl = ''

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
}