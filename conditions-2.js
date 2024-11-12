db.test.find({
    gender: "Male",
    age: {$in: [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]},
    interests: "Cooking"
})
   .projection({gender:1, age: 1, interests:1})
   .sort({age:1})
   
   //5-4 $in, $nin, implicit and condition
   
   