/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

console.log("online");

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// -----------------------> Per il seguente esercizio possiamo utilizzare *let* o *const* in base alla necessità di lasciare la variabile modificabile
//  in seguito dal programma. Non ravvisando questa necessità utilizzeremo const.

const sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = { name: "Samuel", surname: "Valentini", age: 38 };

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skill = ["JavaScript", "Turbo Pascal"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skill.push("Python");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skill.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.floor(Math.random() * 6 + 1);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => (num1 > num2 ? num1 : num2);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (str) => {
  let array = [];
  if (typeof str === "string") {
    str = str.trim();

    array = str.split(" ");
    if (str !== "") {
      for (i = 0; i < array.length; i++) {
        let word = array[i];

        let newWord = word[0].toUpperCase() + word.slice(1);
        array[i] = newWord;
      }
    }
  } else {
    return array;
  }

  return array;
};

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, bool) => {
  if (bool) {
    str = str.slice(1);
  } else {
    str = str.slice(0, -1);
  }

  return str;
};

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str) => {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      str1 = str1 + str[i];

      // nell'esempio dell'esercizio fornito i due spazi ravvicinati vengono sostituiti con uno solo,
      // modifichiamo la funzione per replicare il comportamento dell'esempio.
    } else if (str[i - 1] === " " && str[i + 1] === " ") {
      i = i + 1;
    }
  }
  return str1;
};

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (str) => {
  if (
    str.includes("@") &&
    str.includes(".", str.indexOf("@")) &&
    str.indexOf("@") === str.lastIndexOf("@") &&
    str.lastIndexOf(".") - str.indexOf("@") > 1 &&
    str.indexOf(".", str.indexOf("@")) - str.indexOf("@") > 1 &&
    str.indexOf("@") !== 0 &&
    str.lastIndexOf(".") !== str.length - 1 &&
    !str.includes(".@") &&
    !str.includes(",") &&
    !str.includes(";") &&
    !str.includes("(") &&
    !str.includes(")") &&
    !str.includes("{") &&
    !str.includes("}") &&
    !str.includes("[") &&
    !str.includes("]") &&
    !str.includes("^") &&
    !str.includes("$") &&
    !str.includes("|") &&
    !str.includes("?") &&
    !str.includes("*") &&
    !str.includes("+") &&
    !str.includes("'") &&
    !str.includes('"') &&
    !str.includes("~") &&
    !str.includes("&") &&
    !str.includes("%") &&
    !str.includes("£") &&
    !str.includes("€") &&
    !str.includes("!") &&
    !str.includes("..")
  ) {
    return true;
  } else {
    return false;
  }
};

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollDice" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollDice(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollDice = (num) => {
  const obj = { sum: 0, values: [] };

  for (let i = 0; i < num; i++) {
    let diceresult = dice();
    obj.sum += diceresult;
    obj.values[i] = diceresult;
  }

  return obj;
};

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, str) => {
  delete obj[str];
  return obj;
};

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = () => {
  let recentYear = parseInt(movies[0].Year);
  let newestMov = movies[0];
  for (let i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > recentYear) {
      recentYear = parseInt(movies[i].Year);
      newestMov = movies[i];
    }
  }

  // valutiamo ora se nell'array ci sono più film prodotti nell'anno identificato
  let counter = 0;
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) === recentYear) {
      counter += 1;
    }
  }

  if (counter === 1) {
    return newestMov;
  } else {
    let arrayOfNewest = [];
    for (let i = 0; i < movies.length; i++) {
      if (parseInt(movies[i].Year) === recentYear) {
        arrayOfNewest.push(movies[i]);
      }
    }
    return arrayOfNewest;
  }
};

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => movies.length;

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
  let arr = [];
  movies.forEach((obj) => {
    arr.push(obj.Year);
  });

  return arr;
};

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
  let arr = [];
  movies.forEach((obj) => {
    // NOTA BENE: -------------------------> il II millennio si considererà finito il 31/12/2000 <-------------------------
    if (parseInt(obj.Year) < 2001) {
      arr.push(obj);
    }
  });
  return arr;
};

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  let sum = 0;
  movies.forEach((obj) => {
    sum += parseInt(obj.Year);
  });
  return sum;
};

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// la funzione sarà case insensitive

const searchByTitle = (str) => {
  let arr = [];
  movies.forEach((obj) => {
    if (obj.Title.toLowerCase().includes(str.toLowerCase())) {
      arr.push(obj);
    }
  });
  return arr;
};

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna
   un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa 
  fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (str) => {
  let match = [];
  let unmatch = [];
  let finalObj = {};

  movies.forEach((obj) => {
    if (obj.Title.toLowerCase().includes(str.toLowerCase())) {
      match.push(obj);
    } else unmatch.push(obj);
  });

  finalObj.match = match;
  finalObj.unmatch = unmatch;

  return finalObj;
};

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito
   privo dell'elemento nella posizione ricevuta come parametro.
*/

// visto che il nome è removeIndex il numero verrà trattato come un indice (posizione = indice) differentemente
// sarebbe sufficiente sottrarre 1 alla posizione o sommare 1 all'indice nel caso in cui posizione 1 venisse condierata di indice 0

const removeIndex = (index) => {
  movies.splice(index, 1);
  return movies;
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

// si forniscono due possibili soluzioni

const containerSelectorId = () => {
  const containerElement = document.getElementById("container");
  return containerElement;
};

const containerSelectorQuery = () => {
  const containerElement = document.querySelector("#container");
  return containerElement;
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const tdSelector = () => {
  const td = document.getElementsByTagName("td");
  return td;
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const tdPrinter = () => {
  const td = document.querySelectorAll("td");
  for (i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const redBackgroundLink = () => {
  const a = document.querySelectorAll("a");
  for (i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = "red";
  }
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const newElementMyList = () => {
  const newLi = document.createElement("li");
  newLi.innerText = "nuovo elemento";
  const myList = document.querySelector("#myList");
  myList.appendChild(newLi);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// se ne propongono 2 versioni: la prima "myListVoider" elimina qualsiasi cosa ci sia nella lista non ordinata con id "myList"
// mentre la seconda "myListLiVoider" elimina selettivamente i tag <li> nella lista non ordinata con id "myList" (preservando
// il div del file di esempio fornito)

const myListVoider = () => (document.querySelector("#myList").innerHTML = "");

const myListLiVoider = () => document.querySelectorAll("#myList li").forEach((li) => li.remove());

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassTestToTr = () => {
  const tr = document.querySelectorAll("tr");
  tr.forEach((trElement) => trElement.classList.add("test"));
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (n) => {
  let branch = "";
  for (let i = 0; i < n; i++) {
    branch += "*";
    console.log(branch);
  }
};

// halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (n) => {
  const rowWidth = 1 + (n - 1) * 2;
  for (let i = 0; i < n; i++) {
    let numberAsterisk = 1 + 2 * i;
    let numberSpaces = (rowWidth - numberAsterisk) / 2;
    let branch = "";
    for (let l = 0; l < numberSpaces; l++) {
      branch += " ";
    }
    for (let m = 0; m < numberAsterisk; m++) {
      branch += "*";
    }
    for (let n = 0; n < numberSpaces; n++) {
      branch += " ";
    }

    console.log(branch);
  }
};

tree(10);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (num) => {
  let dividers = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }

  if (dividers[0] === 1 && dividers[1] === num) {
    return true;
  } else {
    return false;
  }
};

// console.log(isItPrime(100003));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
