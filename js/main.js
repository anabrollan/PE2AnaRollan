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

let books = [];

while (true) {
    let author = "";
    let title = "";
    let date = "";

    do {
        author = prompt("Ingresa el autor del libro (o escribe 'salir' para terminar):");
        if (author === null) author = ""; 
    } while (author === "" && author.toLowerCase() !== "salir");
    if (author.toLowerCase() === "salir") break;

    do {
        title = prompt("Ingresa el título del libro (o escribe 'salir' para terminar):");
        if (title === null) title = ""; 
    } while (title === "" && title.toLowerCase() !== "salir");
    if (title.toLowerCase() === "salir") break;

    do {
        date = prompt("Ingresa la fecha de hoy (DD-MM-AAAA):");
        if (date === null) date = ""; 
    
        if (date !== "") {
            if (date.length !== 10 || date[2] !== '-' || date[5] !== '-') {
                alert("Formato de fecha no válido. Por favor, usa el formato DD-MM-AAAA.");
                date = ""; 
            }
        }
    } while (date === "" && date.toLowerCase() !== "salir");
    if (date.toLowerCase() === "salir") break;
    
    
    let finished = confirm("¿Has terminado de leer el libro? (OK = sí, Cancelar = no)");

    let newBook = new Book(author, title, date, finished);
    books.push(newBook);

    alert("Libro agregado: " + title + " de " + author);
}

console.log("Lista de libros:");
console.log(books);
