const button = document.getElementById("users-btn");
const demo = document.getElementById("demo");

const getFacts = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://catfact.ninja/fact", true);
  xhr.send();
  xhr.onload = function () {
    if (this.status == 200) {
      const message = JSON.parse(this.responseText);
      demo.innerHTML = message.fact;
      if (demo.innerHTML.split(" ").length > 25) {
        demo.style.fontSize = "1.7rem";
      } else {
        demo.style.fontSize = "2rem";
      }
    }
  };
};

button.addEventListener("click", getFacts);
