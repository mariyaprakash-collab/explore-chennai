const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const placeRoutes = require("./routes/placeRoutes");

dotenv.config();

const app = express()

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/places",placeRoutes);
app.post("/admin", (req,res) => {
  const formdata= req.body;
  console.log("recieved data:",formdata)
  res.status(200).json({message:"recieved succesfully" , data:formdata})
})

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
  });
};

startServer();