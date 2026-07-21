//  Question 1

 document.write("<h1>" + "Question 1" + "</h1>" );


  function power(a,b){
    let result = 1;
    let i = 1;
    while( i <= b){
     result = result * a;
     i++;
    }
    return result;
  }
  let answer = power(2,3);
  document.write(answer);

//   Question 2 

  document.write("<h1>" + "Question 2" + "</h1>" );


  function leap(year){
  if (year %4 == 0){
   return "The year is leap year";
  }
  else{
     return "The year is  not leap year";
  }

  }
 let inputyear = +prompt("Enter any year");
   document.write(leap(inputyear));

//    Question 3 

  document.write("<h1>" + "Question 3" + "</h1>" );

  function calculateS(a , b , c){
    return  (a + b + c )/ 2;
  }
  function area(a , b , c){
    let s = calculateS(a, b ,c);

    return Math.sqrt(s * (s - a ) * (s - b) * (s - c));
  }
  let calculateArea = area( 3 , 7 , 9);
  document.write(Math.round(calculateArea));