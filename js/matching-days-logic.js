//  ? Date format : -> 2023-05-24

function MatchingDays() {
    let firstDate = "";
    let secondDate = "";

    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getWeekdays(){
        return weekDays ;
    }

    function setFirstDate(dateString) {
        let date1 = new Date(dateString);
        firstDate = date1.getDay();
    }

    function setSecondDate(dateString) {
        let date2 = new Date(dateString);
        secondDate = date2.getDay();
    }

    function getFirstDate() {
        return firstDate;
    }

    function getSecondDate() {
        return secondDate;
    }

    function daysMatch(){
        if(firstDate == secondDate ){
            return firstDate;
        }
        
    }

    return {
        setFirstDate,
        setSecondDate,

        getFirstDate,
        getSecondDate,
        getWeekdays,
        daysMatch,

    };
}
