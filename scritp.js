const searchBar = document.querySelector("#searchBar");
const searchForm = document.querySelector("#searchForm");
const searchDiv = document.querySelector("#searchResults");
let shows = document.querySelectorAll(".results");

const getShow = async (showName) => {
  try {
    const results = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${showName}`
    );
    return results;
  } catch (error) {
    console.log("Error: " + error);
  }
};

const search = async () => {
  let show = searchBar.value;
  let res = await getShow(show);
  let resArr = [];
  for (let i = 0; i < res.data.length; i++) {
    resArr.push(res.data[i]);
  }
  return resArr;
};

const displaySearch = async (res) => {
  searchDiv.innerHTML = "";

  for (let i = 0; i < res.length; i++) {
    const mainDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const newDiv = document.createElement("div");
    const infoDiv = document.createElement("div")
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const rating = document.createElement("p");
    const status = document.createElement("p");
    const genre = document.createElement("p");

    title.append(res[i].show.name);
    if (res[i].show.rating.average === null) {
      rating.append("N/A");
    } else {
      rating.append(res[i].show.rating.average);
    }
    status.append(res[i].show.status);
    try {
      image.src = res[i].show.image.medium;
    } catch (error) {
      image.src =
        "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
    }
    let gen = res[i].show.genres;
    for (let element of gen) {
      genre.append(element + " ");
    }

    imgDiv.append(image);
    mainDiv.append(title);
    mainDiv.append(rating);
    mainDiv.append(status);
    mainDiv.append(genre);
    infoDiv.append(imgDiv);
    infoDiv.append(mainDiv);
    newDiv.append(infoDiv);
    infoDiv.classList.add("info-div");
    newDiv.classList.add("results");
    mainDiv.classList.add("text-results");
    imgDiv.classList.add("img-results");
    newDiv.id = `${res[i].show.id}`;
    searchDiv.append(newDiv);

    const descDiv = document.createElement("div");
    const test = document.createElement("p");
    test.append("daad");
    descDiv.append(test)
    descDiv.classList.add("show-des");
    descDiv.classList.toggle("collapsed");
    newDiv.append(descDiv);
  }
};

const addClickEvent = function (show) {
  show.forEach((element) => {
    element.addEventListener("click", async function () {
      //   try {
      //     const show = await axios.get(`https://api.tvmaze.com/shows/${this.id}`);
      //     const seasons = await axios.get(
      //       `https://api.tvmaze.com/shows/${this.id}/seasons`
      //     );
      //     const episodes = await axios.get(
      //       `https://api.tvmaze.com/shows/${this.id}/episodes`
      //     );
      //     // displayInfo(
      //     //   show.data.averageRuntime,
      //     //   show.data.language,
      //     //   show.data.premiered,
      //     //   show.data.summary,
      //     //   seasons.data.length,
      //     //   episodes.data.length
      //     // );
      //   } catch (error) {
      //     console.log("Error: " + error);
      //   }
        element.children[1].classList.toggle("collapsed")
        element.classList.toggle("collapsed")
        
    });
  });
};

const displayInfo = function (avgRunTime, lang, premire, desc, seasons, ep) {
  console.log(avgRunTime, lang, premire, desc, seasons, ep);
};

searchForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let res = await search();
  displaySearch(res);
  searchBar.value = "";
  shows = document.querySelectorAll(".results");
  addClickEvent(shows);
});
