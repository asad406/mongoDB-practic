//Query from an array
/*
db.test.find({
    friends: { $all: ["Najmus Sakib", "Mir Hussain","Fahim Ahammed Firoz","Tanmoy Parvez"] }
})
*/
//Query from an array of object
db.test.find({
    education: {
        $elemMatch: {
            "major": "Art",
            "institute": "Technische Universität Dresden",
            "year": 2003
        }
    }
})
    //5-7 $all , $elemMatch