for(let year = 2014 ; year <= 2050 ; year++){

let D = new Date(year , 0 ,1);
if(D.getDay()==0){
  console.log(year+`has first january on sunday`);
}

}
