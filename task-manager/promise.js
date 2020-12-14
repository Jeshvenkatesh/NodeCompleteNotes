const doworkPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('resolve method')
        reject('There was an error');
    },2000)
});
doworkPromise.then((result)=>{
    console.log('Success',result)
}).catch((error)=>{
    console.log(error)
})
