var countDownDate = new Date("august 28, 2022 08:00:00").getTime();

// Perbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {
  // Dapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("hitungMundur").innerHTML =
    days + "hari " + hours + "jam " + minutes + "menit";

  //Jika hitungan mundur selesai, tulis beberapa teks
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hitungMundur").innerHTML = "Acara Telah Dimulai";
  }
}, 1000);

var form = document.getElementById("ucapan-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var nama = document.getElementById('nama').value
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("ucapan-form")),
  }).then((response) => response.json()).then((html) => {
    Swal.fire(
      `Terima kasih ${nama}`,
      'Telah memberikan ucapannya!',
      'success'
    )
    form.reset()
  });
});
