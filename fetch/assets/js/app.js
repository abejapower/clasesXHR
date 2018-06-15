const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRuntime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

inputText.addEventListener('keypress',(event) => {
    let key = event.which || event.keyCode;
    if (key === 13) { // codigo 13 es enter

        let movie = inputText.value;
        //console.log(movie);
        inputText.value = '';

    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=19672cf4`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
         renderInfo(data);
    })
        
    }
    
})
const renderInfo = (data) => {
    containerTitle.innerHTLM = data.Title;
    containerYear.innerHTML = data.Year;
    containerRuntime.innerHTML = data.Runtime;
    containerImage.innerHTLM = `<img src="${data.Poster}">`;
}