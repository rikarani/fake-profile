export const generateUser = () => {
  // * Element HTML
  const gambar = document.getElementById("gambar");
  const nama = document.getElementById("nama");
  const lokasi = document.getElementById("lokasi");
  const email = document.getElementById("email");

  fetch("https://randomuser.me/api/?gender=female")
    .then((respon) => respon.json())
    .then((hasil) => {
      gambar.setAttribute("src", `${hasil.results[0].picture.large}`);
      // nama.textContent = `${hasil.results[0].name.first} ${hasil.results[0].name.last} `;
      // lokasi.textContent = `${hasil.results[0].location.city}, ${hasil.results[0].location.country}`;
      // email.textContent = `${hasil.results[0].email}`;
    });

  fetch("https://erika-cors.herokuapp.com/https://api.namefake.com/indonesian-indonesia/female")
    .then((respon) => respon.json())
    .then((hasil) => {
      nama.textContent = `${hasil.name}`;
      lokasi.textContent = `${hasil.address}`;
      email.textContent = `${hasil.email_u}@${hasil.email_d}`;
    });
};
