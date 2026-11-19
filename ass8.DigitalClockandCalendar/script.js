// Function to display current time
function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert to 12-hour format
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    // Add zero if value is less than 10
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").textContent =
        hours + ":" + minutes + ":" + seconds + " " + ampm;

    // Display date
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", options);
}


// Function to create calendar
function createCalendar() {

    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth();

    let monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    // Display month and year
    document.getElementById("monthYear").textContent =
        monthNames[month] + " " + year;

    let calendarDays = document.getElementById("calendarDays");

    calendarDays.innerHTML = "";

    // First day of the month
    let firstDay = new Date(year, month, 1).getDay();

    // Number of days in current month
    let totalDays = new Date(year, month + 1, 0).getDate();

    // Add empty spaces before first day
    for (let i = 0; i < firstDay; i++) {

        let emptyDay = document.createElement("div");

        calendarDays.appendChild(emptyDay);
    }

    // Add dates
    for (let day = 1; day <= totalDays; day++) {

        let dateElement = document.createElement("div");

        dateElement.textContent = day;

        // Highlight today's date
        if (day === now.getDate()) {
            dateElement.classList.add("today");
        }

        calendarDays.appendChild(dateElement);
    }
}


// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);

// Create calendar
createCalendar();