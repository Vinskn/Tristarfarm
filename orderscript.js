var radioButtons = document.getElementsByName("pilihan");
var formKopi = document.getElementById("formKopi");
var formSayuran = document.getElementById("formSayuran");

// Sembunyikan form lanjutan secara default
formKopi.style.display = "none";
formSayuran.style.display = "none";

// Tambahkan event listener pada setiap input radio
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", showFormLanjutan);
}

function showFormLanjutan() {
  // Sembunyikan semua form lanjutan
  formKopi.style.display = "none";
  formSayuran.style.display = "none";

  // Periksa pilihan yang dipilih dan tampilkan form lanjutan yang sesuai
  if (radioButtons[0].checked) {
    formKopi.style.display = "block";
  } else if (radioButtons[1].checked) {
    formSayuran.style.display = "block";
  }
}
