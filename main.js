// LOGO SPINNER
const spining = [{ transform: "rotate(0) scale(1)" }, { transform: "rotate(360deg) scale(0)" }];

const timing = {
  duration: 2000,
  iterations: 1,
};

const logo = document.querySelector("div.iks_title");

logo.addEventListener("click", () => {
  logo.animate(spining, timing);
});

// ANIMATION CSS on scroll

// height our teams
const containerTeams = document.getElementsByClassName("teams-1");
// height volunteers
const containerVolunteers = document.getElementsByClassName("container_volunteers");
// height join us
const containerJoinUs = document.getElementsByClassName("container_join-us");

show = () => {
  const body = document.querySelector("body");
  const teams = document.querySelectorAll(".container_teams div>div:nth-child(odd)");
  const volunteers = document.querySelector("section .container_volunteers");
  const joinUs = document.querySelector("section .container_join-us");

  body.addEventListener("mousewheel", (e) => {
    const heightPageY = e.pageY;
    if (heightPageY > containerVolunteers[0].offsetTop - 500) {
      volunteers.style.animation = "volunteers 2s";
      volunteers.style["transform"] = "scale(1)";
    }
    if (heightPageY > containerTeams[0].offsetTop - 400) {
      teams.forEach((item) => {
        item.style.animation = "ourTeams 2s";
        item.style.visibility = "visible";
      });
      if (heightPageY > containerJoinUs[0].offsetTop - 500) {
        joinUs.style.animation = "joinUs 2s";
        joinUs.style.visibility = "visible";
      }
    }
  });
};

show();
