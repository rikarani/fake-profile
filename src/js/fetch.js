export const generateUser = () => {
  const link = "https://randomuser.me/api/";

  // * Element HTML
  const gambar = document.getElementById("gambar");
  const nama = document.getElementById("nama");
  const lokasi = document.getElementById("lokasi");
  const email = document.getElementById("email");

  return fetch(link)
    .then((respon) => respon.json())
    .then((hasil) => {
      gambar.setAttribute("src", `${hasil.results[0].picture.large}`);
      nama.textContent = `${hasil.results[0].name.first} ${hasil.results[0].name.last} `;
      lokasi.textContent = `${hasil.results[0].location.city}, ${hasil.results[0].location.country}`;
      email.textContent = `${hasil.results[0].email}`;
    });
};