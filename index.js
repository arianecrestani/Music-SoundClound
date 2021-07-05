const client_id =
  "DpnIFjonzFkfKvqKFbpo8vd3CYn2svLb";
const secret_client = "x28DxmzBzqWXVQDPqN7AI54BhKFEwK5h"
console.log() 
const baseUrl = (endpoint) => {
  const baseUrl = "http://api.soundcloud.com";

  return `${baseUrl}/${endpoint}`;
};

const apiRequest = async (endpoint) => {
  return await fetch(baseUrl(endpoint), {
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const getMusic = (query) => `tracks?&client_id=${client_id}&=${secret_client}q=${query}`;

const searchBtn = document.getElementById("searchBtn");
const textArea = document.getElementById("textArea");

const btnEventHandler = () => {
  apiRequest(getMusic(textArea.value)).then((json) => updateUi(json));
};

searchBtn.addEventListener("click", btnEventHandler);

const updateUi = (json) => {
  const music = document.getElementById("musics");
  console.log(json)

  // json.results.forEach((element) => {
  //   const newElement = {
     
  //   };

  // });
};
