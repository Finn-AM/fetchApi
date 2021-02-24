let url = "https://reqres.in/api/users";

function fetchData(){
fetch(url)
.then((res) => {

 if(!res.ok || !res.status === 200 ){
  throw Error('ERROR')
 }
 
 return res.json()

}).then((data)=>{
const apiData = data.data;
console.log(apiData);

let a = apiData.map((dat)=>{

return `
<div class="user-info">
<img src="${dat.avatar}">
<h2> Name : ${dat.first_name} ${dat.last_name} </h2>
<p> Email : <span class="email"> ${dat.email} </span> </p>
</div>
`

}).join('')

document.querySelector('main').innerHTML = a

}).catch(error => {

 console.log(error);
})
}


let zeus = {first_name : 'zeus'}

function postData(){
 fetch(url,{
  method: 'POST',
  headers: {
  "Content-Type" : "application/json"
 },
 body:
 JSON.stringify(zeus)
})

.then((res) => {

 if(!res.ok || !res.status === 200 ){
  throw Error('ERROR')
 }
 
 return res.json()

}).then((data)=>{
 console.log(data);


}).catch(error => {

 console.log(error);
})
}

fetchData();
postData();





