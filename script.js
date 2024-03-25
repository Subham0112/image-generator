
let imageShow=document.getElementById('img')
async function randomImg(){
    let i=Math.floor(Math.random()*1084)
    let a=fetch(`https://picsum.photos/id/${i}/700`)
    a.then(function(value){
      return value
    }).then(function(value2){
        imageShow.src=value2.url;
         console.log("id:"+ i)

          
    }).catch(function(error){
    console.log("error on loading image ")
    })
    }

