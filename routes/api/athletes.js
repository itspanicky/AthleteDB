const express = require('express');
const router = express.Router();
const Athlete = require('../../models/Athlete');

router.get("/test", (req, res) => {
    res.json({msg: "This is the athlete route"});
});

// Add athlete '/api/athletes/add'
router.post('/add', (req, res) => {
    Athlete.findOne({ name: req.body.name})
        .then(athlete => {
            if (athlete) {
                return res.status(400).json({name: "Athlete already exist"})
            } else {
                const newAthlete = new Athlete({
                    name: req.body.name,
                    gender: req.body.gender,
                    nationality: req.body.nationality,
                    dob: req.body.dob,
                    sport: req.body.sport
                })

                newAthlete.save().then(athlete => res.json(athlete))
            }
        });
});

router.get('/:id', async (req, res) => {
    try {
        const athlete = await Athlete.findById(req.params.id)
        if (!athlete) {
            throw new Error()
        }
        res.send(athlete)
    } catch (e) {
        res.status(400).json({ error: "Athlete does not exist" })
    }
})

// router.patch('/:id/update', (req, res) => {
//     Athlete.findById(req.params.id)
//         .then( athlete => {
//         if (athlete) {
//             const updates = Object.keys(req.body)
//             const allowedUpdates = ['name', 'gender', 'nationality', 'dob', 'sport', 'about', 'interest', 'location', 'association', 'team', 'charity', 'pet', 'martial_status', 'avatar']

//             const isValidOperation = updates.every((update) => {
//                 return allowedUpdates.includes(update)
//             })

//             if (!isValidOperation) {
//                 return res.status(400).send({ error: 'Invalid updates!' })
//             }
            
//             const athlete = req.athlete
//             updates.forEach((update) => athlete[update] = req.body[update])
//             // athlete.save().then(res.send(athlete))
//             athlete.save().then(athlete => res.json(athlete))
//         } else {
//             return res.status(400).json({ error: "Athlete does not exist" })
//         }
//     });

// });


module.exports = router;