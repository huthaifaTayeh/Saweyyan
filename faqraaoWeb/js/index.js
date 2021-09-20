let path = window.location.pathname;
let currentPage = path.split("/").pop();

let credintials = {
  userName: "hithaifa@gmail.com",
  password: "Te$tingPs$w0rd_123",
};
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
    Render Public Groups and joined groups
*/

if (currentPage === "groups.html") {
  console.log("hey we're here!");
  let pubGroupsContainer = document.querySelector(".horizontal-scroll-wrapper");
  let joinedGroupsContainer = document.querySelector(
    ".joined-groups-container"
  );
  //   let pubGroupsViews = document.getElementsByClassName("group-view-block");
  //   let joinedGroupsViews = document.getElementsByClassName("joind-groups-items");

  function newPublicGroup(groupName, imgURL, groupDescription) {
    let imgNode = document.createElement("img");
    imgNode.src = imgURL;
    imgNode.alt = `${groupName}-icon`;
    let nameNode = document.createElement("h5");
    nameNode.innerHTML = groupName;
    let descriptionNode = document.createElement("p");
    descriptionNode.innerHTML = groupDescription;
    let publicGroup = document.createElement("div");
    publicGroup.className = "group-view-block";
    publicGroup.appendChild(imgNode);
    publicGroup.appendChild(nameNode);
    publicGroup.appendChild(descriptionNode);
    pubGroupsContainer.appendChild(publicGroup);
  }
  function newJoinedGroup(groupName, imgURL, groupDescription) {
    let imgNode = document.createElement("img");
    imgNode.src = imgURL;
    imgNode.alt = `${groupName}-icon`;
    let nameNode = document.createElement("h5");
    nameNode.innerHTML = groupName;
    let descriptionNode = document.createElement("p");
    descriptionNode.innerHTML = groupDescription;
    let publicGroup = document.createElement("div");
    publicGroup.className = "joind-groups-items";
    publicGroup.appendChild(imgNode);
    publicGroup.appendChild(nameNode);
    publicGroup.appendChild(descriptionNode);
    joinedGroupsContainer.appendChild(publicGroup);
  }

  newPublicGroup(
    "Testing Group",
    "/FaqraouWeb/images/logo.png",
    "This is a testing group"
  );
  newJoinedGroup(
    "جروب للتجريب",
    "/FaqraouWeb/images/group_icon.png",
    "هذه المجموعة للتجربة"
  );
}

if (currentPage === "login.html") {
  document
    .getElementById("login-submit-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Its working");
      if (
        document.querySelector("input[name='email']").value ===
        credintials.userName
      ) {
        if (
          document.querySelector("input[name='password").value ===
          credintials.password
        ) {
          window.location.href = "http://127.0.0.1:5500/FaqraouWeb/home.html";
        }
      }
      window.alert(
        "The entered username or password are invalid please check and re-enter them correctly"
      );
    });
}
function login() {
  fetch("https://faqraou.com/api/v1/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "testerror@saweyyan.com",
      password: "123456",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
