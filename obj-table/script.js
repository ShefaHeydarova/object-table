let arr = [
  {
    name: "Azərbaycan",
    capital: "Bakı",
    territory: 86600,
    population: 10240000,
    monetaryUnit: "Manat",
    flag: `<img src="images/azerbaijan.png">`,
  },
  {
    name: "Türkiyə",
    capital: "Ankara",
    territory: 780580,
    population: 84339067,
    monetaryUnit: "Lirə",
    flag: `<img src="images/turkey.png">`,
  },
  {
    name: "Rusiya",
    capital: "Moskva",
    territory: 17075400,
    population: 145934862,
    monetaryUnit: "Rubl",
    flag: `<img src="images/russia.png">`,
  },
  {
    name: "Almaniya",
    capital: "Berlin",
    territory: 357021,
    population: 83783942,
    monetaryUnit: "Avro",
    flag: `<img src="images/germany.png">`,
  },
  {
    name: "China",
    capital: "Pekin",
    territory: 9596960,
    population: 1445323776,
    monetaryUnit: "Yuan",
    flag: `<img src="images/china.png">`,
  },
];

let tbl = document.getElementById("tbl");

function table() {
  let screen = "";

  screen += `<tr>
  <th>Ölkə</th>
  <th>Paytaxtı</th>
  <th>Ərazisi (m<sup>2</sup>)</th>
  <th>Əhalisi (2020)
  </th><th>Pul vahidi</th>
  <th>Bayrağı</th>
  </tr>`;

  for (let obj of arr) {
    screen += `<tr>`;

    for (let item in obj) {
      screen += `<td>${obj[item]}</td>`;
    }

    screen += `</tr>`;
  }

  tbl.innerHTML = screen;
}
table();
