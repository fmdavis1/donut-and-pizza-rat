const responseData = fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))

 const bkl = document.querySelector('#brooklyn')
 const  man = document.querySelector('#manhattan')
 const queens = document.querySelector('#queens')
 const bronx = document.querySelector('#bronx')
 const st = document.querySelector('#staten-island')

 //function Brooklyn
 function brooklynData(){
    fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=brooklyn')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}

 bkl.addEventListener('click', brooklynData)

 //fucntion Manhattan
 function manhattanData(){}
 man.addEventListener('click', manhattanData)

 //fucntion bronx
 function bronxData(){}
 bronx.addEventListener('click', bronxData)

 //fucntion queens
 function queensData(){}
 queens.addEventListener('click', queensData)

 //fucntion Staten_island
 function statenIslandData(){}
 st.addEventListener('click', statenIslandData)


