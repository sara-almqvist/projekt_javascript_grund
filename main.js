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
}

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
}

setInterval(displayDateAndTime(), 1000);

let buttonNews = document.getElementById('showNews');
const newsContainer = document.getElementById('newsContainer');
const newsList = [
    {rubrik: 'Ändrat datum', text:'Ändringen kring införande av moms är uppskjuten till oktober 2026', datum: '2026-02-02'}, 
    {rubrik: 'Nästa styrelsemöte', text: 'Nästa möte är onsdag 25:e februari kl 18', datum: '2026-01-10'}, 
    {rubrik: 'Släpvagnen', text: 'Släpvagnen kan lånas fritt av föreningens medlemmar. Tänk på att den ska besiktas senast 31:a maj.', datum: '2026-02-06'}, 
    {rubrik: 'Snöröjning', text: 'Även i år kommer Trädgårdstjänst stå för snöröjningen på gemensamma gatan. Vi hjälps åt att skotta entréer och ingång till källare.', datum: '2025-10-17'}, 
    {rubrik: 'Moms', text: 'Från och med april 2026 kommer det tillkomma moms på carporthyran enligt nytt beslut från Skatteverket.', datum: '2025-10-29'}];

for (item of newsList){
    createNewsCard(item.rubrik, item.text, item.datum)
};









