'use strict';

let intervalBool;
var month, day, year, hour, minutes, seconds;
const firstH1 = document.getElementById('firstH1')
const bodyDoc = document.getElementsByTagName('body')
firstH1.append('Exercises');
const clockHead = document.body.insertBefore(document.createElement("h3"), document.getElementById('myDiv'));
clockHead.append('Clock')


function dateUpdate(){
    var today = new Date();
    [month, day, year] = [today.getMonth(), today.getDay(), today.getFullYear()];
    [hour, minutes, seconds] = [today.getHours(), today.getMinutes(), today.getSeconds()];
    var dateTime = document.getElementById('myDiv');
    dateTime.innerHTML = ''
    dateTime.innerHTML = (month+'/'+day+'/'+year+' '+hour+':'+minutes+':'+seconds)
    setInterval(dateUpdate, 1000);
}
dateUpdate();

const inputLeapYear = document.getElementById('myDiv2');
const leapHead = document.body.insertBefore(document.createElement("h3"), inputLeapYear)
leapHead.append('Leap year')
var inputField = inputLeapYear.appendChild(document.createElement("input"));
var submitButton = inputLeapYear.appendChild(document.createElement("button"))
var textField = inputLeapYear.appendChild(document.createTextNode(""))
submitButton.style.height = 25+"px";
submitButton.style.width = 70+"px";
submitButton.innerHTML = "Submit"
submitButton.style.marginLeft = 10+"px";
inputField.setAttribute("id", "input-field")
submitButton.setAttribute("onclick", "isLeapyear()")
// textField.style.height = 25+"px";
// textField.style.width = 150+"px";
inputLeapYear.setAttribute("type", "text");
// inputLeapYear.addEventListener(Event, isLeapyear())


 function isLeapyear(){
    var yearInput = parseInt(document.getElementById('input-field').value)
    //console.log(yearInput);
    if((yearInput % 4 == 0) && (yearInput % 100 != 0) || (yearInput % 400 == 0)){
        textField.replaceData(0, 100, "your year is a leap year")
    }
    else{
        textField.replaceData(0, 100, "your year is not a leap year") 
    }
}
var myDiv3 = document.body.insertBefore(document.createElement('div'), document.getElementById('script'))
myDiv3.setAttribute("id", "ex3")

var ex3Header = document.createElement("h4");
myDiv3.appendChild(ex3Header)
ex3Header.innerHTML = "check if Jan 1st is sunday in year"
var ex3Input = myDiv3.appendChild(document.createElement("input"));
ex3Input.setAttribute("id", "ex3-input")
var ex3Button = document.createElement("button")
myDiv3.appendChild(ex3Button)
ex3Button.setAttribute("onclick", "checkDay()")
ex3Button.style.height = 25+"px";
ex3Button.style.width = 70+"px";
ex3Button.innerHTML = "Submit";
ex3Button.style.marginLeft = 10+"px";
var ex3TextField = myDiv3.appendChild(document.createTextNode(""));



function checkDay(){
    var ex3InputVal = parseInt(document.getElementById('ex3-input').value)
    //console.log(ex3InputVal)
    const checkSunday = new Date(ex3InputVal+"-01-01")
if(checkSunday.getDay() == 0){
    ex3TextField.replaceData(0, 100, "the 1st of January was a sunday that year")
} else {
    ex3TextField.replaceData(0, 100, "the 1st of January was not a sunday that year")
}
}

var ex4Div = document.body.insertBefore(document.createElement('div'), document.getElementById('script'));
ex4Div.setAttribute("id", "ex4");
var ex4Header = document.createElement("h3");
ex4Div.appendChild(ex4Header);
ex4Header.innerHTML = "Guessing game 1-10";
var ex4Input = document.createElement("input");
ex4Div.appendChild(ex4Input);
var ex4SubmitButton = document.createElement("button");
ex4Div.appendChild(ex4SubmitButton);
ex4SubmitButton.style.height = 25+"px";
ex4SubmitButton.style.width = 70+"px";
ex4SubmitButton.style.marginLeft = 10+"px";
ex4SubmitButton.innerHTML = "Submit"
ex4SubmitButton.setAttribute("onclick", "GuessGame()")
var ex4TextNode = document.createTextNode("")
ex4Div.appendChild(ex4TextNode);

function GuessGame(){
    var randomNumber = Math.floor(Math.random() * 11);
if(parseInt(ex4Input.value) == randomNumber){
    ex4TextNode.replaceData(0, 100, "Congratulations, you won!")
} else {
    ex4TextNode.replaceData(0, 100, `Sorry, you lost. The number was ${randomNumber}`)
}
}