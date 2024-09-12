const searchBar = document.querySelector("#searchBar");
const searchForm = document.querySelector("#searchForm");
const searchDiv = document.querySelector('#searchResults');

const getShow = async (showName) => {
    try {
        const results = await axios.get(`https://api.tvmaze.com/search/shows?q=${showName}`)
        return results
    } catch (error) {
        console.log('Error: ' + error)
    }
}


const search = async () =>{
    let show = searchBar.value
    let res = await getShow(show)
    let resArr = []
    for(let i = 0; i<res.data.length; i++){ 
    resArr.push(res.data[i])
       
    }
    return resArr
}

const displaySearch = async (res) => {
    searchDiv.innerHTML = ""
    for(let i = 0; i<res.length; i++){
        const newDiv = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('p');
        title.append(res[i].show.name)
        try {
            image.src = res[i].show.image.medium
        } catch (error) {
            image.src = "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
        }
        newDiv.append(image)
        newDiv.append(title)
        searchDiv.append(newDiv)
    }   
}

searchForm.addEventListener('submit', async function(e){
    e.preventDefault()
    let res =  await search()
    console.log(res)
    displaySearch(res)
    searchBar.value = '';
    
})


