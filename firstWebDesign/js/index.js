/*
    Profiles rendering
*/

let userName = "حذيفة تايه";
let imgURL = "/FaqraouWeb/images/user.png";
var imageContainer = document.getElementById("pro-img-con");
imageContainer.querySelector("img").src = imgURL;
imageContainer.querySelector("h1").innerHTML = userName;
