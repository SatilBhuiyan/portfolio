document.addEventListener('DOMContentLoaded', () => {
    
    // Live Calendar and Clock Engine 
    const runFooterClock = () => {
        const clockDisplay = document.getElementById('liveClock');
        if (!clockDisplay) return;

        const currentTimestamp = new Date();
        
        // Clean layout options formatting day, date and active local time
        const clockFormattingOptions = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };

        clockDisplay.textContent = currentTimestamp.toLocaleDateString('en-US', clockFormattingOptions);
    };

    // Execute clock initialization and update every 1 second
    runFooterClock();
    setInterval(runFooterClock, 1000);
});