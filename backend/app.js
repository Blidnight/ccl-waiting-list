const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

const waitingListSchema = new mongoose.Schema({
  fullName : String,
  email: String,
  phone: Number,
  message : String,
});
const waitingListModel = mongoose.model("WaitingList", waitingListSchema);

app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))

app.post('/waitingList', (req, res) => {
  new waitingListModel(req.body).save().then(() => {
    res.send(true);
  })
});

app.get('/waitingList', (req, res) => {
  waitingListModel.find().then((results) => {
    res.send(results);
  })
})

mongoose.connect("mongodb://localhost:27017/ccl_vision").then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
})