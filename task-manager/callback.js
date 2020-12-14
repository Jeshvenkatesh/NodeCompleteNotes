const doWorkCallback = (callback) => {
    setTimeout(()=>{
        callback('some error',undefined)
    },2000)
}
doWorkCallback((error,result)=>{
    if(error){
        return console.log(error)
    }
    console.log(result)
})