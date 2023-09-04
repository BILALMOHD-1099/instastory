var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

// crsr.style.backgroundColor ="green"
main.addEventListener("mousemove",function(ans){
   crsr.style.left = ans.x+"px"
   crsr.style.top = ans.y+"px"

})
