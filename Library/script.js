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

 addBooktoLibrary("Lord of the Rings", " J.R.R Tolkien", 600, false);
 addBooktoLibrary("1984", "George Orwell", 425, true);
 addBooktoLibrary("Shadow of the Wind", "Carlos Luis Zafon", 350, true)

 
 const container = document.querySelector(".container")
 let calls  = 1;
 function displayBooks(){

    
   if(calls === 1){
    for(let i = 0; i < library.length; i++){

        const div = document.createElement("div");
        div.classList.add("book");
        div.innerHTML = "<h1>" + library[i].name + "</h1> by " + library[i].author + "<br> <br>pages: " + library[i].no_of_pages;
        container.appendChild(div);
    }
    calls++;
    }
    else{
       let i = library.length - 1;
       const div = document.createElement("div");
        div.classList.add("book");
        div.innerHTML = "<h1>" + library[i].name + "</h1> by " + library[i].author + "<br> <br>pages: " + library[i].no_of_pages;
        container.appendChild(div);
        calls++;
    }
    
 }
 displayBooks();

 
const dialog = document.querySelector(".addbook");
const newbook = document.querySelector(".newBook");
const closeButton = document.querySelector(".closeButton");
const submitButton = document.querySelector(".submit")


newbook.addEventListener("click", ()=>{
    
    dialog.showModal();
})

closeButton.addEventListener("click", ()=> {
    dialog.close();
})



  submitButton.addEventListener("click", (event) => {

    event.preventDefault();
    
    const formName = document.querySelector("#name");
    const formAuthor = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("input[ type = 'radio']:checked ")
    console.log(formName.value);
    console.log(formAuthor.value);
    console.log(pages.value);
    console.log(read.value);

    dialog.close(addBooktoLibrary(formName.value, formAuthor.value, pages.value, read.value));
     displayBooks();

  });
  
   
  