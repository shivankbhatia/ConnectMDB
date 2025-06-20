const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

//routes

//CRUD Opreations..

// View
router.get('/user', async (req, res) => {
    console.log("Received a GET request.")
    try {
        // all users are fetched...
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//Create
router.post('/user', async (req, res) => {
    console.log("Received reques for POST method.")
    try {
        const { name, age, weight } = req.body;
        const newuser = new User({ name, age, weight });
        await newuser.save();
        res.status(200).json({
            success: true,
            user: newuser
        });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
})

//Update
router.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, weight } = req.body;

    try {
        const updatingUser = await User.findByIdAndUpdate(
            id,
            {
                name, age, weight
            });
        if (!updatingUser) {
            res.json({ message: "User not found." })
        }
        res.status(200).json({
            success: true,
            user: updatingUser
        })
    }
    catch (error) {
        res.status(500).json({ success: false, message: err.message });
    }
})

//Delete
router.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteduser = await User.findByIdAndDelete(id);
        if (!deleteduser) {
            res.json({ message: "User not found." })
        }
        res.status(200).json({
            success: true,
            message: "user deleted Successfully."
        })
    }
    catch (error) {
        res.status(500).json({ success: false, message: err.message });
    }
})

module.exports = router;