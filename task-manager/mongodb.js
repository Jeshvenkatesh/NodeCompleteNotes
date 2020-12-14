// CRUD operations

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const databaseName = "KLM";

// const id = new mongodb.ObjectID();
// console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);    //Can be a 24 byte hex string, 12 byte binary string or a Number.

mongoClient.connect( url,{useNewUrlParser:true},(error,client) => {
    if(error){
        return console.log('Error')
    }
    console.log('Connected sucessfully');
    const db = client.db('KLM');
    // db.collection('sales').insertMany([
    //     {
    //         _id : id,
    //         month:'Mar',
    //         total : 3000
    //     },
    //     {
    //         month:'April',
    //         total : 4000
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(result.ops);
    // })
    // db.collection('sales').findOne({
    //     // month : "Feb"
    //     _id : mongodb.ObjectID("5fd5d595572a97328c18bbcf")
    // },(error,result) => {
    //           if(error){
    //               return console.log('error')
    //           }
    //           console.log(result);
    // });
    // db.collection('sales').find({month : 'Jan'}).toArray((error, users)=>{
    //    if(error){
    //        return console.log('Error')
    //    }
    //    console.log(users);
    // })

    // db.collection('sales').updateOne(      // update operator...
    //     {
    //     _id : mongodb.ObjectID("5fd5d595572a97328c18bbcf")
    //   },
    //   {
    //       $set: {
    //            total : 10000
    //       }
    //   }).then((result)=>{
    //       console.log(result)
    //   }).catch((error)=>{
    //       console.log(error);
    //   })

    // db.collection('sales').updateOne(
    //     {
    //         _id : mongodb.ObjectID("5fd5d595572a97328c18bbcf")
    //     },
    //     {
    //         $inc : {
    //             total : 5
    //         },
    //         $set: { "Closed" : true }
    //     }
    // ).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // db.collection('sales').updateMany(
    //     {
    //         month : 'Jan'
    //     },
    //     {
    //         $set : {
    //             total : 50000,
    //             marked :'delete'
    //         }
    //     }
    // ).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('sales').deleteMany(
    //     {
    //         marked : 'delete'
    //     }
    // ).then((result)=>{
    //   console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    db.collection('sales').deleteOne(
        {
            _id : mongodb.ObjectID("5fd5f5d2905a5c1620286428")
        }
    ).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
});

