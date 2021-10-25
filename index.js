const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const app = express()
const URI = process.env.MONGO_URL

// app.use(bodyParser.json())
app.use(express.json())
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));



app.use('/', router);
app.use('/', postRoutes);
app.use('/', profileRoutes);
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build/')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT,(req,res)=>{
    console.log("Server is running")
})