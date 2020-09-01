const start=document.querySelector(".ratting").children;


for(let i=0;i<start.length;i++){

  start[i].addEventListener("mouseover", function(){

for(let j=0;j<start.length;j++){
start[j].classList.remove("fa-star");
start[j].classList.add("fa-star-o");
}
for(let j=0;j<=i;j++){
  start[j].classList.remove("fa-star-o");
  start[j].classList.add("fa-star");

  }
  })
 
}