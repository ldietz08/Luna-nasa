document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=MIHTyjtsRVKvzyzIbPV0hGxZU5WFJ7T32tlaO5D0&date=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("h2").innerText = data.title;
        document.querySelector("h3").innerText = data.explanation;
        document.querySelector("iframe").style.display = "none";
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector("h2").innerText = data.title;
        document.querySelector("h3").innerText = data.explanation;
        document.querySelector("img").style.display = "none";
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
