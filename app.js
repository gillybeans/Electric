/* FORMULÄR */

  // Open the full screen form
  function openForm() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  // Close the full screen form
  function closeForm() {
    document.getElementById("myOverlay").style.display = "none";
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

AOS.init({
                duration: 1200,
            })