const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

export function dateToString(date: Date) : string {
    var day = date.getDate();
    var month = months[date.getMonth()];

    return month + '-' + day;
}


export function stringToDate(date: string) : Date {
    var month = date.split('-')[0];
    var day = parseInt(date.split('-')[1]);

    var monthIndex = months.indexOf(month);
    var today = new Date();
    

    return new Date(2048, monthIndex, day, today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds());
}