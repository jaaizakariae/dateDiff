export const calculateDiffBtwnDates = (date1, date2) => {
    if (typeof date1 === 'undefined'&&typeof date2 === 'undefined') {
        return 0;
    }
    var dt1 = new Date(date1);
    var dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
};

export const isEmpty=(obj) =>{
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
};
