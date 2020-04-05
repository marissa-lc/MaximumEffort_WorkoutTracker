const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(dbWorkouts =>{
        res.json(dbWorkouts);
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workout/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            params.id, 
            {$push: {excercises: body}},
            {new: true, runValidators: true}
            ).then(dbWorkouts => {
                res.json(dbWorkouts);
            }).catch(err => {
                res.json(dbWorkouts);
            });
});

router.get("/api/workouts", (req, res) => {
    Workout.find().then(dbworkouts => {
        res.json(dbworkouts);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(dbworkouts => {
        console.log(db.Workouts)
        res.json(dbworkouts);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;