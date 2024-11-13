// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     { $set: { age: 22 } }
// )
/*
To set one value in a array
db.test.updateOne(
    {_id:  ObjectId("6406ad63fc13ae5a40000065")},
    {$addToSet:{
        interests: "swimming"
    }})
*/
//$push like $addToSet but it can update duplicate value.
db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    { $push: { interests: { $each: ["Writing","Travling", "Watching" ] } } }
)
