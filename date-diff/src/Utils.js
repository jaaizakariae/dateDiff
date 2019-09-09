/**
 * Function to calculate the number of days between two dates
 * @param {date} startDate 
 * @param {date} endDate 
 */
export const calculateDiffBtwnDates = (startDate, endDate) => {
    if (typeof startDate === 'undefined'&&typeof endDate === 'undefined') {
        return 0;
    }
    var dt1 = new Date(startDate);
    var dt2 = new Date(endDate);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
};

/**
 * Function to check if object is empty
 * @param {object} obj 
 */
export const isEmpty=(obj) =>{
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
};
