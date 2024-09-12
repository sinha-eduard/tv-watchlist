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
    for(let i = 0; i<10; i++){
        resArr.push(res.data[i])
    }
    return resArr
}

const displaySearch = async (res) => {
    searchDiv.innerHTML = ""
    for(let i = 0; i<10; i++){
        const newP = document.createElement('p');
        newP.append(res[i].show.name)
        searchDiv.append(newP)
    }   
}

searchForm.addEventListener('submit', async function(e){
    e.preventDefault()
    let res =  await search()
    displaySearch(res)
    searchBar.value = '';
    
})


