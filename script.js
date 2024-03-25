
let imageShow=document.getElementById('img')
 function randomImg(){
    let i=Math.floor(Math.random()*1084)
    let a=fetch(`https://picsum.photos/id/${i}/800`)
    a.then(function(value){
      imageShow.src=value.url;
         console.log("id:"+ i)
    }).catch(function(error){
    console.log(error)
    })
    }

