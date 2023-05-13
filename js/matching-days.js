let myDaysElements = document.querySelectorAll(".days");
const date1 = document.querySelector("#date-input-1");
const date2 = document.querySelector("#date-input-2");

let myFactory = MatchingDays()         

myFactory.setFirstDate("2023-05-6")
myFactory.setSecondDate("2023-05-6")

function pickDates(){

    for (let i = 0 ; i < myDaysElements.length ; i++ ){
        myDaysElements[2].classList.add(blue)
    }

}



date1.addEventListener("change", function(){
    pickDates();
})
date2.addEventListener("change", function(){
    pickDates();
})