const btnEl = document.getElementById("btn");
const JokeEL = document.getElementById("joke");

const apiKey = "Jz7EMelENa3Dsj6L/+cOdA==46ABCImc4OW7DZWv";

const options = {
    method : "GET",
    headers:{
        'X-Api-Key': apiKey
    },

}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


 async function getJoke(){

    try {
        JokeEL.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response =  await fetch(apiURL,options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke"
        JokeEL.innerText = data[0].joke;
        
    } catch (error) {
        JokeEL.innerText = "An Error Happens, Try Again Later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke"
    }
    


}


btnEl.addEventListener("click",getJoke);