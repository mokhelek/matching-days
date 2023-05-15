let myDaysElements = document.querySelectorAll(".days");
const date1 = document.querySelector("#date-input-1");
const date2 = document.querySelector("#date-input-2");

let myFactory = MatchingDays();

function refreshClasses() {
    let initialIncorrect = document.querySelector(".red");
    let initialCorrect = document.querySelector(".green");
    let initialFirst = document.querySelector(".blue");

    if (initialIncorrect) {
        initialIncorrect.classList.remove("red");
    }
    if (initialFirst) {
        initialFirst.classList.remove("blue");
    }
    if (initialCorrect) {
        initialCorrect.classList.remove("green");
    }
}

function pickDates() {
    myFactory.setFirstDate(date1.value);
    myFactory.setSecondDate(date2.value);

    highlightDays();
}

function highlightDays() {
    let day1 = document.getElementById(myFactory.getFirstDate());
    let day2 = document.getElementById(myFactory.getSecondDate());

    if (date1.value && date2.value) {
        if (myFactory.compareDates()) {
            refreshClasses()
            day1.classList.add( myFactory.returnClassName());
        } else {
            refreshClasses()
            day1.classList.add(myFactory.returnClassName().first);
            day2.classList.add(myFactory.returnClassName().second);
        }
    } else if (date1.value == "" && date2.value) {
        refreshClasses()
        day2.classList.add(myFactory.returnClassName().first);
    } else if (date2.value == "" && date1.value) {
        refreshClasses()
        day1.classList.add(myFactory.returnClassName().first);
    } else {
        refreshClasses()
    }
}

date1.addEventListener("change", function () {
    pickDates();
});
date2.addEventListener("change", function () {
    pickDates();
});
