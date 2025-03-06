//Funktion som hämtar data från json fil
function fetchDataCV(){
    //hämtar data från json-filen "cv.json"
    fetch("cv.json")
    .then(function(response){
        return response.json();
    })
    //Behandlar data från json och applicerar i html koden
    .then (function(data){
        //hämtar namn, email och telefonnummer från json och lägger in det på samma id i html
        document.getElementById("namn").innerText = data.namn;
        document.getElementById("e-mail").innerText = data.email;
        document.getElementById("telefonnummer").innerText = data.telefonnummer;

    //Tilldelar variabeln 'UtbildningarList' med id 'utbildningar-lista från html
    let utbildningarList = document.getElementById("utbildningar-lista");
    //Loopar igenom varje utbildning i json filen 
    data.utbildningar.forEach(function(utbildning){
    //Skapar ett nytt listobjekt för varje utbildning
        let li = document.createElement("li");
        li.textContent = `${utbildning.utbildning} (${utbildning.år}) - ${utbildning.stad}`;
        //Lägger till listobjektet i utbildningar-lista
        utbildningarList.appendChild(li);
    });
    //Samma princip här som i utbildningar på rad 15 och ner
    let arbetsplatserList = document.getElementById("arbetsplatser-lista");
    data.arbetsplatser.forEach(function(arbetsplats) {
        let li = document.createElement("li");
        li.textContent = `${arbetsplats.arbetsplats} (${arbetsplats.tid}) - ${arbetsplats.plats}`;
        arbetsplatserList.appendChild(li);
    });
})
//Fångar eventuella fel till konsolen
    .catch(function(error){
        console.error("fel vid hämtning av json-fil", error)
    })

}
//Anropar funktionen fetchDataCV
fetchDataCV()


//Skapar funktion för att kunna visa/dölja mitt cv på hemsidan, ett som jag skrivit själv

//Skapar variabler och tilldelar dem .container och cvbtn från html
const cv = document.querySelector('.container');
const button = document.getElementById('cvbtn');
//Börjar med att gömma cv
cv.style.display = 'none';
//skapar ett klick event och skapar en funktion i den
button.addEventListener('click', hideShow =>{
//Skapar en if-sats som möjliggör att kunna öppna och stänga cv:t.
    if(cv.style.display === 'none'){
        cv.style.display = 'block';
        button.textContent = 'Stäng';
//Om jag klickar på knappen när displayen för cv är gömd visas cv och knappens text är 'stäng'.
//Om displayen inte är gömd när jag klickar på knappen så göms displayen när jag klickar och knappens tet blir 'Läs mitt cv'.
    }else{
        cv.style.display = 'none';
        button.textContent = 'Läs mitt CV';
    }
    
})

//funktion som är baserad på en befintlig Javascript lösning, https://medium.com/@ryan_forrester_/javascript-scroll-to-anchor-fast-easy-guide-48dde5878fbe
//Hämtar id 'scrollAnchor' och skapar ett event med en klickfunktion
document.getElementById('scrollAnchor').addEventListener('click', function(event) {
//metod som motverkar default beteende när man klickar på en länk
    event.preventDefault();
//hämtar target id:t och skrollar dit 'smooth'.
    document.getElementById('target').scrollIntoView({ behavior: 'smooth' });
});


