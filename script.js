const title_logo = document.querySelector(".text");
title_logo.innerHTML = title_logo.textContent.replace(/\S/g,"<span>$&</span>");
const ele = document.querySelectorAll("span");
for(var i = 0; i < ele.length; i++){
   ele[i].style.transform = "rotate("+ i * 12.3+"deg)";
}

function clickMenu(){
   items.style.display = "block" ;
}