function findLeapYear(years){
    let leapYear=[];
    for(let i=0;i<years.length;i++){
        
        if(years[i]%400===0){
            leapYear+=years[i];
            leapYear +=' ';
        }
        else if(years[i]%100 === 0)
            continue;
        else if(years[i]%4 === 0){
            leapYear+=years[i];
            leapYear +=' ';
        }
        else
            continue;
    }
    return leapYear;
}
let years=[2023,2024,2025,2028,2030];
let year = findLeapYear(years);
console.log(year);
