module.exports = {
    format_date: (date) => {
        //parse incoming date into month day year
        let formatDate = new Date(date);
        let year = formatDate.getFullYear();
        let month = formatDate.getMonth() + 1;
        let day = formatDate.getDate();
        
        //return just those values, so time is not displayed
        return `${month}/${day}/${year}`;
    }
};