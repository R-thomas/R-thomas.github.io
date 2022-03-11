
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
    "15*3",
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

//   table.forEach(function(item, i, arr) {
//     let result = prompt(item.replace("/", ":"), 0);
//     if(+result == eval(item)) {
//         alert ('Правильно')
//     } else {
//         alert (`Неправильно!!! Правильный ответ - ${eval(item)}`);
//     }
//   });

  for(let i=0; table.length -1; i++){
    let result = prompt(table[i].replace("/", ":"), 0);
    if (result === null) break;
    if(+result == eval(table[i])) {
        alert ('Правильно')
    } else {
        alert (`Неправильно!!! Правильный ответ - ${eval(table[i])}`);
    }
  }

