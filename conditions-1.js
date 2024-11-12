// db.test.find({gender:{$eq: "Male"}})
db.test.find({ age: { $gte: 10, $lte: 20 } })
    .project({ age: 1 })
    .sort({ age: 1 })
    
    //5-3 $eq, $neq, $gt, $lt, $gte, $lte
