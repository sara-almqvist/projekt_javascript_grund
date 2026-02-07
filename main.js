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









