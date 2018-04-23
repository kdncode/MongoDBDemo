var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bird_app");

var birdSchema = new mongoose.Schema({
    name: String,
    age: Number,
    root: String
});

var Bird = mongoose.model("Bird", birdSchema);

// Add a new bird to the DB
// var wick = new Bird({
//     name: "LungLing",
//     age: 10,
//     root: "Alaska"
// });

// wick.save( (err, bird ) => {
//     if(err) { console.log("Something went wrong") }
//     else { console.log("We just added a bird to the db") 
//            console.log(bird) }
// });


// Shorter way to create a bird
Bird.create({
    name: "Poong",
    age: 22,
    root: "Norway"
}, (err, bird) => {
    if (err) {console.log(err)}
    else {console.log(bird)}
});

//  Retrieve all birds from DB & console.log each one
Bird.find({}, (err, birds) => {
    if(err) {console.log("Oops!", err)}
    else { console.log("All the birds from DB")
           console.log(birds) }
})