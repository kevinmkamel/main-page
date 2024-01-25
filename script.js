function security() {
    var password = prompt("برجاء ادخال الباسورد");
    if (password == "123") {
      window.location.href = "https://forms.gle/WkmvWP2vYorgAGsu9";
    } else {
      alert("باسورد غلط برجاء اعادة المحاوله");
    }
  }