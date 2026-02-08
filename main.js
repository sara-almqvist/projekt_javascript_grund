//Funktionsamling
function displayDateAndTime(){
    let currentDate = new Date();
    let hours;
    currentDate.getHours() <10 ? hours = "0"+currentDate.getHours() : hours = currentDate.getHours();
    let minuts;
    currentDate.getMinutes() < 10 ? minuts = "0"+currentDate.getMinutes() : minuts = currentDate.getMinutes();
    let year = currentDate.getFullYear();
    let month;
    currentDate.getMonth() < 9 ? month = "0"+(currentDate.getMonth()+1) : month= currentDate.getMonth()+1;
    let day;
    currentDate.getDate() < 10 ? day = "0"+currentDate.getDate() : day = currentDate.getDate();
    let timeString = year+"-"+month+"-"+day+" kl."+hours+":"+minuts;
    let showDateTime = document.getElementById('showDateTime');
    showDateTime.textContent = timeString;
};

function createNewsCard(rubrik, text, datum){
    let artikel = document.createElement('article');
    artikel.classList.add('newsitem');
    newsContainer.appendChild(artikel);
    let h2 = document.createElement('h2');
    h2.textContent = rubrik;
    artikel.appendChild(h2);
    let paragrafText = document.createElement('p');
    paragrafText.innerText = text;
    artikel.appendChild(paragrafText);
    let paragrafDatum = document.createElement('p');
    paragrafDatum.classList.add('smalltext');
    paragrafDatum.innerText = datum;
    artikel.appendChild(paragrafDatum); 
};

function createMultipleNewsCards(array){
    for (arr of array){
        createNewsCard(arr.rubrik, arr.text, arr.datum);
    }};

function getListWithMoreNews(){
    let moreNewsList = [];
    if (newsList.length > 3){
        for (let i=3; i < newsList.length; i++){
            moreNewsList.push(newsList[i]);
        }
    }
    return moreNewsList;
};

function doToggleNewsCards(){
     switch (toggleNewsButton.checked)
    {case true : 
        switch (document.getElementsByClassName('newsitem').length)
           {case 3: createMultipleNewsCards(getListWithMoreNews())
            toggleNewsLabel.innerText = 'Visar alla nyheter';
            break;
            case 0: createMultipleNewsCards(newsList);
            toggleNewsLabel.innerText = 'Visar alla nyheter';
            break;
            default:
            createMultipleNewsCards(threeNewsList);
            toggleNewsLabel.innerText = "Default vid checked"
            break;
       }
       break;
    case false: while (newsContainer.firstChild){
                   newsContainer.removeChild(newsContainer.firstChild);
                }
            createMultipleNewsCards(threeNewsList);
            toggleNewsLabel.innerText = 'Visa fler nyheter';
            break;
    default: break; 
    }};

function updateDisplayedImage(img){
    displayedImage.src = img.src;
    displayedImage.alt = img.alt;
    displayedImage.title = img.title;
}

function createImageGallery(){
    for (bild of bildGalleriObjekt){
     let img = document.createElement('img');
     img.setAttribute('src', bild.filename);
     img.setAttribute('alt', bild.alt);
     img.setAttribute('title', bild.title);
     thumbBar.appendChild(img);
     img.addEventListener('click', ()=> updateDisplayedImage(img));
}}

function makeResponseSubmitForm(namn, parentID, ...fields){
    let svarsmeddelande;
    if (namn.value.trim()){svarsmeddelande = namn.value.trim() +", tack för ditt meddelande. Styrelsen återkopplar så snart vi kan.";} else{
        svarsmeddelande = "Tack för ditt meddelande. Styrelsen återkopplar så snart vi kan";}
    let visaSvarElement = document.createElement('dialog');
    visaSvarElement.textContent = svarsmeddelande;
    let parentElement = document.getElementById(parentID);
    parentElement.appendChild(visaSvarElement);
    visaSvarElement.showModal();
    visaSvarElement.addEventListener('click', () => visaSvarElement.close());
    namn.value = "";
    for (let field of fields){
        field.value = "";
    }
}

function validateUserInputLength(field, label, limit){
    field.addEventListener('focus', () =>{
        label.style.color = "white";
        label.textContent = field.dataset.focus;
})
    field.addEventListener('blur', () =>{
    if (field.value.length > limit){
        label.style.color = "black";
        label.textContent = label.dataset.content;
    } else {
        label.style.color = "red";
        label.textContent = field.dataset.invalid;
    }
})}


//Visa datum och tid på alla sidor
setInterval(displayDateAndTime(), 1000);

//JavaScript för index.html
const toggleNewsButton = document.getElementById('toggleNews');
const toggleNewsLabel = document.getElementById('checkboxLabel');
const newsContainer = document.getElementById('newsContainer');
const newsList = [
    {rubrik: 'Ändrat datum', text:'Ändringen kring införande av moms är uppskjuten till oktober 2026', datum: '2026-02-02'}, 
    {rubrik: 'Nästa styrelsemöte', text: 'Nästa möte är onsdag 25:e februari kl 18', datum: '2026-01-10'}, 
    {rubrik: 'Släpvagnen', text: 'Släpvagnen kan lånas fritt av föreningens medlemmar. Tänk på att den ska besiktas senast 31:a maj.', datum: '2026-02-06'}, 
    {rubrik: 'Snöröjning', text: 'Även i år kommer Trädgårdstjänst stå för snöröjningen på gemensamma gatan. Vi hjälps åt att skotta entréer och ingång till källare.', datum: '2025-10-17'}, 
    {rubrik: 'Moms', text: 'Från och med april 2026 kommer det tillkomma moms på carporthyran enligt nytt beslut från Skatteverket.', datum: '2025-10-29'}];
//Tanken är att nyheterna hämtas från ett API/backend-del längre fram

const threeNewsList = [newsList[0], newsList[1], newsList[2]];
const startIndexPage = document.getElementById('hero');
if (startIndexPage){startIndexPage.addEventListener('load', createMultipleNewsCards(threeNewsList))};//Visa tre nyheter direkt på Index-sidan

if (toggleNewsButton){toggleNewsButton.addEventListener('click', () => doToggleNewsCards())};

//JavaScript för about.html
const lghtabellContainer = document.getElementById('lghtabellContainer');
const lghtabellLabel = document.getElementById('lghtabellLabel');
const lghtabell = document.getElementById('lghtabell');
const overviewTabellContainer = document.getElementById('overviewTabellContainer');
const overviewTabellLabel = document.getElementById('overviewTabellLabel');
const overviewTabell = document.getElementById('overview');
const keyvaluesTabellContainer = document.getElementById('keyvaluesTabellContainer');
const keyvaluesTabellLabel = document.getElementById('keyvaluesTabellLabel');
const keyvaluesTabell = document.getElementById('keyvalues');

if (lghtabellLabel){lghtabellLabel.addEventListener('click', () => {
    lghtabell.classList.toggle('doldTabell');
})}

if (overviewTabellLabel){overviewTabellLabel.addEventListener('click', () => overviewTabell.classList.toggle('doldTabell'))};

if (keyvaluesTabellLabel){keyvaluesTabellLabel.addEventListener('click', () => keyvaluesTabell.classList.toggle('doldTabell'))};

//Lägga till tooltips på tabelletiketterna
let allH3 = document.querySelectorAll('h3');
allH3.forEach((a) => {
    a.setAttribute('title', 'Klicka för att se tabellen');
});

//Bildgalleri
const bildGalleriContainer = document.getElementById('bildGalleriContainer');
const displayedImage = document.querySelector('.displayedImg');
const thumbBar = document.querySelector('.thumb');
const bildGalleriObjekt = [
    {filename: 'img/fastighet29medel.jpeg', alt: 'Turkos tvåvåningsbyggnad med tegeltak', title: 'Hus 29'}, 
    {filename: 'img/southside27.jpeg', alt: 'gul tvåvåningsbyggnad med träbalkonger omgiven av trädgård', title: 'Hus 27'}, 
    {filename: 'img/mellanhus29.jpeg', alt: 'Turkos tvåvåningsbyggnad med vita träbalkonger', title: 'Hus 29'},
    {filename: 'img/garden.jpeg', alt: 'Hund i trädgård omgiven av häck och husgavel.', title: 'Föreningens trädgård'},
    {filename: 'img/miljohusmellan.jpeg', alt: 'Vitt miljöhus med två metalldörrar', title: 'Föreningens miljöhus'},
    {filename: 'img/fastighet27.jpg', alt: 'Gul tvåvåningsbyggnad med tegeltak och trätrappa på vänster sida', title: 'Hus 27'}];

if (thumbBar){thumbBar.addEventListener('load', createImageGallery())};

//JavaScript för contact.html
//Kontakta styrelsen-formulär
const contactForm = document.getElementById('contactform');
const contactName = document.getElementById('contactname');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const contactNameLabel = document.getElementById('contactnameLabel');

if (contactForm){contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    makeResponseSubmitForm(contactName, 'contactformContainer', userEmail, userMessage);
})};

if(contactName){validateUserInputLength(contactName, contactNameLabel, 3)};
if(userEmail){validateUserInputLength(userEmail, document.getElementById('emailLabel'), 3)};
if(userMessage){validateUserInputLength(userMessage, document.getElementById('messageLabel'), 10)};

//Formulärsektionen

