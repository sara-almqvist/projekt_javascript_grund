//Funktionsamling
function createDate(){
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minuts = currentDate.getMinutes();
    let year = currentDate.getFullYear();
    let month;
    currentDate.getMonth() < 9 ? month = "0"+(currentDate.getMonth()+1) : month= currentDate.getMonth()+1;
    let day = currentDate.getDate();
    let timeString = year+"-"+month+"-"+day+" kl."+hours+":"+minuts;
    return timeString;
}


