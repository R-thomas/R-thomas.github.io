let table = [
  "2*2",
  "2*3",
  "2*4",
  "2*5",
  "2*6",
  "2*7",
  "2*8",
  "2*9",
  "2*10",

  "3*2",
  "3*3",
  "3*4",
  "3*5",
  "3*6",
  "3*7",
  "3*8",
  "3*9",
  "3*10",

  "4*2",
  "4*3",
  "4*4",
  "4*5",
  "4*6",
  "4*7",
  "4*8",
  "4*9",
  "4*10",

  "2/2",
  "4/2",
  "6/2",
  "8/2",
  "10/2",
  "12/2",
  "14/2",
  "16/2",
  "18/2",
  "20/2",

  "3/3",
  "6/3",
  "9/3",
  "12/3",
  "15/3",
  "18/3",
  "21/3",
  "24/3",
  "27/3",
  "30/3",

  "4/4",
  "8/4",
  "12/4",
  "16/4",
  "20/4",
  "24/4",
  "28/4",
  "32/4",
  "36/4",
  "40/4"
]

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

let counterTrue = 0;
let counterFalse = 0;


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
  result.innerHTML = `Правильных ответов - ${counterTrue},<br/>Неправильных ответов - ${counterFalse}`;
} else {
  timerSub();
  document.getElementById('answer').style.backgroundColor = "red";
  document.getElementById('answer').style.color = "white";
  counterFalse++;
  this.answer.value = "";
  this.answer.focus();
  result.innerHTML = `Правильных ответов - ${counterTrue},<br/> Неправильных ответов - ${counterFalse}`;
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