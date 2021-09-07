const urlParams = new URLSearchParams(window.location.search);
const beertype = urlParams.get("beertype");

const url = "https://kea21s-3d40.restdb.io/rest/beers";
const option = {
  headers: {
    "x-apikey": "61360fcc43cedb6d1f97ed46",
  },
};

fetch(url, option)
  .then((res) => res.json())
  .then((data) => {
    gotData(data);
  });

function gotData(beers) {
  const show = [
    beers[0],
    beers[2],
    beers[4],
    beers[6],
    beers[7],
    beers[9],
    beers[14],
    beers[15],
  ];

  console.log(show[0].beertype);

  for (let i = 0; i < show.length; i++) {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    const parent = document.querySelector("ul");

    copy.querySelector(".catebeer").textContent = show[i].beertype;

    parent.appendChild(copy);
  }
}
