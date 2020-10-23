window.addEventListener("DOMContentLoaded", () => {
  fetch("../json/users.json")
    .then((res) => res.json())
    .then((users) => {
      let count = 0;
      let current1 = 0;
      let current2 = 1;
      let current3 = 2;
      let usersResults = users.results;
      let nameTitle1 = document.querySelector(".name-title-nr-1");
      //prettier-ignore
      nameTitle1.innerHTML = usersResults[current1].name.title + " " + usersResults[current1].name.first + " " + usersResults[current1].name.last;

      let profileImg1 = document.querySelector(".img-nr-1");
      profileImg1.src = usersResults[current1].picture.large;
      let email1 = document.querySelector(".email-link-nr-1");
      email1.innerHTML = usersResults[current1].email;
      let phone1 = document.querySelector(".phone-nr-nr-1");
      phone1.innerHTML = usersResults[current1].phone;

      let nameTitle2 = document.querySelector(".name-title-nr-2");
      //prettier-ignore
      nameTitle2.innerHTML = usersResults[current2].name.title + " " + usersResults[current2].name.first + " " + usersResults[current2].name.last;

      let profileImg2 = document.querySelector(".img-nr-2");
      profileImg2.src = usersResults[current2].picture.large;
      let email2 = document.querySelector(".email-link-nr-2");
      email2.innerHTML = usersResults[current2].email;
      let phone2 = document.querySelector(".phone-nr-nr-2");
      phone2.innerHTML = usersResults[current2].phone;

      let nameTitle3 = document.querySelector(".name-title-nr-3");
      //prettier-ignore
      nameTitle3.innerHTML = usersResults[current3].name.title + " " + usersResults[current3].name.first + " " + usersResults[current3].name.last;

      let profileImg3 = document.querySelector(".img-nr-3");
      profileImg3.src = usersResults[current3].picture.large;
      let email3 = document.querySelector(".email-link-nr-3");
      email3.innerHTML = usersResults[current3].email;
      let phone3 = document.querySelector(".phone-nr-nr-3");
      phone3.innerHTML = usersResults[current3].phone;
      
      let nextBtn = document.querySelector(".next");
      let backBtn = document.querySelector(".back");

      nextBtn.addEventListener("click", () => {
        count += 3;
        current1 = 0 + count;
        current2 = 1 + count;
        current3 = 2 + count;
        if (current1 >= usersResults.length) {
          console.log("max");
        } else if (current2 >= usersResults.length) {
          console.log("max");
        } else if (current3 >= usersResults.length) {
          setTimeout(() => {
            location.reload();
          }, 5000);
        }
        let nameTitle = document.querySelector(".name-title-nr-1");
        //prettier-ignore
        nameTitle.innerHTML = usersResults[current1].name.title + " " + usersResults[current1].name.first + " " + usersResults[current1].name.last;

        let profileImg1 = document.querySelector(".img-nr-1");
        profileImg1.src = usersResults[current1].picture.large;
        let email = document.querySelector(".email-link-nr-1");
        email.innerHTML = usersResults[current1].email;
        let phone = document.querySelector(".phone-nr-nr-1");
        phone.innerHTML = usersResults[current1].phone;

        let nameTitle2 = document.querySelector(".name-title-nr-2");
        //prettier-ignore
        nameTitle2.innerHTML = usersResults[current2].name.title + " " + usersResults[current2].name.first + " " + usersResults[current2].name.last;

        let profileImg2 = document.querySelector(".img-nr-2");
        profileImg2.src = usersResults[current2].picture.large;
        let email2 = document.querySelector(".email-link-nr-2");
        email2.innerHTML = usersResults[current2].email;
        let phone2 = document.querySelector(".phone-nr-nr-2");
        phone2.innerHTML = usersResults[current2].phone;

        let nameTitle3 = document.querySelector(".name-title-nr-3");
        //prettier-ignore
        nameTitle3.innerHTML = usersResults[current3].name.title + " " + usersResults[current3].name.first + " " + usersResults[current3].name.last;

        let profileImg3 = document.querySelector(".img-nr-3");
        profileImg3.src = usersResults[current3].picture.large;
        let email3 = document.querySelector(".email-link-nr-3");
        email3.innerHTML = usersResults[current3].email;
        let phone3 = document.querySelector(".phone-nr-nr-3");
        phone3.innerHTML = usersResults[current3].phone;
        console.log(current1);
        console.log(current2);
        console.log(current3);

      });

      backBtn.addEventListener("click", () => {
        count -= 3;
        current1 = current1 - 3;
        current2 = current2 - 3;
        current3 = current3 - 3;
        let nameTitle = document.querySelector(".name-title");
        //prettier-ignore
        nameTitle.innerHTML = usersResults[current1].name.title + " " + usersResults[current1].name.first + " " + usersResults[current1].name.last;

        let profileImg = document.querySelector("img");
        profileImg.src = usersResults[current1].picture.large;
        let email = document.querySelector(".email-link");
        email.innerHTML = usersResults[current1].email;
        let phone = document.querySelector(".phone-nr");
        phone.innerHTML = usersResults[current1].phone;
        let nameTitle2 = document.querySelector(".name-title-nr-2");
        //prettier-ignore
        nameTitle2.innerHTML = usersResults[current2].name.title + " " + usersResults[current2].name.first + " " + usersResults[current2].name.last;

        let profileImg2 = document.querySelector(".img-nr-2");
        profileImg2.src = usersResults[current2].picture.large;
        let email2 = document.querySelector(".email-link-nr-2");
        email2.innerHTML = usersResults[current2].email;
        let phone2 = document.querySelector(".phone-nr-nr-2");
        phone2.innerHTML = usersResults[current2].phone;

        let nameTitle3 = document.querySelector(".name-title-nr-3");
        //prettier-ignore
        nameTitle3.innerHTML = usersResults[current3].name.title + " " + usersResults[current3].name.first + " " + usersResults[current3].name.last;

        let profileImg3 = document.querySelector(".img-nr-3");
        profileImg3.src = usersResults[current3].picture.large;
        let email3 = document.querySelector(".email-link-nr-3");
        email3.innerHTML = usersResults[current3].email;
        let phone3 = document.querySelector(".phone-nr-nr-3");
        phone3.innerHTML = usersResults[current3].phone;
        console.log(current1);
        console.log(current2);
        console.log(current3);
      });
    });
});
