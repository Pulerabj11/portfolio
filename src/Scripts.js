function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.padding = "15px 10%";
  } else {
    document.getElementById("nav").style.fontSize = "30px 10%";
  }
}

