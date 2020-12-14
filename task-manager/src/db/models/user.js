const mongoose = require('mongoose');
const validator = require('validator');

const user = mongoose.model('user',{
    name:{
        type : String,
        trim : true
    },
    email:{
        type: String,
        required : true,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password : {
       type : String,
       required : true,
       trim : true,
       minlength : 7,
       validate(value){
           if(value.toLowerCase().includes('password')){
              throw new Error('Password is invalid')
           }
       }
    },
    age : {
        type : Number,
        default : 0,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})
// const me = new user({
//     name : 'Jesh Venkatesh',
//     age : 25,
//     email : 'abc@abc.com',
//     password : 'pwdddddddd'
// });
// me.save().then(()=>{
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

module.exports = user;