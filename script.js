//  Question 1

 document.write("<h1>" + "Question 1" + "</h1>" );

  function power( a, b){
    let result = 1;
    let i = 1;
    while(i <= b){
        result = result *a;
        i++;
    }
    return result;
  }
  let answer = power(2,5);
  document.write(answer);