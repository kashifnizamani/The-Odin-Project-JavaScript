
const div = document.querySelector(".imagediv");
const image  = document.createElement("img");
image.src = "images/image_1.jpg";
image.setAttribute("id", "1");
image.classList.add("image");

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

    
   const imgNO =  image.getAttribute("id");
   if(imgNO == 4){
    return;
   }
   else{


   div.innerHTML = "";
   image.src = `images/image_${Number(imgNO) + 1}.jpg`;
   image.setAttribute("id", Number(imgNO) + 1);
   div.appendChild(left);
   div.appendChild(right);
   div.appendChild(image);
   }

}



function previous(){

    
   const imgNO =  image.getAttribute("id");
   if(imgNO == 1){
    return;
   }
   else{


   div.innerHTML = "";
   image.src = `images/image_${Number(imgNO) - 1}.jpg`;
   image.setAttribute("id", Number(imgNO) - 1);
   div.appendChild(left);
   div.appendChild(right);
   div.appendChild(image);
   }

}

right.addEventListener("click", next);
left.addEventListener("click", previous);
