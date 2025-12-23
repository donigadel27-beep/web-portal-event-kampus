// Toggle detail event
const toggleBtn = document.getElementById("toggleBtn");
const eventDetail = document.getElementById("eventDetail");

toggleBtn.addEventListener("click", function () {
  if (eventDetail.style.display === "none") {
    eventDetail.style.display = "block";
    toggleBtn.textContent = "Sembunyikan Detail Event";
  } else {
    eventDetail.style.display = "none";
    toggleBtn.textContent = "Tampilkan Detail Event";
  }
});

// Validasi form & counter peserta
const form = document.getElementById("registrationForm");
const counter = document.getElementById("counter");

let jumlahPeserta = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const jenis = document.getElementById("jenis").value;

  if (nama === "" || email === "" || jenis === "") {
    alert("Semua data wajib diisi!");
  } else {
    alert("Pendaftaran berhasil");
    jumlahPeserta++;
    counter.textContent = jumlahPeserta;
    form.reset();
  }
});
