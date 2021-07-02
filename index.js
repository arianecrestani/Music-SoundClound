const bearerToken =
  "4h5kQIL9mRXu-iAZrxNBKM1u4Xy31aR7JX6KszRA1U4w-hatuclfusP6q17cbGqJ";
console.log() 
const baseUrl = (endpoint) => {
  const baseUrl = "http://api.genius.com/";

  return `${baseUrl}/${endpoint}`;
};

const apiRequest = async (endpoint) => {
  return await fetch(baseUrl(endpoint), {
    method: "GET",
    json: true,
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer : ${bearerToken}`
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const getMusic = (query) => `search?q=${query}`;

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
