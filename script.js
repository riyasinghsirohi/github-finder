// var form =document.getElementById('myform')

// form.addEventListener('submit',function(e){

//     e.preventDefault()

//     var search= document.getElementById('search').value  
//     var originalName = search.split(' ').join('')
    
// // document.getElementById("result").innerHTML =""
//   fetch("https://api.github.com/users/"+originalName)
//   .then((result) => result.json())
//   .then((data) => {
//       console.log(data)

//       document.getElementById('result').innerHTML =`
//       <a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
//       `
//   })
// })

document.getElementById('btn').addEventListener('click',showGitHubProfile)

function showGitHubProfile(){
  

 let username=document.getElementById('gusername').value
 let url='https://api.github.com/users/'+username
 fetch(url).then(res=>res.json()).then(data=>{
   if(data.message){
    document.getElementById('res').innerHTML=`
  <h3>Profile Not Found </h3>
   `
   }
   else{
     console.log(data)
     document.getElementById('res').innerHTML=`
      <img src="${data.avatar_url}" style="width:100%">
      <p>${data.name} (${data.login})</p>
      <p>${data.bio}</p>
     `
   }
  
 }).catch(e=>{
   console.log(e)
 })
}