//  Question 1

document.write("<h1>" + "Question 1" + "</h1>");


function power(a, b) {
    let result = 1;
    let i = 1;
    while (i <= b) {
        result = result * a;
        i++;
    }
    return result;
}
let answer = power(2, 3);
document.write(answer);

//   Question 2 

document.write("<h1>" + "Question 2" + "</h1>");


function leap(year) {
    if (year % 4 == 0) {
        return "The year is leap year";
    }
    else {
        return "The year is  not leap year";
    }

}
let inputyear = +prompt("Enter any year");
document.write(leap(inputyear));

//    Question 3 

document.write("<h1>" + "Question 3" + "</h1>");

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}
function area(a, b, c) {
    let s = calculateS(a, b, c);

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
let calculateArea = area(3, 7, 9);
document.write(Math.round(calculateArea));

//   Question 4 

document.write("<h1>" + "Question 4" + "</h1>");

function average(sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3) / 3;
}
function percentage(sub1, sub2, sub3) {
    let totalMarks = 500;
    let obtainedMarks = sub1 + sub2 + sub3;
    return (obtainedMarks / totalMarks) * 100;
}

function mainFunction() {
    let subject1 = parseInt(prompt("Enter subject 1 marks"));
    let subject2 = parseInt(prompt("Enter subject 2 marks"));
    let subject3 = parseInt(prompt("Enter subject 3 marks"));

    let avg = average(subject1, subject2, subject3);
    let per = percentage(subject1, subject2, subject3);

    document.write("Average Marks:" + avg + "<br>");
    document.write("Percentage" + per + "%");
}
mainFunction();

//  Question 5 

document.write("<h1>" + "Question 5" + "</h1>");


function index(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return -1;
}

let result = index("hello", "o");
document.write(result);

//  Question 6 

document.write("<h1>" + "Question 6" + "</h1>");

function Vowel(sentence) {
    let count = 0;
    let i = 0;
    while (i < sentence.length - 1) {
        switch (sentence[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                if (sentence[i + 1] == "a" ||
                    sentence[i + 1] == "e" ||
                    sentence[i + 1] == "i" ||
                    sentence[i + 1] == "o" ||
                    sentence[i + 1] == "u"
                ){
                    count++;
                }
                break;
        }
        i++;
    }
    return count;
}
 let resultSentence = "pleases read this application and give me gratuity";

  document.write(resultSentence + "<br>");
 document.write("Occurrences = " + Vowel(resultSentence));