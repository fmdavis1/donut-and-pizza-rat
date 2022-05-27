const responseData = fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json`)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

 const bkl = document.querySelector('#brooklyn')
 const  man = document.querySelector('#manhattan')
 const queens = document.querySelector('#queens')
 const bronx = document.querySelector('#bronx')
 const st = document.querySelector('#staten-island')
 let complaintNum = document.getElementById('number')
 

 //function Brooklyn
//  function brooklynData(){
//     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD&$select=complaint_type&$limit=10`)
//     .then(response => response.json())
// .then(data => console.log(data))
//     .catch(err => console.log(err))
// }
function brooklynData(){
     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD`)
     .then(response => response.json())
     .then(data => (data.map((complaint, index) =>{
      console.log(`Brooklyn NYPD complaint type ${index} is ${complaint.complaint_type}`)
      })))
 
     .catch(err => console.log(err))
 }

 bkl.addEventListener('click', brooklynData)

 //fucntion Manhattan
 function manhattanData(){
     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD`)
     .then(response => response.json())
     .then(data => (data.map((complaint, index) =>{
      console.log(`Manhattan NYPD complaint type ${index} is ${complaint.complaint_type}`)
      })))
 
     .catch(err => console.log(err))
 }
 man.addEventListener('click', manhattanData)

 //fucntion bronx
 function bronxData(){
     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD`)
     .then(response => response.json())
     .then(data => (data.map((complaint, index) =>{
      console.log(`Bronx NYPD complaint type ${index} is ${complaint.complaint_type}`)
      })))
 
     .catch(err => console.log(err))
 }
 bronx.addEventListener('click', bronxData)

 //fucntion queens
 function queensData(){
     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD`)
     .then(response => response.json())
     .then(data => (data.map((complaint, index) =>{
      console.log(`Queens NYPD complaint type ${index} is ${complaint.complaint_type}`)
      })))
 
     .catch(err => console.log(err))
 }
 queens.addEventListener('click', queensData)

 //fucntion Staten_island
 function statenIslandData(){
     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND&agency=NYPD`)
     .then(response => response.json())
     .then(data => (data.map((complaint, index) =>{
      console.log(`Staten Island NYPD complaint type ${index} is ${complaint.complaint_type}`)
      })))
 
     .catch(err => console.log(err))
 }
 st.addEventListener('click', statenIslandData)


