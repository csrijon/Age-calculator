function getDOB() {
    let data = document.getElementById("inputDob").value;
    let dob = new Date(data);
    let day = dob.getDate();
    let month = dob.getMonth() + 1; // Months are 0-based in JS
    let year = dob.getFullYear();

    let now = new Date(document.getElementById("cdate").value);
    let currentDay = now.getDate();
    let currentMonth = now.getMonth() + 1;
    let currentYear = now.getFullYear();

    if (now < dob) {
        document.getElementById("currentAge").innerHTML = "Invalid Date";
        return;
    }

    let yearDiff = currentYear - year;
    let monthDiff = currentMonth - month;
    let dayDiff = currentDay - day;

    if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(currentYear, currentMonth - 1, 0).getDate();
    }
    
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    document.getElementById("currentAge").innerHTML = 
        `Your current Age is ${yearDiff} years ${monthDiff} months ${dayDiff} days`;
}

function currentDate() {
    let d = document.getElementById("cdate");
    d.value = formatted();
}

function formatted(date = new Date()) {
    return [
        date.getFullYear(),
        short(date.getMonth() + 1),
        short(date.getDate())
    ].join("-");
}

function short(num) {
    return num.toString().padStart(2, "0");
}

currentDate();
