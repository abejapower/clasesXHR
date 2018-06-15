const btn = document.querySelector('button');
const img = document.getElementById('container');
const url = 'https://dog.ceo/api/breeds/image/random';

const getJson = (url, callback) => {
    // crear instancia dek ibjeto XHMHttpRequest
    const request = new XMLHttpRequest ();

    request.onload = ()=> {
        
            //4: significa que la peticion se termino y la respuesta esta lista
            // 200: el status esta ok
            if (request.readyState === 4 && request.status === 200){
                callback(request.responseText);
            }
        }
        // open()
    request.open('GET',  url);
        //send
    request.send();
    }
        btn.addEventListener('click',()=>{
            getJson (url, Response => {
               let doggie = JSON.parse(response).message;
               console.log(doggie);
               img.src = doggie.message;
            
        })
    
});