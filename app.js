const responseData = fetch(
  `https://data.cityofnewyork.us/resource/erm2-nwe9.json`
);
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

const bkl = document.querySelector("#brooklyn");
const man = document.querySelector("#manhattan");
const queens = document.querySelector("#queens");
const bronx = document.querySelector("#bronx");
const st = document.querySelector("#staten-island");
const complaintNum = document.getElementById("number");

// const input = Number(complaintNum.value);

//function Brooklyn
//  function brooklynData(){
//     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD&$select=complaint_type&$limit=10`)
//     .then(response => response.json())
// .then(data => console.log(data))
//     .catch(err => console.log(err))
// }
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
        console.log(
          `Brooklyn NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
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
        console.log(
          `Manhattan NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
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
        console.log(
          `Bronx NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
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
        console.log(
          `Queens NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
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
        console.log(
          `Staten Island NYPD complaint type ${index} is ${complaint.complaint_type}`
        );
      })
    )

    .catch((err) => console.log(err));
}
st.addEventListener("click", statenIslandData);
