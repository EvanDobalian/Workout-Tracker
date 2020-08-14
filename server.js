const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./models/index');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populate', { useNewUrlParser: true });

//API routes
app.get('/api/workouts', (req, res) => {
    db.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

app.get('/api/workouts/range', (req, res) => {
    db.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

app.post('/api/workouts', (req, res) => {
    db.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        (console.log(err));
    });
});

app.put('/api/workouts/:id', ({ params, body }, res) => {
    console.log(body);
    db.findByIdAndUpdate(params.id, { $push: {exercises: body } })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

//html routes
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, './public/exercise.html'));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stats.html'));
});


app.listen(PORT, () => {
    console.log('Listening on localhost:' + PORT);
});
