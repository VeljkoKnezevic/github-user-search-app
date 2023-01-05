const fetchData = async () => {
  const response = await fetch("https://api.github.com/users/octocat", {
    mode: "cors",
    headers: {
      Authorization: "Token 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",
    },
  });
  const data = await response.json();

  return data;
};

const NotAvailableStyling = (element) => {
  element.textContent = "Not Available";
  element.parentElement.style.opacity = "0.5";
};

const populateData = (() => {
  const profilePictureDesktop = document.querySelector(
    ".user__picture__desktop"
  );
  const profilePicture = document.querySelector(".user__info__picture");
  const name = document.querySelector(".user__info__name");
  const at = document.querySelector(".user__info__at");
  const date = document.querySelector(".user__info__date");

  const bio = document.querySelector(".user__bio");

  const repos = document.querySelector(".user__stats__repos");
  const followers = document.querySelector(".user__stats__followers");
  const following = document.querySelector(".user__stats__following");

  const location = document.querySelector(".user__links__location");
  const blog = document.querySelector(".user__links__website");
  const twitter = document.querySelector(".user__links__twitter");
  const company = document.querySelector(".user__links__company");

  fetchData().then((response) => {
    profilePictureDesktop.src = response.avatar_url;
    profilePicture.src = response.avatar_url;
    name.textContent = response.name;
    at.textContent = `@${response.login}`;
    const responseDate = new Date(response.created_at).toDateString();
    date.textContent = `Joined
    ${responseDate.substring(8, 10)}
     ${responseDate.substring(4, 7)}
      ${responseDate.substring(10, 15)}`;

    repos.textContent = response.public_repos;
    followers.textContent = response.followers;
    following.textContent = response.following;

    if (response.bio) bio.textContent = response.bio;
    else {
      bio.textContent = "This profile has no bio.";
      bio.style.opacity = "0.5";
    }

    if (response.location) location.textContent = response.location;
    else NotAvailableStyling(location);

    if (response.blog) blog.textContent = response.blog;
    else NotAvailableStyling(blog);

    if (response.twitter_username)
      twitter.textContent = response.twitter_username;
    else NotAvailableStyling(twitter);

    if (response.company) company.textContent = response.company;
    else NotAvailableStyling(company);
  });
})();
