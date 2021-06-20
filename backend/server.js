const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Bring Routes 
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

// APP
const app = express();

// DB
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("====================================");
    console.log("DB CONNECTED");
    console.log("====================================");
  });

// MiddleWares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());


// Routes Middleware
app.use('/api',blogRoutes)
app.use('/api',authRoutes)


// //routes
// app.get("/api", (req, res) => {
//   res.json({ time: Date().toString() });
// });

// Cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
  console.log(`${("Cors Console :>)", process.env.CLIENT_URL)}`);
}


// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
