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

 addBooktoLibrary("Lord of the Rings", " J.R.R Tolkien", 300, false);
 addBooktoLibrary("1984", "George Orwell", 425, true);
 addBooktoLibrary("Shadow of the Wind", "Carlos Luis Zafon", 350, true)

 console.log(library)

 function displayBooks(){

    const container = document.querySelector(".container")

    for(let i = 0; i < library.length; i++){

        const div = document.createElement("div");
        div.classList.add("book");
        div.innerHTML = "<h1>" + library[i].name + "</h1> by " + library[i].author + ". pages: " + library[i].no_of_pages;
        

        container.appendChild(div);
        

    }
 }

 displayBooks();