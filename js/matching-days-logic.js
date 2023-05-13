//  ? Date format : -> 2023-05-24

function MatchingDays() {
    let firstDate = "";
    let secondDate = "";

    let successClassName = "green";
    let firstDateClassName = "blue";
    let wrongClassName = "red";

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

    function compareDates() {
        return getFirstDate() == getSecondDate();
    }

    function returnClassName() {
        if (compareDates()) {
            return successClassName;
        }
        if (firstDate === "" || secondDate === "") {
            return firstDateClassName;
        }
        if (compareDates() === false) {
            return {
                first: firstDateClassName,
                second: wrongClassName,
            };
        }
    }

    return {
        setFirstDate,
        setSecondDate,

        getFirstDate,
        getSecondDate,

        compareDates,

        returnClassName,
    };
}
