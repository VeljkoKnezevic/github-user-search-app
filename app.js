// const fetchData = async () => {
//   const response = await fetch("https://api.github.com/users/octocat", {
//     mode: "cors",
//     headers: {
//       Authorization: "Token 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",
//     },
//   });
//   const data = await response.json();

//   return data;
// };

// const populateData = (() => {
//   const user = document.querySelector(".user");

//   const profilePicture = user.children[0].children[0];
//   const name = user.children[0].children[1];
//   const at = user.children[0].children[2];
//   const date = user.children[0].children[3];

//   const repos = user.children[2].children[0];
//   const followers = user.children[2].children[1];
//   const following = user.children[2].children[2];

//   const location = user.children[3].children[0];
//   const blog = user.children[3].children[1];
//   const twitter = user.children[3].children[2];
//   const company = user.children[3].children[3];

//   fetchData().then((response) => {
//     profilePicture.src = response.avatar_url;
//     name.textContent = response.name;
//     at.textContent = `@${response.login}`;
//     const responseDate = new Date(response.created_at).toDateString();
//     date.textContent = `Joined
//     ${responseDate.substring(8, 10)}
//      ${responseDate.substring(4, 7)}
//       ${responseDate.substring(10, 15)}`;

//     repos.textContent = response.public_repos;
//     followers.textContent = response.followers;
//     following.textContent = response.following;

//     location.textContent = response.location;
//     blog.textContent = response.blog;
//     twitter.textContent = response.twitter_username;
//     company.textContent = response.company;
//   });
// })();
