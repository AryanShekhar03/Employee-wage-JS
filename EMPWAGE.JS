//UC1
const IS_ABSENT=0
let empcheck = Math.floor(Math.random()*10)%2;
if (empcheck== IS_ABSENT){
 console.log("Employee is Absent");
 return;   
}else{
    console.log("Employee is Present");
}
//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

{
    let empHrs = 0;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
        default:
            empHrs = 0;
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC2 - Emp Wage: " + empWage);
}
//uc3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC3 - Emp Wage: " + empWage, " Total Working Hours: " + empHrs);
}
//uc4
const NUM_OF_WORKING_DAYS=2;
let empHrs1=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empcheck=Math.floor(Math.random()*10)%3;
    empHrs1 += getWorkingHours(empcheck);

}
let empWage=empHrs1*WAGE_PER_HOUR;
console.log("UC4 -Total Hours " + Totalempwage);  
//uc5
const MAX_HRS_IN_MONTH=100;
let TotalempHrs1=0;
let totalWorkingDays=0;
while(TotalempHrs <=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    TotalempHrs1+=getWorkingHours(empcheck);
}
 let empWage2=TotalempHrs1*WAGE_PER_HOUR;
 console.log("UC5 -Total Days :" + totalWorkingDays+"Total Hours "+ TotalempHrs1+ "Emp wage :"+empwage2);
