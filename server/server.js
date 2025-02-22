const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const User = require('./models/user'); // Use capital 'U' for models (best practice)
const Becon = require('./models/becon');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://bluetoothbecon:a5FSkDmP2Pog2Orj@cluster0.s7bqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// GET all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Corrected this line
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

//GET ALL BECONS
app.get('/becon', async (req, res) => {
    try {
        const becons = await Becon.find(); // Corrected this line
        res.status(200).json(becons);
    } catch (error) {
        res.status(500).json({ error: "Error fetching becons" });
    }
});
//User returns by name
app.get('/users/:name', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.params.name }); 

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const name =user.name;
        const password =user.password;

        res.status(200).json({name , password}); //can return user name and password
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user data' });
    }
});

//get becon by bname

app.get('/becon/:Bname', async (req, res) => {
    try {
        const becon = await Becon.findOne({ Bname: req.params.Bname }); 

        if (!becon) {
            return res.status(404).json({ message: 'Becon not found' });
        }

        res.status(200).json(becon); 
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        
        
        const newUser = new User({ name, email, phone, password,});
        await newUser.save();
        
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: "Email already exists" });
    }
});
// Start the server
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
