window.onload = function () {
  for (let i = 1; i < 5; i++) {
    document
      .getElementById("modalBtn" + i)
      .addEventListener("click", function () {
        document.getElementById("modal" + i).style.display = "block";
        document.querySelector(".blackBg").style.display = "block";
      });

    document.getElementById("close" + i).addEventListener("click", function () {
      document.getElementById("modal" + i).style.display = "none";
      document.querySelector(".blackBg").style.display = "none";
    });
  }
};
