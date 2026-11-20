/**
 * File: forecastWidget.js
 * Role: Renders the dynamic hourly vertical bar chart and the 5-day
 *       temperature range list inside the dashboard forecast containers.
 */

const ForecastWidget = (() => {
    const hourlyContainer = document.getElementById("hourly-forecast-container");
    const dailyContainer = document.getElementById("daily-forecast-container");

    /**
     * Renders vertical temperature bars for the 24-hour forecast.
     * @param {Array<Object>} hourlyData
     */
    function renderHourlyForecast(hourlyData) {
        hourlyContainer.innerHTML = "";

        // Determine min and max temperatures to scale bar heights proportionally
        const temps = hourlyData.map(item => item.temp);
        const minTemp = Math.min(...temps, 0);
        const maxTemp = Math.max(...temps, 30);
        const range = Math.max(maxTemp - minTemp, 1);

        hourlyData.forEach(slot => {
            // Normalize height between 20% and 100% for clean visual scaling
            const normalizedPercent = Math.round(
                20 + ((slot.temp - minTemp) / range) * 80
            );

            const col = document.createElement("div");
            col.className = "hourly-col";
            col.innerHTML = `
                <span class="hourly-temp">${slot.temp}°</span>
                <div class="hourly-bar-track">
                    <div class="hourly-bar-fill" style="height: ${normalizedPercent}%;"></div>
                </div>
                <span class="hourly-time">${slot.time}</span>
            `;

            hourlyContainer.appendChild(col);
        });
    }

    /**
     * Renders the 5-day forecast rows with horizontal min/max temperature bars.
     * @param {Array<Object>} dailyData
     */
    function renderDailyForecast(dailyData) {
        dailyContainer.innerHTML = "";

        // Calculate weekly extreme bounds for the progress bar width
        const allMax = Math.max(...dailyData.map(d => d.max), 30);
        const allMin = Math.min(...dailyData.map(d => d.min), -5);
        const totalSpan = Math.max(allMax - allMin, 1);

        dailyData.forEach(dayObj => {
            // Compute visual bar fill percentage based on the day's high temperature
            const fillPercent = Math.min(
                100,
                Math.max(25, Math.round(((dayObj.max - allMin) / totalSpan) * 100))
            );

            const row = document.createElement("div");
            row.className = "daily-row";
            row.innerHTML = `
                <span class="daily-day">${dayObj.day}</span>
                <span class="daily-icon">${dayObj.icon}</span>
                <div class="daily-range-track">
                    <div class="daily-range-fill" style="width: ${fillPercent}%;"></div>
                </div>
                <div class="daily-temps">
                    <span class="temp-low">${dayObj.min}°</span>
                    <span class="temp-high">${dayObj.max}°</span>
                </div>
            `;

            dailyContainer.appendChild(row);
        });
    }

    /**
     * Public method triggered by uiUpdater.js whenever a city changes.
     */
    function renderAll(hourlyData, dailyData) {
        renderHourlyForecast(hourlyData);
        renderDailyForecast(dailyData);
    }

    return {
        renderAll
    };
})();
