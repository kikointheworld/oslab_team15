window.onload = function () {
  /*function onClick() {
    document.querySelector(".modalWrap").style.display = "block";
    document.querySelector(".blackBg").style.display = "block";
  }
  function offClick() {
    document.querySelector(".modalWrap").style.display = "none";
    document.querySelector(".blackBg").style.display = "none";
  }
  */
  for(let i=1; i < 5; i++) {
    document.getElementById("modalBtn"+i).addEventListener("click", function() {
      document.getElementById("modal"+i).style.display = "block";
      document.querySelector(".blackBg").style.display = "block";
    })

    document.getElementById("close"+i).addEventListener("click", function() {
      document.getElementById("modal"+i).style.display = "none";
      document.querySelector(".blackBg").style.display = "none";
    })
  }
  /*
  document.getElementById("modalBtn1").addEventListener("click", onClick);
  document.getElementById("modalBtn2").addEventListener("click", onClick);
  document.getElementById("modalBtn3").addEventListener("click", onClick);
  document.getElementById("modalBtn4").addEventListener("click", onClick); 
  document.querySelector(".modalClose").addEventListener("click", offClick);*/
};
