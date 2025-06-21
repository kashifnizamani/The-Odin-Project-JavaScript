const container = document.querySelector(".container")
const dialog = document.querySelector(".addbook");
const newbook = document.querySelector(".newBook");
const closeButton = document.querySelector(".closeButton");
const submitButton = document.querySelector(".submit");
let calls  = 0;
const library = [];

class Book{

    constructor(name, author, no_of_pages, isRead){


    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.no_of_pages = no_of_pages;
    this.isRead = isRead;
    
    }
     static addBooktoLibrary(name, author, no_of_pages, isRead){
   
        const book = new Book(name, author, no_of_pages, isRead);
        library.push(book);
       
        
     }

    toggleReadBtn(){

        if(this.isRead)
           this.isRead = false;
        else 
          this.isRead = true;
        return this.isRead;
        
    
      }

    static displayBooks(){

    
        if(!calls){
         for(let i = 0; i < library.length; i++){
     
             const div = document.createElement("div");
             div.classList.add("book");
             div.setAttribute("data-id", library[i].id);
     
             const removebookbtn = document.createElement("button");
             removebookbtn.textContent = "X";
             removebookbtn.classList.add("remove");
     
             const togglebtn = document.createElement("button");
             togglebtn.textContent = (library[i].isRead)? "Read" : "Not Read";
             togglebtn.classList.add("toggle")
             
             const btncontainer = document.createElement("div");
             btncontainer.classList.add("btnContainer");
     
             div.innerHTML = "<h1>" + library[i].name + "</h1> by " + library[i].author + "<br> <br>pages: " + library[i].no_of_pages + "<br>";
             
             btncontainer.appendChild(removebookbtn);
             btncontainer.appendChild(togglebtn);
             div.appendChild(btncontainer);
             container.appendChild(div);
     
             removebookbtn.addEventListener("click", ()=>{
                 const removedDiv = removebookbtn.parentNode.parentNode;
                  const divID = removedDiv.getAttribute("data-id");
                  if(library[i].id === divID)
                     removedDiv.remove();
             })
     
             togglebtn.addEventListener("click", ()=>{
                
                 if(library[i].toggleReadBtn())
                     togglebtn.textContent = "Read";
                 else
                     togglebtn.textContent = "Not Read";
                 
                 
             });
     
     
         }
         calls++;
         }
         else{
            let i = library.length - 1;
            const div = document.createElement("div");
             div.classList.add("book");
             div.setAttribute("data-id", library[i].id);
     
             const removebookbtn = document.createElement("button");
             removebookbtn.textContent = "X";
             removebookbtn.classList.add("remove");
             
             const togglebtn = document.createElement("button");
             togglebtn.textContent = (library[i].isRead)? "Read" : "Not Read";
             togglebtn.classList.add("toggle")
             
             const btncontainer = document.createElement("div");
             btncontainer.classList.add("btnContainer");
     
             div.innerHTML = "<h1>" + library[i].name + "</h1> by " + library[i].author + "<br> <br>pages: " + library[i].no_of_pages + "<br>";
             
             btncontainer.appendChild(removebookbtn);
             btncontainer.appendChild(togglebtn);
             div.appendChild(btncontainer);
             container.appendChild(div);
     
             removebookbtn.addEventListener("click", ()=>{
                 const removedDiv = removebookbtn.parentNode.parentNode;
                  const divID = removedDiv.getAttribute("data-id");
                  if(library[i].id === divID)
                     removedDiv.remove();
         
             })
     
             togglebtn.addEventListener("click", ()=>{
                
                 if(library[i].toggleReadBtn())
                     togglebtn.textContent = "Read";
                 else
                     togglebtn.textContent = "Not Read";
                 
                 
             });
     
     
             calls++;
         }
       
     
         
       
         
      }
}



 Book.addBooktoLibrary("Lord of the Rings", " J.R.R Tolkien", 600, false);
 Book.addBooktoLibrary("1984", "George Orwell", 425, true);
 Book.addBooktoLibrary("Shadow of the Wind", "Carlos Luis Zafon", 350, true)

 
 
 


 Book.displayBooks();

 



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
 
    dialog.close(Book.addBooktoLibrary(formName.value, formAuthor.value, pages.value, read.value));
    Book.displayBooks();

  });


