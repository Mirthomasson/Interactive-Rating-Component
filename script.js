const starWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");

  stars.forEach((star, clickedIdx) => {
    star.addEventListener('click', () => {
      starWrapper.classList.add("disabled")
      stars.forEach((otherStar, otherIdx) => {
        if (otherIdx <= clickedIdx) {
          otherStar.classList.add("active");
        }
      })
      console.log(`${clickedIdx + 1}`);
      //Post

    });
  });



document.getElementById("submit-button").onclick = function () {
  location.href = "./index-2.html";
  
};

