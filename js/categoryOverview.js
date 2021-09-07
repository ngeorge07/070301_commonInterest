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
  .then(gotData);
function gotData(data) {
  //console.log(data);
  data.forEach(showCategoryNav);
}
function showCategoryNav(beers) {
  //console.log(beers.beertype);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").textContent = beers.beertype;
  copy.querySelector("a").href = `productList.html?beertype=${beers.beertype}`;

  const cateParent = document.querySelector("#beer-cate-nav");
  const elemParent = cateParent.querySelector("ul");
  elemParent.appendChild(copy);
}
