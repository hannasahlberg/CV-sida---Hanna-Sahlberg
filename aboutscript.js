function fetchDataCV(){
    fetch("cv.json")
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        document.getElementById("namn").innerText = data.namn;
        document.getElementById("e-mail").innerText = data.email;
        document.getElementById("telefonnummer").innerText = data.telefonnummer;


    let utbildningarList = document.getElementById("utbildningar-lista");
    data.utbildningar.forEach(function(utbildning){
        let li = document.createElement("li");
        li.textContent = `${utbildning.utbildning} (${utbildning.år}) - ${utbildning.stad}`;
        utbildningarList.appendChild(li);
    });

    let arbetsplatserList = document.getElementById("arbetsplatser-lista");
    data.arbetsplatser.forEach(function(arbetsplats) {
        let li = document.createElement("li");
        li.textContent = `${arbetsplats.arbetsplats} (${arbetsplats.tid}) - ${arbetsplats.plats}`;
        arbetsplatserList.appendChild(li);
    });
})

    .catch(function(error){
        console.error("fel vid hämtning av json-fil", error)
    })

}

fetchDataCV()


const cv = document.querySelector('.container');
const button = document.getElementById('cvbtn');

cv.style.display = 'none';

button.addEventListener('click', hideshow =>{

    if(cv.style.display === 'none'){
        cv.style.display = 'block';
        button.textContent = 'Stäng';

    }else{
        cv.style.display = 'none';
        button.textContent = 'Läs mitt CV';
    }
    
})
    


