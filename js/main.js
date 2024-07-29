let userName;
do {
  userName = prompt("Por favor, ingresa tu nombre:");
} while (userName === "");

alert("¡Hola, " + userName + "! Te doy la bienvenida a esta aplicación de seguimiento de lecturas :)");

console.log(userName);

function Book(author, title, date, finished) {
    this.author = author;
    this.title = title;
    this.date = date;
    this.finished = finished;
  }
  
  const newBook = new Book(
    prompt("Ingresa el autor del libro:"),
    prompt("Ingresa el título del libro:"),
    prompt("Ingresa la fecha de hoy"),
    confirm("¿Has terminado de leer el libro? (OK = sí, Cancelar = no)")
  );

  const finish = "salir";
  
  console.log(newBook); 

  do {
    newBook;
  } while (newBook === null);