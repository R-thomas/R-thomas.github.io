let table = [];
for (let i = 2; i < 6; i++) {
  for (let j = 2; j <= 10; j++) {
    table.push(`${i}*${j}`);
    table.push(`${i*j}/${j}`);
  }
}


function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
let j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}

shuffle(table);


function taskRun(){
for(let i = table.length - 1; i > 0; i--){
return table[i];
}
}

function changeLabel(resultTask){
let label1 = document.querySelector(`[for="answer"]`);
label1.innerHTML = resultTask;
}

let resultTask = taskRun();
changeLabel(resultTask.replace("/", ":"));

let counterFalseExamples = 0;
let counterTrue = 0;
let counterFalse = 0;
let arrayFalseExamples = {};


document.forms.publish.addEventListener("submit", function (event) {
event.preventDefault();
let message = document.getElementById('answer').value;
let result = document.getElementById('result');
if(message == eval(resultTask)) {
  timerSub();
  //document.body.style.backgroundColor = "green";
  document.getElementById('answer').style.backgroundColor = "#26D709";
  document.getElementById('answer').style.color = "white";
  setTimeout(() => {
      //document.body.style.backgroundColor = "white";
      document.getElementById('answer').style.backgroundColor = "white";
      document.getElementById('answer').style.color = "black";
  }, 600);
  counterTrue++;
  result.innerHTML = `Правильных ответов - ${counterTrue}<br/>Неправильных ответов - ${counterFalse}<br/>Ошибочных примеров - ${counterFalseExamples}`;
} else {
  timerSub();
  document.getElementById('answer').style.backgroundColor = "red";
  document.getElementById('answer').style.color = "white";
  counterFalse++;
  arrayFalseExamples[resultTask] = 0;
  let i = 0;
  for (key in arrayFalseExamples) {
    i++;
  }
  counterFalseExamples = i;
  table.push(resultTask, resultTask, resultTask);
  this.answer.value = "";
  this.answer.focus();
  result.innerHTML = `Правильных ответов - ${counterTrue}<br/> Неправильных ответов - ${counterFalse}<br/>Ошибочных примеров - ${counterFalseExamples}`;
  return;
}
this.answer.value = "";
this.answer.focus();
shuffle(table);
resultTask = taskRun();
changeLabel(resultTask.replace("/", ":"));
});

function timerSub(clear) {

// Set the date we're counting down to
var countDownDate = new Date().getTime() +20*1000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  var seconds = Math.round((distance % (1000 * 60)) / 20);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = seconds + "s ";
  document.getElementById("demo").value = seconds;
  document.forms.publish.addEventListener("submit", function (event) {
      clearInterval(x);
  });
  
  // If the count down is over, write some text 
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Время вышло";
      let event = new Event("submit");
      document.forms.publish.dispatchEvent(event);
  }
}, 20);
}

timerSub();