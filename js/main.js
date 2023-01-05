document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://api.nasa.gov/planetary/apod?api_key=diDaP3v6OdUyoJ5qle0yX3rQQRRItF5fGd82ObHy&date=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector("img").src = null;
      }
      document.querySelector("h2").innerText = data.title;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
