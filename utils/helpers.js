module.exports = {
    format_date: (date) => {
        let formatDate = new Date(date);
        let year = formatDate.getFullYear();
        let month = formatDate.getMonth() + 1;
        let day = formatDate.getDate();
    
        return `${month}/${day}/${year}`;
    }
};