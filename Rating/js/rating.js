const start=document.querySelector(".ratting").children;

let contador;

for(let i=0;i<start.length;i++){

  start[i].addEventListener("mouseover", function(){

for(let j=0;j<start.length;j++){
start[j].classList.remove("fa-star");
start[j].classList.add("fa-star-o");
}
for(let y=0;y<=i;y++){
  start[y].classList.remove("fa-star-o");
  start[y].classList.add("fa-star");
  
  }
  });
  
  start[i].addEventListener("mouseout", function(){
    for(let j=0;j<start.length;j++){
      start[j].classList.remove("fa-star");
      start[j].classList.add("fa-star-o");
      }
      for(let y=0;y<=i;y++){
        start[y].classList.remove("fa-star-o");
        start[y].classList.add("fa-star");
         
        }}); 

window.addEventListener("click", function(e) { 
        
 if(!document.getElementById("ratting").contains(e.target)) { 
 
  for(let j=0;j<start.length;j++){
    start[j].classList.remove("fa-star");
   
    }
    for(let y=0;y<=i;y++){
     
      start[y].classList.add("fa-star-o");
       
    }
  
 

 }
});

}