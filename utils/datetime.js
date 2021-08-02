const date = require('date-and-time');

class DateTime {

    constructor() {
        this.dateIsNow = new Date();
    }

    setDateAndTime() {
        return {
            getCurrentTime: date.format(this.dateIsNow, 'HH:mm:ss'),
            getCurrentDate: date.format(this.dateIsNow, 'YYYY-MM-DD'),
            dayoftheweek: this.getWeekDay(this.dateIsNow.getDay())
        }
    }
}

module.exports = DateTime;