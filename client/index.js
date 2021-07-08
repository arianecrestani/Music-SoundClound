console.log("hello");
const client_id =
  "DpnIFjonzFkfKvqKFbpo8vd3CYn2svLb";
const secret_client = "x28DxmzBzqWXVQDPqN7AI54BhKFEwK5h"
SC.initialize({
  client_id: client_id
});

const baseUrl = (endpoint) => {
  const baseUrl = "http://api.soundcloud.com";
  
  return `${baseUrl}/${endpoint}client_id=${client_id}&secret_client=${secret_client}`;
};

const apiRequest = async (endpoint) => {
  return await fetch(baseUrl(endpoint), {
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const getMusic = (query) => `tracks/stream?&q=${query}&`;
// const getStream = (query) => `tracks/stream?q=${query}`

const searchBtn = document.getElementById("searchBtn");
const textArea = document.getElementById("textArea");


const btnEventHandler = () => {
  apiRequest(getMusic(textArea.value)).then((json) => updateUi(json));
};

searchBtn.addEventListener("click", btnEventHandler);


const createTitle = (title) => {
  //criar div title e colocar valor innerhtml
  //e retornar
  const titleDiv = document.createElement("div");
  titleDiv.id = "titleMusic";
  titleDiv.innerHTML = title;

  return titleDiv;
};



const createMusic = (element) => {
  const div = document.createElement("div");
  div.id = "movieSection";

  const title = createTitle(element.title);
  div.appendChild(title);

  return div;

};

// const updateUi = (json) => {
//   const music = document.getElementById("musics");
//   console.log(json)

//   json.forEach((element) => {
//     const newElement = {

//       title: element.title,
     
//     };
//     const musicDiv = createMusic(newElement);
//     music.appendChild(musicDiv);
//   });
// };

var track_url = 'https://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
  const player = document.getElementById("player");
  player.innerHTML = oEmbed.html
});