const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require ('./config/keys').mongoURI;

const athletes = require('./routes/api/athletes');

app.use(express.json());
app.use('/api/athletes', athletes);

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("App Works!"));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// app.use(express.static(path.join(__dirname, 'client')));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));