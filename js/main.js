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
  
  console.log(newBook);