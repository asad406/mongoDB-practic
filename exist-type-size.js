/*
db.test.find({
    age: {$exists: true}
    //age: {$exists: false}
})


db.test.find({
    friends: {$type: "array"}
    // age: {$type: "int"}
    // address: {$type: "object"}
})
*/
db.test.find({
    friends: { $size: 5 }
})

// 5-6 $exists, $type,$size (Element Query)