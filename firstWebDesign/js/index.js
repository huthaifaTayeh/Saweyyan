let path = window.location.pathname;
let currentPage = path.split("/").pop();
console.log(currentPage);
// /*
//     Profiles rendering
// */

if (currentPage === "profile.html") {
  let userName = "حذيفة تايه";
  let imgURL = "/FaqraouWeb/images/user.png";
  var imageContainer = document.getElementById("pro-img-con");
  imageContainer.querySelector("img").src = imgURL;
  imageContainer.querySelector("img").alt = `${userName}'s imge `;
  imageContainer.querySelector("h1").innerHTML = userName;
}
/* 
    Render Public Groups
*/
if (currentPage === "groups.html") {
  let groupName = " اسم المجموعة";
  let groupDescription =
    "لوريم ايبسوم هو نموذج فتراضي يوضع في التصاميم لتعرض على العميل ليتصور";
  let groupImgSrc = "/FaqraouWeb/images/group_icon.png";
  let pubGroupsViews = document.getElementsByClassName("group-view-block");
  for (let group = 0; group < pubGroupsViews.length; group++) {
    pubGroupsViews[group].querySelector("img").src = groupImgSrc;
    pubGroupsViews[group].querySelector("img").alt = `${groupName} icon`;
    pubGroupsViews[group].querySelector("h5").innerHTML = groupName;
    pubGroupsViews[group].querySelector("p").innerHTML = groupDescription;
  }
}
