let templatePlaceholder = document.querySelector(".days-wrapper") ;

let myDaysElements = document.querySelectorAll(".days");
const date1 = document.querySelector("#date-input-1");
const date2 = document.querySelector("#date-input-2");

let myFactory = MatchingDays();


function pickDates() {
    myFactory.setFirstDate(date1.value);
    myFactory.setSecondDate(date2.value);

    templatePlaceholder.innerHTML =""
    highlightDays();
}



function highlightDays() {
    
    let weekDays = myFactory.getWeekdays() ;

    let daysTemplate = document.querySelector(".daysTemplate").innerHTML ;

    let compiledTemplate = Handlebars.compile(daysTemplate);
    for(let i = 0 ; i < weekDays.length ; i++ ){
        let days = weekDays[i];
        templateData = {
            days,
            first: myFactory.getFirstDate() == i,
            second: myFactory.getSecondDate() == i,
            daysMatch: myFactory.daysMatch() == i,
        };
        templatePlaceholder.innerHTML += compiledTemplate(templateData)
    }
   
}

date1.addEventListener("change", function () {
    pickDates();
});
date2.addEventListener("change", function () {
    pickDates();
});


