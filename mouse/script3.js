var elem = document.querySelectorAll(".elem")



elem.forEach(function(ans){
  
    ans.addEventListener("mouseenter",function(){
        ans.childNodes[3].style.opacity = 1
     });
      ans.addEventListener("mouseleave",function(){
      ans.childNodes[3].style.opacity = 0
    });
    ans.addEventListener("mousemove",function(dets){
     ans.childNodes[3].style.left = dets.x+"px"
     ans.childNodes[3].style.top= dets.y+ "px";
    });
})
