function fetchUserData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const Succes = false;
      if(Succes){
        resolve ({name : "nur", age:33})
      }else{
        reject("failed to fetch user data")
      }
    }, 2000);
  })
}
async function DisplayuserData(){
  try{
  const user = await fetchUserData()
  console.log(user)
  }catch (error){
      console.log(error)
  }
}
DisplayuserData()