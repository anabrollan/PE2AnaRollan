const newBook = {}

newBook.author = prompt("Ingresa el autor del libro:");
newBook.title = prompt("Ingresa el título del libro:");
newBook.date = prompt("Ingresa la fecha de hoy");
newBook.finished = confirm("¿Has terminado de leer el libro? (OK = sí, Cancelar = no)");

console.log(newBook);