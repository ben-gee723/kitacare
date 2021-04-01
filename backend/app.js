const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
//routes:
const indexRoutes = require("./routes/indexRoute");
const userRoutes = require("./routes/userRoutes");
const kgRoutes = require("./routes/kgRoutes");
const childRoutes = require("./routes/childRoutes");
const groupRoutes = require("./routes/groupRoutes");
const calendarRoutes = require("./routes/calendarRoutes");

//middlewares:
const app = express();
//app.use(cors());
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();
const config= require("./config/configuration")
if(config.environment==="development"){
  const morgan = require("morgan")
  app.use(morgan("dev"))
}
app.use(cors());


//cors:
const setCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers","Content-Type, Access");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Expose-Headers","*");
  next();
};
app.use(setCors)

//endpoints:
app.use("/", indexRoutes);
app.use("/users", userRoutes);
app.use("/kg", kgRoutes);
app.use("/child", childRoutes);
app.use("/group", groupRoutes);
app.use("/calendar", calendarRoutes);


//connection:
mongoose
  .connect(process.env.MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection established"))
  .catch(err => console.log(err));

//ERROR HANDLING:
app.use((req, res, next) => {
  let error = new Error("no matching routes found");
  error.status = 404;
  next(error);
});

//UNIVERSAL ERROR HANDLING:
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ success: false, message: err.message });
});

app.listen(3001 || process.env.PORT, () => console.log("server is running"));
