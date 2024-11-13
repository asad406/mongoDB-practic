db.test.updateOne(
    {
        _id: ObjectId("6406ad63fc13ae5a40000065")
    },
    // {
    //     $unset: { age: 22 } //Remove a specific field from a document.
    // }
    {
        // $addToSet: {languages: {$each: ["Thai","Bangla","Urdu"]}}
      // $pop: {languages: -1} //Remove first element.
    //   $pop: {languages: 1} //Remove last element.
        // $pull: {languages: "Bangla"}
        $pullAll: {languages: ["Bangla","Urdu"]}
    }
)