const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = '' //insert mongodb connection string specifying the port

//api sctructures to react native and next.js

app.use(cors());
app.use(express.json());

//api connection to mongodb with mongoose

mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection established'))
    .catch(err => console.log(err));

// insert all the routes here

//an example route
app.get('/', (req,res) => {
        res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
        console.log('Server is running on port ${PORT}')
});


