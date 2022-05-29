

const bkl = document.querySelector("#brooklyn");
const man = document.querySelector("#manhattan");
const queens = document.querySelector("#queens");
const bronx = document.querySelector("#bronx");
const st = document.querySelector("#staten-island");
const complaintNum = document.getElementById("number");
const container = document.getElementById("container");


function brooklynData() {
  let input = Number(complaintNum.value);
  if (input === Number("")) {
    input = 10;
  }
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD&$limit=${input}`
  )
    .then((response) => response.json())
    .then((data) =>
      data.map((complaint, index) => {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let btn = document.createElement("button");

        btn.textContent = "What did the police do?";

        p1.textContent = complaint.complaint_type;

        div.appendChild(p1);
        div.appendChild(btn);

        container.appendChild(div);
        p2.classList.add("hidden");

        btn.addEventListener("click", function () {
          div.appendChild(p2);
          div.appendChild(p2);
          p2.classList.toggle("hidden");
          p2.textContent = complaint.resolution_description;
        });

        console.log(
          `Brooklyn NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
        console.log(`${complaint.resolution_description}`);
      })
    )

    .catch((err) => console.log(err));
}

bkl.addEventListener("click", brooklynData);

//fucntion Manhattan
function manhattanData() {
  let input = Number(complaintNum.value);
  if (input === Number("")) {
    input = 10;
  }
  console.log(input);
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD&$limit=${input}`
  )
    .then((response) => response.json())
    .then((data) =>
      data.map((complaint, index) => {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let btn = document.createElement("button");
        btn.textContent = "What did the police do?";

        p1.textContent = complaint.complaint_type;

        div.appendChild(p1);
        div.appendChild(btn);

        container.appendChild(div);
        p2.classList.add("hidden");

        btn.addEventListener("click", function () {
          div.appendChild(p2);
          div.appendChild(p2);
          p2.classList.toggle("hidden");
          p2.textContent = complaint.resolution_description;
        });
        console.log(
          `Manhattan NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
        console.log(`${complaint.resolution_description}`);
      })
    )

    .catch((err) => console.log(err));
}
man.addEventListener("click", manhattanData);

//fucntion bronx
function bronxData() {
  let input = Number(complaintNum.value);
  if (input === Number("")) {
    input = 10;
  }
  console.log(input);
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD&$limit=${input}`
  )
    .then((response) => response.json())
    .then((data) =>
      data.map((complaint, index) => {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let btn = document.createElement("button");
        btn.textContent = "What did the police do?";
        p1.textContent = complaint.complaint_type;

        div.appendChild(p1);
        div.appendChild(btn);

        container.appendChild(div);
        p2.classList.add("hidden");

        btn.addEventListener("click", function () {
          div.appendChild(p2);
          div.appendChild(p2);
          p2.classList.toggle("hidden");
          p2.textContent = complaint.resolution_description;
        });
        console.log(
          `Bronx NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
        console.log(`${complaint.resolution_description}`);
      })
    )

    .catch((err) => console.log(err));
}
bronx.addEventListener("click", bronxData);

//fucntion queens
function queensData() {
  let input = Number(complaintNum.value);
  if (input === Number("")) {
    input = 10;
  }
  console.log(input);
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD&$limit=${input}`
  )
    .then((response) => response.json())
    .then((data) =>
      data.map((complaint, index) => {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let btn = document.createElement("button");
        btn.textContent = "What did the police do?";
        p1.textContent = complaint.complaint_type;

        div.appendChild(p1);
        div.appendChild(btn);

        container.appendChild(div);
        p2.classList.add("hidden");

        btn.addEventListener("click", function () {
          div.appendChild(p2);
          div.appendChild(p2);
          p2.classList.toggle("hidden");
          p2.textContent = complaint.resolution_description;
        });
        console.log(
          `Queens NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
        console.log(`${complaint.resolution_description}`);
      })
    )

    .catch((err) => console.log(err));
}
queens.addEventListener("click", queensData);

//fucntion Staten_island
function statenIslandData() {
  let input = Number(complaintNum.value);
  if (input === Number("")) {
    input = 10;
  }
  console.log(input);
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND&agency=NYPD&$limit=${input}`
  )
    .then((response) => response.json())
    .then((data) =>
      data.map((complaint, index) => {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let btn = document.createElement("button");
        btn.textContent = "What did the police do?";
        p1.textContent = complaint.complaint_type;

        div.appendChild(p1);
        div.appendChild(btn);

        container.appendChild(div);
        p2.classList.add("hidden");

        btn.addEventListener("click", function () {
          div.appendChild(p2);
          div.appendChild(p2);
          p2.classList.toggle("hidden");
          p2.textContent = complaint.resolution_description;
        });
        console.log(
          `Staten Island NYPD complaint type ${index} is ${complaint.complaint_type}`
        );

        console.log(`${complaint.resolution_description}`);
      })
    )

    .catch((err) => console.log(err));
}
st.addEventListener("click", statenIslandData);

module.export;
