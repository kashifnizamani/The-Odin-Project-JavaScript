
const div = document.querySelector(".imagediv");
const dots = document.querySelectorAll(".dot");
const image  = document.createElement("img");
image.src = "images/image_1.jpg";
image.setAttribute("id", "1");
image.classList.add("image");
activateDot(1);

const left = document.createElement("button");

left.classList.add("left");
left.textContent = "<";

const right = document.createElement("button");
right.classList.add("right");
right.textContent = ">";
div.appendChild(left);
div.appendChild(right);

div.appendChild(image);


function next(){

    
   let imgNO =  image.getAttribute("id");
   if(imgNO == 4){
       imgNO = 0;
   }
  


   div.innerHTML = "";
   image.src = `images/image_${Number(imgNO) + 1}.jpg`;
   image.setAttribute("id", Number(imgNO) + 1);
   activateDot(Number(imgNO) + 1);
   div.appendChild(left);
   div.appendChild(right);
   div.appendChild(image);
   

}



function previous(){

    
   let imgNO =  image.getAttribute("id");
   if(imgNO == 1){
      imgNO = 5;
   }
   


   div.innerHTML = "";
   image.src = `images/image_${Number(imgNO) - 1}.jpg`;
   image.setAttribute("id", Number(imgNO) - 1);
      activateDot(Number(imgNO) - 1);

   div.appendChild(left);
   div.appendChild(right);
   div.appendChild(image);
   

}

function activateDot(id){
    dots.forEach(dot =>{
        dot.classList.remove("active");
        if(dot.getAttribute("data-id") == id)
            dot.classList.add("active")
    })
}

right.addEventListener("click", next);
left.addEventListener("click", previous);


dots.forEach(dot => {
    dot.addEventListener("click", (e)=>{
    const clickedDot = e.target.getAttribute("data-id");

     div.innerHTML = "";
   image.src = `images/image_${clickedDot}.jpg`;
   image.setAttribute("id", clickedDot);
      activateDot(clickedDot);

   div.appendChild(left);
   div.appendChild(right);
   div.appendChild(image);

    })
})

setInterval(next, 5000);