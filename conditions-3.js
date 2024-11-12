/*
db.test.find({
    $and: [
        { gender: "Female" },
        { age: { $ne: 15 } },
        { age: { $lte: 5 } }
    ]
})
    .project({
        age: 1,
        gender: 1
    })
    .sort({ age: 1 }) 
*/

db.test.find({
    $or:[
        {"address.city": "dhaka"},
        {"address.city": "Dongxi"},
        
        ]
})
   .projection({address: 1})
   .sort({})
   .limit(0)
