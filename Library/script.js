const library = [];

function Book(name, author, no_of_pages, isRead){

    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.no_of_pages = no_of_pages;
    this.isRead = isRead;
}

 function addBooktoLibrary(name, author, no_of_pages, isRead){

    const book = new Book(name, author, no_of_pages, isRead);
    library.push(book);
 }

 addBooktoLibrary("hobbit", "tolkien", 300, false);
 addBooktoLibrary("1984", "george orwell", 425, true);
 addBooktoLibrary("Shadow of the wind", "Carlos Luis Zafon", 350, true)

 console.log(library)