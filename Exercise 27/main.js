  function handleSuccess(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const guul = false;
        if(guul){
                 resolve("Guul! Hawsha si fiican ayey u dhammaatay ✅")
        }else{
             reject("Qalad! Hawshu way fashilantay ❌")
        }
      }, 2000);
    })
  }
  handleSuccess()
  .then(data => console.log(data))
  .catch(error => console.log(error))