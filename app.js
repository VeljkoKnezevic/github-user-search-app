const fetchData = async (value) => {
  const response = await fetch(
    `https://api.github.com/users/${value || "Octocat"}`,
    {
      mode: "cors",
      headers: {
        Authorization: "Token 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",
      },
    }
  );
  const data = await response.json();

  return data;
};

const NotAvailableStyling = (element) => {
  element.textContent = "Not Available";
  element.parentElement.style.opacity = "0.5";
};

const populateData = (value) => {
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

  fetchData(value).then((response) => {
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

    if (response.bio) {
      bio.textContent = response.bio;
      bio.style.opacity = "1";
    } else {
      bio.textContent = "No bio available.";
      bio.style.opacity = "0.5";
    }

    if (response.location) {
      location.textContent = response.location;
      location.parentElement.style.opacity = "1";
    } else NotAvailableStyling(location);

    if (response.blog) {
      blog.textContent = response.blog;
      blog.parentElement.style.opacity = "1";
    } else NotAvailableStyling(blog);

    if (response.twitter_username) {
      twitter.textContent = response.twitter_username;
      twitter.parentElement.style.opacity = "1";
    } else NotAvailableStyling(twitter);

    if (response.company) {
      company.textContent = response.company;
      company.parentElement.style.opacity = "1";
    } else NotAvailableStyling(company);
  });
};

populateData();
document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  let input = e.target.elements[0];
  populateData(input.value);

  input.value = "";
});

const styles = () => {};

const modeSwitcher = (() => {
  const clickable = document.querySelector(".nav__clickable");
  const image = document.querySelector(".nav__icon");

  document.addEventListener("DOMContentLoaded", (e) => {
    document.documentElement.setAttribute("data-theme", "light");
  });

  clickable.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    let switchTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", switchTheme);

    if (document.documentElement.getAttribute("data-theme") === "dark") {
      image.src = "./assets/icon-sun.svg";
    } else {
      image.src = "./assets/icon-moon.svg";
    }
  });
})();
