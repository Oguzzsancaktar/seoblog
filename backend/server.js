const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose")
require("dotenv").config();

// bring routes
const blogRoutes = require("./routes/blog")
const authRoutes = require("./routes/auth")

// app
const app = express();

// DB
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("DB Connected");
  });

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// routes middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes)


// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes
app.get("/api", (req, res) => {
  res.json({ time: Date().toString() });
});

// port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});