const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs=require('fs')

const app = express();
const url =
  "mongodb+srv://daniel:123@cluster0.t51gu.mongodb.net/myreactproject?retryWrites=true&w=majority";
//connect to db
mongoose.connect(url, (err) => {
  if (err) {
    console.log("DB error: ", err);
  } else {
    console.log("DB connected");
  }
});

app.use(express.json());
app.use(cors());

//create Schema

const GameSchema = new mongoose.Schema({
  gamename: {
    type: String,
    required: true,
  },
  daysSinceIplayed: {
    type: Number,
    required: true,
  },
});
const GameModel = mongoose.model("Game", GameSchema);
//loggin reqest Middleware
app.use((req,res,next)=>{
  fs.writeFileSync('loggedFiles.js',req.ip,req.app)
  //  console.log(req.ip)
   next()
})
//send get request
app.get("/games", async (req, res) => {
  const document = await GameModel.find();
  res.json(document);
});

//post date /insert data to db
app.post("/add", async (req, res) => {
  const gamename = req.body.gamename;
  const days = req.body.days;
  const document = new GameModel({
    gamename: gamename,
    daysSinceIplayed: days,
  });
  await document.save();
});

//Delete Game
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  await GameModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});



//update/eiddit Game
// app.put("/update", async (req, res) => {
//   const newgamename = req.body.newgamename;
//   const id = req.body.id;
//   const document = await new GameModel({gamename:gamename,daysSinceIplayed:days});
//   GameModel.findById(id,updatedGame)=>{
//        updatedGame.gamename=newgamename
          // upatedgame.save()
//   
//   await document.save()
// });

//listen on port
app.listen(3050, () => {
  console.log("listening on port 3050...");
});
// { gamename: "football", daysSinceIplayed: 3 }
