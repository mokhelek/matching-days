let myDaysElements = document.querySelectorAll(".days");
const date1 = document.querySelector("#date-input-1");
const date2 = document.querySelector("#date-input-2");

let myFactory = MatchingDays();

function pickDates() {
    myFactory.setFirstDate(date1.value);
    myFactory.setSecondDate(date2.value);

    highlightDays();
}

function highlightDays() {
    let day1 = document.getElementById(myFactory.getFirstDate());
    let day2 = document.getElementById(myFactory.getSecondDate());

    let initialIncorrect = document.querySelector(".red");
    let initialCorrect = document.querySelector(".green");
   

    if (date1.value && date2.value) {
        if (myFactory.compareDates()) {
            if(initialIncorrect){
                initialIncorrect.classList.remove("red")
            }
            day1.classList.add("green")
        } else {
            if(initialIncorrect){
                initialIncorrect.classList.remove("red")
            }
            if(initialCorrect){
                initialCorrect.classList.remove("green")
            }
            day1.classList.add(myFactory.returnClassName().first);
            day2.classList.add(myFactory.returnClassName().second);
        }
    } else if (date1.value == "" && date2.value) {
        day2.classList.add("blue");


    } else if (date2.value == "" && date1.value) {

        day1.classList.add("blue");
    } else {

    }

}

date1.addEventListener("change", function () {
    pickDates();
});
date2.addEventListener("change", function () {
    pickDates();
});
