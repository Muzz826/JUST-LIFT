// Set up
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

// Configuration
mongoose.connect("mongodb+srv://db-admin:FUPBscObNKC3uJlZ@cluster0.rmtdz.mongodb.net/jf")
.then(() => {
  console.log("Connected to database successfully!");
})
.catch(() => {
  console.log("Connection to database failed!");
});

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// database model
var Exercise = mongoose.model('Exercise', {
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
});


// get all exercises
app.get('/api/exercises', function (req, res) {

    console.log("Listing exercises...");

    // get all exercises in MongoDB
    Exercise.find(function (err, exercises) {

        // if there is an error retrieving then send the error
        if (err) {
            res.send(err);
        }

        res.json(exercises); // return all exercises
    });
});

// create exercise
app.post('/api/exercises', function (req, res) {

    console.log("creating exercise...");

    Exercise.create({
        name: req.body.name,
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.sets,
        done: false
    }, function (err, exercise) {
        if (err) {
            res.send(err);
        }

        // create and return all exercises
        Exercise.find(function (err, exercises) {
            if (err)
                res.send(err);
            res.json(exercises);
        });
    });

});

// Update a exercise
app.put('/api/exercises/:id', function (req, res) {
    const exercises = {
        name: req.body.name,
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.sets,
    };
    console.log("Updating Exercise: ", req.params.id);
    Exercise.update({_id: req.params.id}, exercise, function (err, raw) {
        if (err) {
            res.send(err);
        }
        res.send(raw);
    });
});


// Delete selected exercise
app.delete('/api/exercises/:id', function (req, res) {
    Exercise.remove({
        _id: req.params.id
    }, function (err, exercise) {
        if (err) {
            console.error("Error deleting exercise...", err);
        }
        else {
            Exercise.find(function (err, exercises) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(exercises);
                }
            });
        }
    });
});


// Start app and listen on port 3000  
app.listen(process.env.PORT || 3000);
console.log("MongoDB databse listening on port  - ", (process.env.PORT || 3000));