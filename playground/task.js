// const tasks = {
//     taskArray : [{
//         text : 'text one',
//         completed : true
//     },
//     {
//         text : 'text two',
//         completed : false
//     },{
//         text : 'text three',
//         completed : false
//     }
// ],
// getTodo(){
//     return this.taskArray.filter((task) => task.completed === false)
// }
// }
// console.log(tasks.getTodo());

//   callback example

// example One --- callback

// const geoCode = (address,callback)=>{
    
//     setTimeout(()=>{
//         const data = {
//             latitude : 12,
//             longitude : 4
//         }
//         callback(data)
//     },2000)
// };

// geoCode('bangalore',(data)=>{
// console.log(data)
// });

//example two-- callback

const add = (x,y,callback)=>{
    setTimeout(()=>{
        const sum = x + y;
        callback(sum)
    })
}
add(4,6,(sum)=>{
    console.log(sum)
});