function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function openFormTwo() {
    document.getElementById("myFormTwo").style.display = "block";
  }
  
  function closeFormTwo() {
    document.getElementById("myFormTwo").style.display = "none";
  }


/* CHOOSE COLOR */

const products=document.querySelector(".pick-color-img").children;
   
function changeImage(event){
    document.querySelector(".pro-img").src=event.children[0].src
    
    for(let i=0; i<products.length;i++){
        products[i].classList.remove("active");
    }
    event.classList.add("active");
  }