let userName;
do {
userName = prompt("Por favor, ingresa tu nombre:");
} while (userName === "" || userName === null);

alert("¡Hola, " + userName + "! Te doy la bienvenida a esta aplicación de seguimiento de lecturas :)");

console.log(userName);

class Book {
    constructor(author, title, date, finished) {
        this.author = author;
        this.title = title;
        this.date = date;
        this.finished = finished;
    }
}

let author, title, date, finished;

do {
    author = prompt("Ingresa el autor/-a del libro");
} while (author === "" || author === null);

do {
    title = prompt("Ingresa el título del libro");
} while (title === "" || title === null);

do {
    date = prompt("Ingresa la fecha de hoy");
} while (date === "" || date === null);

finished = confirm("¿Has terminado de leer el libro? (OK = sí, Cancelar = no)");

let newBook = new Book(author, title, date, finished);

console.log(newBook);



let finish = "salir";

console.log(newBook); 

do {
    newBook;
} while (newBook === null);