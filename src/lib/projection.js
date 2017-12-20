const wealthProjection = (data) => {

    // Variables needed for our wealth forecast
    const goal = Math.pow(10, 8); // Our $1B goal
    const growth = data.growth; // This determines how much our capital will grow each time
    const frequency = growthFrequency(data); // This determines how often our capital will grow
    let dailyValue = data.capital; // The daily value of our capital
    let days = 1; // We need to keep track of our time spent to reach the goal

    // Prevent error
    if(dailyValue <= 0 || growth <= 1) {
        return;
    }
    
    // Calcuclation
    while(dailyValue < goal) {
        dailyValue *= growth;
        days += frequency;

    }
    
    const years = Math.round(days / 365); // Convert days to years
    const assetValue = Math.round(dailyValue); // Approx. asset value
    
    const report = {
        assetValue,
        days,
        years
    };
    
    return report;

}



// Determine growth frequecy
const growthFrequency = (data) => {
    
    let frequency;
    
    switch(data.selectedDate) {
        case 'day':
            frequency = 1;
            break;
        
        case 'week':
            frequency = 7;
            break;
        
        case 'month':
            frequency = 30;
            break;
    
        case 'year':
            frequency = 365;
            break;
    
        default:
            return 0;
    }
    
    return frequency;

}



export default wealthProjection;