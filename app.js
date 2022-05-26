const btnE = document.getElementById("btn");
const divE = document.getElementById("img-div");
const inpE = document.getElementById("input");
const avatarE = document.getElementById("avatar");
const followersE = document.getElementById("followers");
const followingE = document.getElementById("following");

class onGetUser {
  endpoint = "https://api.github.com/users/";
  getUser(login) {
    return fetch(this.endpoint + login).then((r) => r.json());
  }
}

const gitHubUser = new onGetUser();
btnE.addEventListener("click", onSearch);

function onSearch(e) {
  gitHubUser
    .getUser(inpE.value)
    .then((u) => {
      user = u;
      console.log(u);
      renderUser(user);
    })
    .catch((e) => {
      console.log("ERROR");
    });
}

function renderUser(user) {
  divE.innerHTML = `Public Repositories: ${user.public_repos}`;
  avatarE.innerHTML = `Avatar URL:${user.avatar_url}`;
  followersE.innerHTML = `Followers:${user.followers}`;
  followingE.innerHTML = `Following:${user.following}`;
}

// function renderError(e) {
//   divE.innerHTML = user.repos_url;
// }
