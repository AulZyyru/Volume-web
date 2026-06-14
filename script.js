const bangun = document.getElementById("bangun");
const inputArea = document.getElementById("inputArea");
const hasil = document.getElementById("hasil");

function renderInput() {
  let type = bangun.value;
  let html = "";

  if (type === "kubus") {
    html = `
      Sisi: <input id="a">
    `;
  }

  if (type === "balok") {
    html = `
      Panjang: <input id="p"><br>
      Lebar: <input id="l"><br>
      Tinggi: <input id="t">
    `;
  }

  if (type === "tabung") {
    html = `
      Jari-jari: <input id="r"><br>
      Tinggi: <input id="t">
    `;
  }

  if (type === "kerucut") {
    html = `
      Jari-jari: <input id="r"><br>
      Tinggi: <input id="t">
    `;
  }

  if (type === "bola") {
    html = `
      Jari-jari: <input id="r">
    `;
  }

  if (type === "prisma") {
    html = `
      Luas alas: <input id="a"><br>
      Tinggi: <input id="t">
    `;
  }

  if (type === "limas") {
    html = `
      Luas alas: <input id="a"><br>
      Tinggi: <input id="t">
    `;
  }

  inputArea.innerHTML = html;
  attachListener();
}

function attachListener() {
  inputArea.querySelectorAll("input").forEach(i => {
    i.addEventListener("input", hitung);
  });
}

function hitung() {
  let type = bangun.value;
  let v = 0;

  let get = id => Number(document.getElementById(id)?.value || 0);

  if (type === "kubus") {
    let a = get("a");
    v = a * a * a;
  }

  if (type === "balok") {
    v = get("p") * get("l") * get("t");
  }

  if (type === "tabung") {
    v = 3.14 * get("r") * get("r") * get("t");
  }

  if (type === "kerucut") {
    v = (1/3) * 3.14 * get("r") * get("r") * get("t");
  }

  if (type === "bola") {
    v = (4/3) * 3.14 * get("r") * get("r") * get("r");
  }

  if (type === "prisma") {
    v = get("a") * get("t");
  }

  if (type === "limas") {
    v = (1/3) * get("a") * get("t");
  }

  hasil.innerText = v.toFixed(2);
}

bangun.addEventListener("change", renderInput);

renderInput();
