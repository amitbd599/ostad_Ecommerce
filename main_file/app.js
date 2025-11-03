const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotENV = require("dotenv");

dotENV.config();

let URL =
  "mongodb+srv://amitbd590:Czp5nsdi1itSzVRB@cluster0.wiqvbd4.mongodb.net/ostad-ecommerce?retryWrites=true&w=majority&appName=Cluster0";
let option = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  autoIndex: true,
  serverSelectionTimeoutMS: 50000,
};
mongoose
  .connect(URL, option)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set("strictQuery", false);

app.use(cookieParser());
app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);
app.use(mongoSanitize());
app.use(hpp());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

app.use("/api/v1", router);

app.use("/api/v1/get-file", express.static("uploads"));

// Add React Front End Routing supper admin
// app.get("/super-admin", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "client", "super-admin", "index.html"));
// });

app.use(
  "/super-admin",
  express.static(path.join(__dirname, "client", "super-admin", "dist"), {
    index: false, // important! prevents redirect 301
  })
);
app.get("/super-admin/*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "client", "super-admin", "dist", "index.html")
  );
});

// ✅ Serve static files from Vite's dist folder
app.use(express.static(path.join(__dirname, "client", "ecommerce", "dist")));
// Add React Front End Routing
app.get("*", function (req, res) {
  res.sendFile(
    path.resolve(__dirname, "client", "ecommerce", "dist", "index.html")
  );
});

module.exports = app;
