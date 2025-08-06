const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
app.use("/", authRoutes);
app.use("/dashboard", dashboardRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
