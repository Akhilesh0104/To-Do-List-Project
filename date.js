// JavaScript source code
module.exports = getDate;

function getDate() {
    let tDate = new Date();
    let day = tDate.getDay();
    let todayDate = tDate.toLocaleDateString();
    let weekDay = "";

    if (day === 6 || day === 0) {
        weekDay = "Weekend";
    } else {
        weekDay = "Working Day";
    }

    switch (day) {
        case 0: weekDay = "Sunday"; break;
        case 1: weekDay = "Moday"; break;
        case 2: weekDay = "Tuesday"; break;
        case 3: weekDay = "Wednesday"; break;
        case 4: weekDay = "Thursday"; break;
        case 5: weekDay = "Friday"; break;
        case 6: weekDay = "Saturday"; break;
        default: weekDay = "Something is wrong with week days";
            break;
    }

    return [weekDay, todayDate];
}
