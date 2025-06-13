let date =  new Date();
let today = date.getDay();
console.log(today);
let dayName = [`Sunday` , `Monday` , `Tuesday`, `Wednesday` , `Thursday` , `Friday`,`Saturday`];
console.log(dayName[2]);
let todayDay = dayName[today];
console.log(`Today's day is ` + todayDay);
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log(hour);
let prepand = (hour > 12)? `AM` : `PM`;

console.log(`Time is : ` + hour + prepand);
