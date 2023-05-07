function updateDateTime() {
    // Get current date and time.
    const now = new Date();
    const dayOfWeek = now.toLocaleString('en-GB', { weekday: 'long' });
    const ukTime = now.toLocaleString('en-GB', { timeStyle: 'medium' });

    // Update HTML element with current day and time in UK
    const datetimeElement = document.getElementById("myTime");
    datetimeElement.textContent = dayOfWeek + ': ' + ukTime;
}

// Update date and time every second.
setInterval(updateDateTime, 1000);