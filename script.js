var istatus = document.querySelector("h5");

var btn = document.querySelector("#add");

// var removeFriend = document.querySelector("#remove");
var flag = 0
btn.addEventListener("click", function () {
    if(flag===0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        // console.log("hui hui hui")
        btn.innerHTML="Remove Friend"
        flag=1
    }else{
        istatus.innerHTML = "Cricketer";
        istatus.style.color = "red";
        // console.log("hui hui hui")
        btn.innerHTML="Add Friend"
        flag=0
    }
 
});

// removeFriend.addEventListener("click", function () {
//   istatus.innerHTML = "Cricketer";

//   istatus.style.color = "red";
// });
