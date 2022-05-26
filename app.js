fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
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

 }


 bkl.addEventListener('click', brooklynData)


